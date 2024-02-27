

const elements = document.querySelectorAll('.hidden-on-load');

const body = document.querySelector('body');



//body.style.backgroundImage = "url('img/background.jpg')";

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
}

const options = {
    root: null,
    threshold: 0.1 // Adjust this threshold value to control when the visibility triggers
};

const observer = new IntersectionObserver(handleIntersection, options);

elements.forEach(element => {
    observer.observe(element);
});

function handleScroll() {
    // You can keep this function empty if using Intersection Observer
};


window.addEventListener('scroll', () => {
    handleScroll();

    // For normal text elements
    const textElements = Array.from(document.querySelectorAll('#typewriter-gpt-2 p, #typewriter-gpt-2 span, #typewriter-gpt-2 h1'));
    if (textElements.length) {
        typeTableContent(textElements);
    }
});

window.onload = function(){
    
    const textElements = Array.from(document.querySelectorAll('#line1'));
    if (textElements.length) {
        typeTableContent(textElements);
    }
};

// Initial check when the page loads

handleScroll();
// type writer effect

//button

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Add a click event listener to the button
  scrollToTopBtn.addEventListener("click", () => {
    // Scroll to the top of the document
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use smooth scrolling
    });
  });


const divIds = [
    'title-page',
    'map-page',
    'text-img-page',
    'blank-page',
];
