// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    // Code to run after the DOM has fully loaded
    const hiddenElements = document.querySelectorAll('.hidden-on-load');

    var title = document.getElementById('.title-page');
    title.style.opacity = '1';

    console.log('Page loaded!');
});

const divIds = [
    'title-page',
    'map-page',
    'text-img-page',
    'blank-page',
];
