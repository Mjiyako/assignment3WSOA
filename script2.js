
  /*=============toggle menu=============*/
  let menuIcon = document.querySelector('#menuIcon');
  let navBar = document.querySelector('.navBar');

  menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
  };
  /*=============selector=============*/
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
          });
      };
    });

    /*=============sticky navBar=============*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

  };

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

//  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
//  ScrollReveal().reveal('.home-img, .blogs, .essay, .projects, .profile, .contact', { origin: 'bottom' });
//  ScrollReveal().reveal('.home-content h1, .profileImg', { origin: 'top' });
//  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });

 
 