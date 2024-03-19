// headerComponent.js

function createHeader(parentElement) {
    const header = document.createElement('header');
    header.classList.add('header_aria');
  
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'fixed-top', 'bg-transfaren');
  
    const container = document.createElement('div');
    container.classList.add('container');
  
    const logoLink = document.createElement('a');
    logoLink.classList.add('navbar-brand');
    logoLink.href = 'index.html';
  
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/img/logo/logo.png';
    logoImg.alt = 'Logo';
    logoImg.classList.add('logo');
  
    logoLink.appendChild(logoImg);
  
    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.setAttribute('data-bs-toggle', 'collapse');
    togglerButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    togglerButton.setAttribute('aria-controls', 'navbarSupportedContent');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
  
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add('navbar-toggler-icon');
  
    const barsIcon = document.createElement('i');
    barsIcon.classList.add('fa-solid', 'fa-bars');
    togglerIcon.appendChild(barsIcon);
  
    togglerButton.appendChild(togglerIcon);
  
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'navbarSupportedContent';
  
    // Add menu items
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');
  
    const homeItem = createMenuItem('Home', 'index.html', true);
    ul.appendChild(homeItem);
  
    const aboutItem = createMenuItem('About us', 'about-us.html', false);
    ul.appendChild(aboutItem);
  
    const servicesItem = createMenuItem('Services', 'services.html', false);
    ul.appendChild(servicesItem);
  
    const articlesItem = createMenuItem('Articles', 'articles.html', false);
    ul.appendChild(articlesItem);
  
    const blogItem = createMenuItem('Blog', 'blogs.html', false);
    ul.appendChild(blogItem);
  
    navbarCollapse.appendChild(ul);
  
    container.appendChild(logoLink);
    container.appendChild(togglerButton);
    container.appendChild(navbarCollapse);
  
    // Add cart and contact us buttons
    const navButtons = document.createElement('div');
    navButtons.classList.add('nav_buttons');
  
    const cartButton = createButton('Cart', 'cart.html', 'cart');
    navButtons.appendChild(cartButton);
  
    const contactButton = createButton('Contact Us', 'contact.html', 'contact_btn');
    navButtons.appendChild(contactButton);
  
    container.appendChild(navButtons);
  
    nav.appendChild(container);
    header.appendChild(nav);
  
    if (parentElement instanceof HTMLElement) {
      parentElement.appendChild(header);
    } else {
      document.body.appendChild(header);
    }
  }
  
  function createMenuItem(label, link, isActive) {
    const li = document.createElement('li');
    li.classList.add('nav-item');
  
    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.href = link;
    a.textContent = label;
  
    if (isActive) {
      li.classList.add('active');
    }
  
    li.appendChild(a);
  
    return li;
  }
  
  function createButton(label, link, className) {
    const button = document.createElement('a');
    button.href = link;
    button.classList.add(className);
    button.textContent = label;
    return button;
  }
  