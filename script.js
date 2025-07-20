// Strict mode для избежания скрытых ошибок
'use strict';

// Данные отзывов с путями к аватаркам
const reviewsData = [
    {
        id: 1,
        name: "Поставка плит",
        date: "24 февраля 2025",
        content: "Очень приятное впечатление, починили актуатор Danfoss, сроки, цена, все как договаривались, спасибо за вашу услугу, буду обращаться и всем советую, не пожалеете, ещё раз спасибо.",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 2,
        name: "Хазраил",
        date: "4 декабря 2024",
        content: "Сгорела материнская плата вышивальной машины MELCO EMT-16 (сам виноват, работал без стабилизатора). Без особой надежды, что возьмутся за ремонт после вмешательства в плату в двух других местах (пытались отремонтировать) позвонил сюда. Согласились, отправил к ним машинку и ребята сотворили чудо - после 5-ти лет простоя вышивальная заработала. Просто гордость берет, что у нас есть такие специалисты. Действительно, у Вас не мастерская, а лаборатория. Цена ремонта - адекватная. Мне она обошлась вместе с дорогой в 30% от стоимости новой платы (2300 км, отправлял из г.Нальчик автобусом). Огромное Вам спасибо.",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 3,
        name: "dr.kirramary",
        date: "8 октября 2024",
        content: "Ребята просто супер-профессионалы, очень быстро и качественно решили вопрос с косметологическим оборудованием, с которым другие справиться не смогли 😅 Спасибо огромное, счастью нет предела 🙌🏻 Просто спасение, что нашла именно вас 💔",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 4,
        name: "Иван",
        date: "24 августа 2024",
        content: "Очень приятные люди! Сделали все максимально быстро, всем советую!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 5,
        name: "Денис",
        date: "15 апреля 2024",
        content: "Сделка состоялась, очень помогли. Спасибо!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 6,
        name: "Дмитрий",
        date: "22 января 2024",
        content: "Все отлично профессионалы!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 7,
        name: "Сергей",
        date: "28 декабря 2023",
        content: "Уже было отчаялся найти электромагнитный клапан для манипулятора, но нашел здесь эту замечательную компанию, которая смогла его отремонтировать. Большое спасибо, что вы есть! вы уникальны, ведь больше никто это не делает. Процветания, удачи, и реализации всех ваших идей! С наступающим!!! :))",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 8,
        name: "Андрей Анатольевич Воробьёв",
        date: "12 ноября 2023",
        content: "Вышивальная машина Brother BE1201 перестала загружаться. Сбой в работе электроники. Абсолютно непонятно что делать. Специалистов, работающих в этой области очень мало, почти нет….Посоветовали обратиться в фирму МЕХАТРОНИКА-СПб. Объяснил свою проблему и ребята взялись. Отправил материнскую плату в Питер. За несколько дней Евгений исправил все неполадки. После ремонта всё в полном порядке, машина работает. Огромное спасибо всем сотрудникам фирмы! Отдельная благодарность Евгению! Отличный мастер!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 9,
        name: "Константин",
        date: "23 октября 2023",
        content: "Профи!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 10,
        name: "Владислав",
        date: "7 августа 2023",
        content: "Все отлично",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 11,
        name: "Алексей",
        date: "7 ноября 2022",
        content: "Все работает. Спасибо.",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 12,
        name: "ВИКТОР",
        date: "15 октября 2022",
        content: "Очень доволен оказанной услугой. Сдал в ремонт модуль трансмиссии JohnDeere, на счет сроков предупредили сразу(1-2дня). Подход к ремонту у ребят серьезный. В срок уложились, и ГЛАВНОЕ - отремонтировали модуль! Гарантию на работы дали - 1 месяц. Просто приятно иметь дело с мастерами своего дела.",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 13,
        name: "Андрей",
        date: "7 сентября 2022",
        content: "Рекомендую",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 14,
        name: "Михаил",
        date: "20 июля 2022",
        content: "Профи!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 15,
        name: "Дмитрий Калинин",
        date: "22 июня 2022",
        content: "Выражаю огромную благодарность персоналу и компании за возрождённый блок управления КПП трактора. Профессионально провели диагностику и успешно устранили проблемы. Трактор работает теперь без проблем. Спасибо! 🤝",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 16,
        name: "Андрей",
        date: "11 июня 2022",
        content: "Искренне благодарен! Отличные ребята, золотые руки! Справились с проблемой, от которой другие открещивались! Большой респект!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 17,
        name: "Саша Субботина",
        date: "2 мая 2022",
        content: "Все отлично, всегда отвечал на любые вопросы и консультировал, все дошло быстро и аккуратно, довольна сделкой",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 18,
        name: "Владимир",
        date: "23 апреля 2022",
        content: "Евгений отремонтировал блок вышивального станка Brothers BES-941BC, который не запускался и выдавал ошибки. Были заменены силовые транзисторы и оптроны в цепи управления осью X, перебрана вся цепь управления, отремонтирована плата Power PCB. Ремонт занял около 10 дней, после чего станок заработал исправно. Отдельно хочу отметить качественную поддержку - консультации по WhatsApp и видеосвязи для тонкой настройки оборудования.",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 19,
        name: "Сергей",
        date: "21 марта 2022",
        content: "Отличный мастер! Восстановил из мертвых вышивальную машину! Рекомендую!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    },
    {
        id: 20,
        name: "Александр Голованов",
        date: "25 сентября 2021",
        content: "Всё согласно описанию, очень доволен и 100% рекомендую!",
        rating: 5,
        source: "Авито",
        avatar: "mediafile/logo-1-1.png"
    }
];

// Инициализация слайдера отзывов
function initReviewsSlider() {
    const container = document.querySelector('.reviews-container');
    if (!container) return;

    const slidesWrapper = document.querySelector('.reviews-slides');
    const dotsContainer = document.querySelector('.reviews-dots');
    const prevBtn = document.querySelector('.reviews-prev');
    const nextBtn = document.querySelector('.reviews-next');
    const currentEl = document.querySelector('.reviews-current');
    const visibleEl = document.querySelector('.reviews-visible');
    const totalEl = document.querySelector('.reviews-total');
    
    let currentSlide = 0;
    let slidesPerView = getSlidesPerView();
    let totalSlides = Math.ceil(reviewsData.length / slidesPerView);
    
    // Установка общего количества отзывов
    if (totalEl) totalEl.textContent = reviewsData.length;
    
    // Функция для определения количества слайдов
    function getSlidesPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }
    
    // Создание слайдов
    function createSlides() {
        if (!slidesWrapper || !dotsContainer) return;
        
        slidesWrapper.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        // Создаем группы слайдов
        for (let i = 0; i < totalSlides; i++) {
            const slideGroup = document.createElement('div');
            slideGroup.className = 'w-full flex-shrink-0';
            
            // Добавляем отзывы в текущую группу
            const startIdx = i * slidesPerView;
            const endIdx = Math.min(startIdx + slidesPerView, reviewsData.length);
            
            let slidesContent = '';
            for (let j = startIdx; j < endIdx; j++) {
                const review = reviewsData[j];
                
                slidesContent += `
                    <div class="w-full md:w-1/${slidesPerView} px-2 flex-shrink-0">
                        <div class="bg-white p-6 rounded-xl shadow-md h-full">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden bg-gray-100">
                                    <img src="${review.avatar}" alt="${review.name}" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-800">${review.name}</h4>
                                    <p class="text-sm text-gray-500">${review.date}</p>
                                </div>
                            </div>
                            <div class="text-gray-700 mb-4">
                                ${review.content}
                            </div>
                            <div class="flex justify-end">
                                <i class="fas fa-quote-right text-blue-200 text-2xl"></i>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            slideGroup.innerHTML = `<div class="flex">${slidesContent}</div>`;
            slidesWrapper.appendChild(slideGroup);
            
            // Создаем точки навигации
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full ${i === currentSlide ? 'bg-blue-600' : 'bg-blue-200'} transition-colors`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        updateCounter();
        updateSliderPosition();
    }
    
    // Переход к конкретному слайду
    function goToSlide(index) {
        currentSlide = index;
        updateSliderPosition();
        updateDots();
        updateCounter();
    }
    
    // Обновление позиции слайдера
    function updateSliderPosition() {
        if (slidesWrapper) {
            slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }
    
    // Обновление точек навигации
    function updateDots() {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, index) => {
            dot.className = `w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-blue-200'} transition-colors`;
        });
    }
    
    // Обновление счетчика
    function updateCounter() {
        if (!currentEl || !visibleEl) return;
        const start = currentSlide * slidesPerView + 1;
        const end = Math.min(start + slidesPerView - 1, reviewsData.length);
        
        currentEl.textContent = start;
        visibleEl.textContent = end;
    }
    
    // Обработчики событий
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        });
    }
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            totalSlides = Math.ceil(reviewsData.length / slidesPerView);
            currentSlide = Math.min(currentSlide, totalSlides - 1);
            createSlides();
            goToSlide(currentSlide);
        }
    });
    
    // Инициализация
    createSlides();
}

// Кнопка "Наверх"
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('hidden', window.scrollY <= 300);
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// WhatsApp виджет
function initWhatsAppWidget() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const closeBtn = document.getElementById('close-popup');
    
    if (!whatsappButton || !whatsappPopup) return;

    // Открытие/закрытие попапа
    whatsappButton.addEventListener('click', (e) => {
        e.stopPropagation();
        whatsappPopup.classList.toggle('hidden');
        whatsappPopup.classList.toggle('opacity-0');
        whatsappPopup.classList.toggle('scale-95');
        whatsappPopup.classList.toggle('opacity-100');
        whatsappPopup.classList.toggle('scale-100');
    });

    // Кнопка закрытия
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            whatsappPopup.classList.add('hidden', 'opacity-0', 'scale-95');
            whatsappPopup.classList.remove('opacity-100', 'scale-100');
        });
    }

    // Закрытие при клике вне попапа
    document.addEventListener('click', (e) => {
        const isClickInside = whatsappPopup.contains(e.target) || 
                             e.target === whatsappButton || 
                             whatsappButton.contains(e.target);
        
        if (!isClickInside) {
            whatsappPopup.classList.add('hidden', 'opacity-0', 'scale-95');
            whatsappPopup.classList.remove('opacity-100', 'scale-100');
        }
    });
}

// Глобальная функция для отправки в WhatsApp
window.sendToWhatsApp = function(phone) {
    try {
        const name = document.getElementById('wa-name')?.value.trim() || '';
        const message = document.getElementById('wa-message')?.value.trim() || '';
        
        const text = [
            name && `👋 *${name}*`,
            message,
            `📅 ${new Date().toLocaleString('ru-RU')}`,
            `🌐 Отправлено с сайта`
        ].filter(Boolean).join('\n\n');
        
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('Ошибка отправки в WhatsApp:', error);
    }
};

// Mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Yandex Map initialization
function initYandexMap() {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(function() {
            const mapElement = document.getElementById('map');
            if (!mapElement) return;

            const myMap = new ymaps.Map("map", {
                center: [59.931996, 30.369962],
                zoom: 16
            });
            
            const myPlacemark = new ymaps.Placemark([59.931996, 30.369962], {
                hintContent: 'Мехатроника-СПб',
                balloonContent: 'Мехатроника-СПб'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'https://yandex.ru/maps/favicon.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -40]
            });
            
            myMap.geoObjects.add(myPlacemark);
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
        });
    }
}

// Инициализация всех компонентов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initReviewsSlider();
    initBackToTop();
    initWhatsAppWidget();
    initMobileMenu();
    initYandexMap();
});