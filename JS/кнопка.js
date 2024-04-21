document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Функція, яка перевіряє позицію прокрутки та відображає/приховує кнопку
    function toggleScrollToTopButton() {
        if (window.scrollY > document.documentElement.scrollHeight / 3 * 2) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    }

    // Додавання обробки подій для кнопки навігації вгору
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Плавна прокрутка до верху сторінки
        });
    });

    // Додавання обробки подій для прокрутки сторінки
    window.addEventListener("scroll", toggleScrollToTopButton);

    // Перевіряємо стан кнопки при завантаженні сторінки
    toggleScrollToTopButton();
});
