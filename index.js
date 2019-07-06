'use strict';

autoboundEventHandlers.addEventHandler('toggleNavMenu', (e) => {
    console.log('clicked');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');

    // const links = document.querySelector('.mobile-info-panel');
    // links.classList.toggle('mobile-info-panel-show');
});

assignAutoboundEventHandlers();