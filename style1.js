/*==============scroll section active link ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')
}

/*==============scroll section active link ============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach.apply(links => {
        links.classList.remove('active');
     
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
    }
  });


/*============== sticty navbar ============*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
/*==============remove toggle icon and navbar ============*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};
/*==============scroll section active link ============*/
scrollReveal({
 distance: '80px',
 duration: 2000,
 delay: 200,
});

scrollReveal().reveal('.home-contact, heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
scrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
scrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


const typed = ('.multiple-text',{
  Strings:['frontend Developer', 'Web Designer', 'Youtuber'],
typeSpeed: 70,
backSpeed: 70,
backDelay: 1000,
loop: true,
});