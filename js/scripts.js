{
    const links1 = document.querySelectorAll('.sticky-item');
    const indicator = document.getElementById('scrollIndicator');

    const links2 = document.querySelectorAll('.aside-item');
    const asideIndicator = document.querySelector('.aside-indicator');

    for (let i = 0; i < 5; i++) {
        const element = links1[i];

        element.addEventListener("click", () => {
            indicator.style.transform = `translateX(${125*i}%)`
        });
    }

    links2[0].addEventListener("click", () => {
        links2[1].classList.remove('selected');
        links2[0].classList.add('selected');

        asideIndicator.style.transform = 'translateY(0%)';
    });
    links2[1].addEventListener("click", () => {
        links2[0].classList.remove('selected');
        links2[1].classList.add('selected');

        asideIndicator.style.transform = 'translateY(120%)';
    });
}
