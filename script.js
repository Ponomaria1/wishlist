const SUPABASE_URL = 'https://kthzgdrvgkaujatmpndx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OQ44wevV1iJtIYwqeueuKg_mrpLEBLu';

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
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 2,
        name: 'маленькая картина по номерам',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-x/wc2500/8430564381.jpg',
        link: 'https://ozon.ru/t/BSFPL8A',
        store: 'ozon',
        article: '3172102168',
        price: 197,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 3,
        name: 'хна для души',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-2/wc2500/8564663126.jpg',
        link: 'https://ozon.ru/t/1fWqTMd',
        store: 'ozon',
        article: '3209989085',
        price: 76,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 4,
        name: 'скетч для зарисовки прн',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-o/wc2500/12356962080.jpg',
        link: 'https://ozon.ru/t/CrKZIbI',
        store: 'ozon',
        article: '1527138289',
        price: 187,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 5,
        name: 'сережки чтобы было',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-5/wc2500/8461787009.jpg',
        link: 'https://ozon.ru/t/yetFkGc',
        store: 'ozon',
        article: '3193052913',
        price: 139,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 6,
        name: 'хна но розовая',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-8/wc2500/8564905556.jpg',
        link: 'https://ozon.ru/t/3Ql23CA',
        store: 'ozon',
        article: '3209988515',
        price: 76,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 7,
        name: 'подставка для кампуктера',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-4/wc2500/10793183656.jpg',
        link: 'https://ozon.ru/t/TOHWdWs',
        store: 'ozon',
        article: '1831342831',
        price: 309,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 8,
        name: 'пушистый лис',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-9/wc1000/7530845481.jpg',
        link: 'https://ozon.ru/t/1fWDQgv',
        store: 'ozon',
        article: '2102653324',
        price: 329,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 9,
        name: 'нужно больше золота',
        image: 'https://ir-11.ozone.ru/s3/multimedia-w/wc1000/6753981560.jpg',
        link: 'https://ozon.ru/t/j79Trpb',
        store: 'ozon',
        article: '1183342795',
        price: 246,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 10,
        name: 'коробка для сороки',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-p/wc1000/7633218193.jpg',
        link: 'https://ozon.ru/t/l1QHZk7',
        store: 'ozon',
        article: '2320701098',
        price: 383,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 11,
        name: 'карандаш я не Даша',
        image: 'https://basket-38.wbbasket.ru/vol8505/part850566/850566911/images/big/1.webp',
        link: 'https://www.wildberries.ru/catalog/850566911/detail.aspx?size=1279153659',
        store: 'wb',
        article: '850566911',
        price: 281,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 12,
        name: 'помада да',
        image: 'https://sam-basket-cdn-05.geobasket.ru/vol87/part8769/8769539/images/big/2.webp',
        link: 'https://www.wildberries.ru/catalog/8769539/detail.aspx?size=29529518',
        store: 'wb',
        article: '8769539',
        price: 504,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 13,
        name: 'цифра номер 5 аааахахаха я художник',
        image: 'https://basket-01.wbbasket.ru/vol130/part13083/13083152/images/big/2.webp',
        link: 'https://www.wildberries.ru/catalog/13083152/detail.aspx?size=40015890',
        store: 'wb',
        article: '13083152',
        price: 702,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 14,
        name: 'проснулась сорока',
        image: 'https://sam-basket-cdn-07.geobasket.ru/vol2091/part209131/209131541/images/big/5.webp',
        link: 'https://www.wildberries.ru/catalog/209131541/detail.aspx?size=335044304',
        store: 'wb',
        article: '209131541',
        price: 48,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 15,
        name: 'кьюти панда',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-b/wc2500/8485525811.jpg',
        link: 'https://ozon.ru/t/bTpQQGq',
        store: 'ozon',
        article: '3205880143',
        price: 482,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 16,
        name: 'крем для лица нуф ниф наф',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-j/wc2500/11912459455.jpg',
        link: 'https://ozon.ru/t/bTpQ91U',
        store: 'ozon',
        article: '1134268444',
        price: 452,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 17,
        name: 'лицевая сыроворотка',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-x/wc1000/8362431141.jpg',
        link: 'https://ozon.ru/t/OyqcfhB',
        store: 'ozon',
        article: '1819863033',
        price: 553,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 18,
        name: 'мне оно надо',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-2/wc1000/7757201558.jpg',
        link: 'https://ozon.ru/t/1fWMRku',
        store: 'ozon',
        article: '2589066384',
        price: 265,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    },
    {
        id: 19,
        name: 'захотелось мне научиться краситься',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-g/wc1000/8963295244.jpg',
        link: 'https://ozon.ru/t/bTpQlHE',
        store: 'ozon',
        article: '1720641233',
        price: 428,
        booked: false,
        bookedBy: null,
        purchased: false,
        purchasedBy: null
    }
];

let gifts = [];
let deviceId = '';
let isLoading = false;

function getDeviceId() {
    let id = localStorage.getItem('deviceId');
    if (!id) {
        id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', id);
    }
    return id;
}

// ===== ЗАГРУЗКА С СЕРВЕРА =====
async function loadFromServer() {
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': API_KEY }
        });
        
        if (!response.ok) throw new Error('Ошибка загрузки');
        
        const data = await response.json();
        const serverGifts = data.record.gifts || [];
        
        if (serverGifts.length > 0) {
            gifts = serverGifts;
            localStorage.setItem('gifts_backup', JSON.stringify(gifts));
        } else {
            gifts = JSON.parse(JSON.stringify(defaultGifts));
            await saveToServer();
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

// ===== СОХРАНЕНИЕ НА СЕРВЕР =====
async function saveToServer() {
    if (isLoading) return;
    isLoading = true;
    
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY
            },
            body: JSON.stringify({ gifts: gifts })
        });
        
        if (response.ok) {
            console.log('Данные сохранены на сервере');
            localStorage.setItem('gifts_backup', JSON.stringify(gifts));
        } else {
            console.log('Ошибка сохранения на сервере');
        }
    } catch (error) {
        console.log('Ошибка при сохранении:', error);
    }
    
    isLoading = false;
}

// ===== ОСТАЛЬНЫЕ ФУНКЦИИ =====
function loadGifts() {
    // Заменяем на загрузку с сервера
    loadFromServer();
}

function saveGifts() {
    // Заменяем на сохранение на сервер
    saveToServer();
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
                🌸 кто-то думает
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
                    <a href="${gift.link}" target="_blank" class="gift-link">🔗 Ссылка на товар</a>
                </div>
                <div class="gift-price">${gift.price.toLocaleString()} ₽</div>
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
        alert('над даром уже думают! ');
        return;
    }
    if (confirm(`беру на заметку "${gift.name}"? `)) {
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
    if (confirm(`подумай "${gift.name}"? ты отменишь..😢`)) {
        gift.booked = false;
        gift.bookedBy = null;
        await saveToServer();
        render();
        alert('нищита!');
    }
}

// ===== ЗАПУСК =====
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

// ===== КОМАНДЫ ДЛЯ КОНСОЛИ =====
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