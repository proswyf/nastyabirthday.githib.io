// Массив с данными для слайдера
const sliderData = [
    { img: 'images/image1.jpg', text: 'Описание пластинки 1: Земфира.' },
    { img: 'images/image2.jpg', text: 'Описание пластинки 2: ABBA.' },
    { img: 'images/image3.jpg', text: 'Описание пластинки 3: Битлз.' }
];

// Переменные
let currentSlide = 0;
const sliderImage = document.getElementById('sliderImage');
const sliderText = document.getElementById('sliderText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Функция для обновления слайда
function updateSlider() {
    sliderImage.src = sliderData[currentSlide].img;
    sliderText.textContent = sliderData[currentSlide].text;
}

// События кнопок
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderData.length;
    updateSlider();
});

// Инициализация
updateSlider();
