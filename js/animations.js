document.addEventListener('DOMContentLoaded', () => {
    console.log('works');
    // Intitial page load animation
    anime.timeline ({
        easing: 'easeOutExpo',
    })
    .add ({
        targets: '.imgPrimary',
        translateY: [2000, 0],
        opacity: [0, 1],
    })
    .add ({
        targets: '.wrapperText',
        opacity: [0, 1],
        translateY: [-90, 0],
        //offset: '-=50',
    })
    .add ({
        targets: '.wrapperAside',
        opacity: [0, 1],
        height: ['0px', '524px'],
        offset: '-=1300',
    })
    .add ({
        targets: '#btnAsiseA',
        opacity: [0, 1],
        translateY: [20, 0],
        height: ['0px', '76px'],
        offset: '-=1000',
    })
    .add ({
        targets: '.box-number',
        opacity: [0, 1],
        translateY: [20, 0],
        height: ['0px', '149px'],
        offset: '-=1500',
    })
    .add ({
        targets: '.itemFooter',
        opacity: [0, 1],
        translateX: [-220, 0],
        //height: ['0px', '149px'],
        delay: (el, i) => 150 * i,
        offset: '-=800',
    })
    console.log('works 2');
})