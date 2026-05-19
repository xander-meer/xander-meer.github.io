const vakjes = document.querySelectorAll('.animation');

const vorigePosities = new Map();

const bewaker = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const vak = entry.target;
        const huidigeTop = entry.boundingClientRect.top;

        const vorigeTop = vorigePosities.get(vak) ?? huidigeTop;

        if (entry.isIntersecting) {
            if (huidigeTop > vorigeTop) {
                vak.classList.add('animation-top');
                vak.classList.remove('animation');
                console.log('naar beneden');
            } else {
                vak.classList.add('animation');
                vak.classList.remove('animation-top');
                console.log('naar boven');
            }

            vak.classList.add('in-beeld');
        } else {
            vak.classList.remove('in-beeld');
        }

        vorigePosities.set(vak, huidigeTop);
    });
}, {
    threshold: 0.1
});

vakjes.forEach(vak => {
    bewaker.observe(vak);
});