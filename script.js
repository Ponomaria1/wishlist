// ===== НАСТРОЙКИ SUPABASE =====
const SUPABASE_URL = 'https://kthzgdrvgkaujatmpndx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OQ44wevV1iJtIYwqeueuKg_mrpLEBLu';
// ================================

const defaultGifts = [
    {
        id: 1,
        name: 'мили чехол для наушников',
        image: 'https://ir-11.ozone.ru/s3/multimedia-4/wc2500/6828136024.jpg',
        link: 'https://ozon.ru/t/cFBeDQs',
        store: 'ozon',
        article: '3064683607',
        price: 275,
        booked: false,
        bookedBy: null
    },
    // ... остальные подарки остаются без изменений ...
    {
        id: 19,
        name: 'захотелось мне научиться краситься',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-g/wc1000/8963295244.jpg',
        link: 'https://ozon.ru/t/bTpQlHE',
        store: 'ozon',
        article: '1720641233',
        price: 428,
        booked: false,
        bookedBy: null
    }
];

let gifts = [];
let deviceId = '';
let isLoading = false;
let lastUpdate = 0;

function getDeviceId() {
    let id = localStorage.getItem('deviceId');
    if (!id) {
        id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', id);
    }
    return id;
}

async function loadFromServer() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/gifts?select=*`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        if (!response.ok) throw new Error('Ошибка загрузки');
        
        const data = await response.json();
        
        if (data && data.length > 0) {
            gifts = data;
            localStorage.setItem('gifts_backup', JSON.stringify(gifts));
            localStorage.setItem('last_update', Date.now().toString());
        } else {
            // Если таблица пуста, инициализируем дефолтными данными
            gifts = JSON.parse(JSON.stringify(defaultGifts));
            await initializeServer();
        }
    } catch (error) {
        console.log('Не удалось загрузить с сервера, используем локальную копию');
        const localBackup = localStorage.getItem('gifts_backup');
        if (localBackup) {
            gifts = JSON.parse(localBackup);
        } else {
            gifts = JSON.parse(JSON.stringify(defaultGifts));
        }
    }
    render();
}

async function initializeServer() {
    // Добавляем все подарки один раз при первой инициализации
    for (const gift of gifts) {
        await fetch(`${SUPABASE_URL}/rest/v1/gifts`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gift)
        });
    }
    localStorage.setItem('gifts_backup', JSON.stringify(gifts));
    localStorage.setItem('last_update', Date.now().toString());
}

async function saveToServer() {
    if (isLoading) return;
    isLoading = true;
    
    try {
        // Обновляем только измененные подарки, а не пересоздаем все
        for (const gift of gifts) {
            await fetch(`${SUPABASE_URL}/rest/v1/gifts?id=eq.${gift.id}`, {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    booked: gift.booked,
                    bookedBy: gift.bookedBy
                })
            });
        }
        
        console.log('Данные сохранены в Supabase');
        localStorage.setItem('gifts_backup', JSON.stringify(gifts));
        localStorage.setItem('last_update', Date.now().toString());
    } catch (error) {
        console.log('Ошибка при сохранении:', error);
    }
    
    isLoading = false;
}

// Функция для проверки обновлений от других пользователей
async function checkForUpdates() {
    const lastUpdateLocal = parseInt(localStorage.getItem('last_update') || '0');
    const now = Date.now();
    
    // Проверяем обновления каждые 30 секунд
    if (now - lastUpdateLocal < 30000) return;
    
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/gifts?select=*`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                // Проверяем, есть ли изменения в бронированиях
                let hasChanges = false;
                for (const serverGift of data) {
                    const localGift = gifts.find(g => g.id === serverGift.id);
                    if (localGift && 
                        (localGift.booked !== serverGift.booked || 
                         localGift.bookedBy !== serverGift.bookedBy)) {
                        hasChanges = true;
                        break;
                    }
                }
                
                if (hasChanges) {
                    gifts = data;
                    localStorage.setItem('gifts_backup', JSON.stringify(gifts));
                    localStorage.setItem('last_update', now.toString());
                    render();
                    console.log('Обновления получены от других пользователей');
                }
            }
        }
    } catch (error) {
        console.log('Ошибка при проверке обновлений:', error);
    }
}

function updateStats() {
    const total = gifts.length;
    const booked = gifts.filter(g => g.booked).length;
    const remaining = total - booked;
    
    const totalEl = document.getElementById('totalCount');
    const bookedEl = document.getElementById('bookedCount');
    const remainingEl = document.getElementById('remainingCount');
    
    if (totalEl) totalEl.textContent = total;
    if (bookedEl) bookedEl.textContent = booked;
    if (remainingEl) remainingEl.textContent = remaining;
}

function render() {
    const giftList = document.getElementById('giftList');
    const bookedList = document.getElementById('bookedList');
    
    if (!giftList) return;
    
    const available = gifts.filter(g => !g.booked);
    const booked = gifts.filter(g => g.booked);
    
    if (available.length === 0) {
        giftList.innerHTML = `
            <div class="empty-message">
                <p>все дары уже забронированы!</p>
            </div>
        `;
    } else {
        giftList.innerHTML = available.map(g => createGiftCard(g)).join('');
    }
    
    const bookedSection = document.getElementById('bookedSection');
    if (bookedSection) {
        if (booked.length === 0) {
            bookedSection.style.display = 'none';
        } else {
            bookedSection.style.display = 'block';
            if (bookedList) {
                bookedList.innerHTML = booked.map(g => createGiftCard(g, true)).join('');
            }
        }
    }
    
    updateStats();
}

function createGiftCard(gift, isBooked = false) {
    const isBookedByMe = gift.bookedBy === deviceId;
    const isBookedByOther = gift.booked && gift.bookedBy !== deviceId;
    
    let classes = 'gift-card';
    if (isBooked || gift.booked) classes += ' booked';
    
    const storeClass = gift.store === 'ozon' ? 'ozon' : 'wb';
    const storeName = gift.store === 'ozon' ? 'Ozon' : 'Wildberries';
    
    let actionsHTML = '';
    
    if (!gift.booked) {
        actionsHTML = `
            <button class="btn-book" onclick="bookGift(${gift.id})">
                подумаю
            </button>
        `;
    }
    
    if (isBookedByMe) {
        actionsHTML = `
            <button class="btn-unbook" onclick="unbookGift(${gift.id})">
                не получилось не фортануло
            </button>
        `;
    }
    
    if (isBookedByOther) {
        actionsHTML = `
            <div style="width: 100%; text-align: center; color: #7a6a5a; font-size: 14px; font-weight: 500; padding: 8px 0;">
                кто-то думает
            </div>
        `;
    }
    
    return `
        <div class="${classes}" data-id="${gift.id}">
            <img src="${gift.image}" alt="${gift.name}" class="gift-image" 
                 onerror="this.src='https://via.placeholder.com/400x200/666/white?text=Подарок'">
            <div class="gift-info">
                <h3>${gift.name}</h3>
                <div class="gift-details">
                    <div>
                        <span class="store ${storeClass}">${storeName}</span>
                        <span style="margin-left: 10px;">Артикул: ${gift.article}</span>
                    </div>
                    <a href="${gift.link}" target="_blank" class="gift-link">Ссылка на товар</a>
                </div>
                <div class="gift-price">${gift.price.toLocaleString()} руб.</div>
                <div class="gift-actions">
                    ${actionsHTML}
                </div>
            </div>
        </div>
    `;
}

async function bookGift(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    if (!gift) return;
    if (gift.booked) {
        alert('над даром уже думают!');
        return;
    }
    if (confirm(`беру на заметку "${gift.name}"?`)) {
        gift.booked = true;
        gift.bookedBy = deviceId;
        await saveToServer();
        render();
        alert('дар твой! никто не заберёт!');
    }
}

async function unbookGift(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    if (!gift || gift.bookedBy !== deviceId) {
        alert('это не твой дар, не отменяй!');
        return;
    }
    if (confirm(`подумай "${gift.name}"? ты отменишь..`)) {
        gift.booked = false;
        gift.bookedBy = null;
        await saveToServer();
        render();
        alert('нищита!');
    }
}

deviceId = getDeviceId();

const giftList = document.getElementById('giftList');
if (giftList) {
    giftList.innerHTML = `
        <div style="text-align: center; color: #7a6a5a; padding: 40px;">
            <span style="font-size: 40px;">⏳</span>
            <p>загружаем дары...</p>
        </div>
    `;
}

loadFromServer();

// Автоматическая проверка обновлений каждые 30 секунд
setInterval(checkForUpdates, 30000);

function addGift(name, image, link, store, article, price) {
    const newGift = {
        id: Date.now(),
        name: name,
        image: image || 'https://via.placeholder.com/400x200/666/white?text=Подарок',
        link: link || '#',
        store: store || 'ozon',
        article: article || '000000',
        price: price || 0,
        booked: false,
        bookedBy: null
    };
    gifts.push(newGift);
    saveToServer();
    render();
    console.log('hehe!');
}

function removeGift(giftId) {
    if (confirm('удалить дар?')) {
        gifts = gifts.filter(g => g.id !== giftId);
        saveToServer();
        render();
        console.log('no hehe!');
    }
}

function resetAll() {
    if (confirm('сбросить всё?')) {
        gifts = JSON.parse(JSON.stringify(defaultGifts));
        saveToServer();
        render();
        console.log('всё сброшено!');
    }
}

console.log('команды для консоли:');
console.log('  addGift(name, image, link, store, article, price) - добавить дар');
console.log('  removeGift(id) - удалить дар');
console.log('  resetAll() - сбросить всё');
