class UI {
    hidePreloader() {
        document.querySelector('.preloader').style.display = "none";
    }
    showNav() {
        document.querySelector('.nav').classList.toggle('nav--show');
    }
    videoControls() {
        let btn = document.querySelector('.video__switch-btn');
        if (!btn.classList.contains('btnSlide')) {
            btn.classList.add('btnSlide');
            document.querySelector('.video__item').pause();
        } else {
            btn.classList.remove('btnSlide');
            document.querySelector('.video__item').play();
        }
    }
}

eventListeners();

function eventListeners() {
    const ui = new UI()
    window.addEventListener('load', () => ui.hidePreloader());
    document.querySelector('.navBtn').addEventListener('click', () => ui.showNav());
    document.querySelector('.video__switch').addEventListener('click', () => ui.videoControls());
}