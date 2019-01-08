document.addEventListener('DOMContentLoaded', () => {
    let navLinks = document.querySelectorAll('.wrapperText');

    navLinks.forEach((navLink) => {
        navLink.addEventListener('mouseenter', () => {
            let letter = navLink.querySelectorAll('.letter');

            anime.remove('letter');

            anime.timeline({
                targets: letter,
            })
            .add({
                translateX: [0, -30],
                opacity:[1, 0],
                easing: 'easeInExpo',
                duration: 500,
                delay: (el, i) => 30 * i,
            })
            .add({
                translateX: [40, 0],
                opacity:[0, 1],
                easing: 'easeOutExpo',
                duration: 1100,
                delay: (el, i) => 30 * i,
            })
        })
    })

    // Hover image
    let galleryLinks = document.querySelectorAll('.wrapper-img-animation img, .itemFooter picture img');

    galleryLinks.forEach((galeryLink) => {
        galeryLink.addEventListener('mouseenter', () => {
            anime.remove(galeryLink);
            anime({
                targets: galeryLink,
                scale: 1.05,
                translateX: -5,
                translateY: -5,
                easing: 'easeOutExpo',
            })
        })
        galeryLink.addEventListener('mouseleave', () => {
            anime.remove(galeryLink);
            anime({
                targets: galeryLink,
                scale: 1,
                translateX: 0,
                translateY: 0,
                easing: 'easeOutExpo',
            })
        })
    })
})