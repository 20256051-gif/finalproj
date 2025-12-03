document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    console.log('Page loaded. Hamburger found:', hamburger ? 'Yes' : 'No');
    console.log('Nav UL found:', navUl ? 'Yes' : 'No');
    
    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked!');
            navUl.classList.toggle('show');
            console.log('Menu is now:', navUl.classList.contains('show') ? 'Visible' : 'Hidden');
        });
    } else {
        console.error('Error: Hamburger or nav menu not found. Check HTML.');
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function filterMenu(category, event) {
    const items = document.querySelectorAll('.item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation submitted, We will confirm via email.');
});