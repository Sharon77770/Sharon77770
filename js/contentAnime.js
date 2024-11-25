const titleAndListContents = document.querySelectorAll('.title-and-list-container');
const techContent = document.querySelectorAll('.tech-stack-container');
const techBars = document.querySelectorAll('.tech-bar');

function titleAndListAnime() {
    titleAndListContents.forEach( titleAndListContent => {
        const rect = titleAndListContent.getBoundingClientRect();
        const offset = 300;
        const isVisible = rect.top < window.innerHeight - offset && rect.bottom > 0;
    
        if(isVisible) {
            titleAndListContent.classList.add('visible');
        }
    });
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
    titleAndListAnime();
    techContentAnime();
    techBarsAnime();
}

window.addEventListener('scroll', handleScroll);
handleScroll();