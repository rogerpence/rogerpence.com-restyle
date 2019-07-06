'use strict';

autoboundEventHandlers.addEventHandler('toggleNavMenu', (e) => {
    console.log('clicked');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');

    const links = document.querySelector('.links');
    links.classList.toggle('show-links');
});

autoboundEventHandlers.addEventHandler('performSearch', (e) => {
    console.log('perform search');
});


assignAutoboundEventHandlers();