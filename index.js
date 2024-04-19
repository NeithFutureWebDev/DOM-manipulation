const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = `var(--main-bg)`;
console.log(mainEl);
mainEl.innerHTML = ("<h1> DOM Manipulation</h1>");
mainEl.setAttribute('class', 'flex-ctr');
console.log(mainEl);

//==============creating menu bar
// const topMenuEl = document.querySelector('nav');
// topMenuEl.style.height = "100%";

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height= "100%";
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.setAttribute('class', 'flex-around');

//part 3
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach(link => {
    const a = document.createElement('a')
    a.setAttribute('href', link.href) //set attribute to each anchor
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  })

