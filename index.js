const btnDropdown = document.getElementById('btn');
const navLink = document.querySelector('.nav-links');

btnDropdown.addEventListener('click', function () {
 navLink.classList.toggle('active');
});