// Variables
const cart = document.querySelector("#cart");
const cartContainer = document.querySelector("#cart-list tbody");
const emptyCart = document.querySelector("#empty-cart");
const courseList = document.querySelector("#course-list");
let cartItems = [];

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
    
    cartItems = [...cartItems, courseInfo];
    console.log(cartItems);

    htmlCart();
}

function htmlCart() {
    cleanHTML();

    cartItems.forEach(course => {
        const { image, title, price, number, id } = course;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${image}" width="100">
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${number}</td>
            <td>
                <a href="#" class="delete-course" data-id="${id}">X</a>
            </td>
        `;

        cartContainer.appendChild(row);
    })
}

function cleanHTML() {
    while(cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
}