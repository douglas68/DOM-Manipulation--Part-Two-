//Part 1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';
//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
// Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

//Part 2
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Part 3
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(link =>{

//Create an <a> element.
    const a = document.createElement('a');


//On the new element, add an href attribute with its value set to the href property of the "link" object.
a.setAttribute('href', link.href);
//Set the new element's content to the value of the text property of the "link" object.
a.textContent =link.text;
//Append the new element to the topMenuEl element.
topMenuEl.appendChild(a);

})

// Part 1 Geeting started (completed)

//Part 2: Adding Additional HTML and CSS (completed)

//Part 3: Creating the Submenu--------------------------------------------

// Select and cache the <nav id="sub-menu">
const subMenuEl = document.getElementById('sub-menu');

// Set height to 100%
subMenuEl.style.height = '100%';

// Set background color using CSS variable
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add flex-around class
subMenuEl.classList.add('flex-around');

//Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

// Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    
    // Log the content of the <a> to verify the handler is working.
