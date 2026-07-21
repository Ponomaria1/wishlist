// ===== НАСТРОЙКИ ДЛЯ SUPABASE =====
const SUPABASE_URL = 'https://kthzgdrvgkaujatmpndx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OQ44wevV1iJtIYwqeueuKg_mrpLEBLu';
// =================================

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
    {
        id: 2,
        name: 'маленькая картина по номерам',
        image: 'https://ir-11.ozone.ru/s3/multimedia-1-x/wc2500/8430564381.jpg',
        link: 'https://ozon.ru/t/BSFPL8A',
        store: 'ozon',
        article: '3172102168',
        price: 197,
        booked: false,
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
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
        bookedBy: null
    }
];

let gifts = [];
let deviceId = localStorage.getItem('deviceId');
if (!deviceId) {
    deviceId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    localStorage.setItem('deviceId', deviceId);
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
        } else {
            gifts = JSON.parse(JSON.stringify(defaultGifts));
            await saveToServer();
        }
    } catch (error) {
        console.log('Используем локальные данные');
        const saved = localStorage.getItem('gifts_backup');
        gifts = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultGifts));
    }
    render();
}

async function saveToServer() {
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/gifts?booked=eq.false`, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
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
        console.log('Сохранено');
    } catch (error) {
        console.log('Ошибка сохранения:', error);
    }
}

function render() {
    const giftList = document.getElementById('giftList');
    const bookedList = document.getElementById('bookedList');
    if (!giftList) return;
    const available = gifts.filter(g => !g.booked);
    const booked = gifts.filter(g => g.booked);
    giftList.innerHTML = available.map(g => createGiftCard(g)).join('');
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
        actionsHTML = `<button class="btn-book" onclick="bookGift(${gift.id})">подумаю</button>`;
    }
    if (isBookedByMe) {
        actionsHTML = `<button class="btn-unbook" onclick="unbookGift(${gift.id})">не получилось не фортануло</button>`;
    }
    if (isBookedByOther) {
        actionsHTML = `<div style="width: 100%; text-align: center; color: #7a6a5a; font-size: 14px; font-weight: 500; padding: 8px 0;">кто-то думает</div>`;
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
                <div class="gift-actions">${actionsHTML}</div>
            </div>
        </div>
    `;
}

function updateStats() {
    const total = gifts.length;
    const booked = gifts.filter(g => g.booked).length;
    const remaining = total - booked;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('bookedCount').textContent = booked;
    document.getElementById('remainingCount').textContent = remaining;
}

async function bookGift(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    if (!gift || gift.booked) return;
    if (confirm(`беру на заметку "${gift.name}"?`)) {
        gift.booked = true;
        gift.bookedBy = deviceId;
        await saveToServer();
        render();
        alert('дар твой!');
    }
}

async function unbookGift(giftId) {
    const gift = gifts.find(g => g.id === giftId);
    if (!gift || gift.bookedBy !== deviceId) return;
    if (confirm(`подумай "${gift.name}"?`)) {
        gift.booked = false;
        gift.bookedBy = null;
        await saveToServer();
        render();
        alert('нищита!');
    }
}

loadFromServer();
