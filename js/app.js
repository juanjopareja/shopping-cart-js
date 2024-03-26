// Variables
const cart = document.querySelector("#cart");
const cartContainer = document.querySelector("#cart-list tbody");
const emptyCart = document.querySelector("#empty-cart");
const courseList = document.querySelector("#course-list");

loadEventListeners();

function loadEventListeners() {
    // Add course when you click on "Añadir al Carrito" button
    courseList.addEventListener('click', addCourse);
}


// Functions
function addCourse(e) {
    e.preventDefault();

    if (e.target.classList.contains('add-cart')) {
        const selectedCourse = e.target.parentElement.parentElement;
        readCourseData(selectedCourse);
    }
}

function readCourseData(course) {
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        number: 1
    }
    console.log(courseInfo);
}