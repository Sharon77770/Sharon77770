const whoAmIContent = document.querySelector('.who-am-i-container');
const techContent = document.querySelectorAll('.tech-stack-container');
const techBars = document.querySelectorAll('.tech-bar');

function whoAmIAnime() {
    const rect = whoAmIContent.getBoundingClientRect();
    const offset = 300;
    const isVisible = rect.top < window.innerHeight - offset && rect.bottom > 0;

    if(isVisible) {
        whoAmIContent.classList.add('visible');
    }
}

function techContentAnime() {
    techContent.forEach( (content) => {
        const rect = content.getBoundingClientRect();
        const offset = 0;
        const isVisible = rect.top < window.innerHeight - offset && rect.bottom > 0;
    
        if(isVisible) 
            content.classList.add('visible');
    });
}

function techBarsAnime() {
    setTimeout(() => {
        techBars.forEach( (bar, idx) => {
            setTimeout(() => {
                const rect = bar.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if(isVisible){ 
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = targetWidth;
                    bar.classList.add('visible')
                }
            }, idx * 300);
        });
    }, 0);
}


const handleScroll = () => {
    whoAmIAnime();
    techContentAnime();
    techBarsAnime();
}

window.addEventListener('scroll', handleScroll);
handleScroll();