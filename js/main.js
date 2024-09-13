// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Добавление карточек в контейнер
swiper.appendSlide(`
    <div class="swiper-slide">
      <div class="card-container">
        <div class="card">
          <div class="card-header">
            <div class="circle" style="background-color: #007bff;"></div>
            <h2 class="card-title">Название карточки 1</h2>
          </div>
          <div class="card-comment">Текст-комментарий 1</div>
          <div class="card-footer">
            <div class="strip" style="background-color: #007bff;"></div>
          </div>
        </div>
      </div>
    </div>
  `);

swiper.appendSlide(`
    <div class="swiper-slide">
      <div class="card-container">
        <div class="card">
          <div class="card-header">
            <div class="circle" style="background-color: #ff69b4;"></div>
            <h2 class="card-title">Название карточки 2</h2>
          </div>
          <div class="card-comment">Текст-комментарий 2</div>
          <div class="card-footer">
            <div class="strip" style="background-color: #ff69b4;"></div>
          </div>
        </div>
      </div>
    </div>
  `);

// Анимация листания
swiper.on('slideChange', () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.classList.add('animate');
    setTimeout(() => {
        activeSlide.classList.remove('animate');
    }, 500);
});

// Анимация нажатия
swiper.on('click', (swiper, event) => {
    const target = event.target;
    if (target.classList.contains('card')) {
        target.classList.add('pressed');
        setTimeout(() => {
            target.classList.remove('pressed');
        }, 500);
    }
});
