// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //creating
    const header = document.createElement('div');
    const date = document.createElement('span');
    const name = document.createElement('h1');
    const temp = document.createElement('span');
    
    //styling
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    //appending
    header.appendChild(date);
    header.appendChild(name);
    header.appendChild(temp);
    
    //update content
    date.textContent = 'March 28, 2019';
    name.textContent = 'Lambda Times';
    temp.textContent = '98°';
    
    return header;
    };
    
    const headerContainer = document.querySelector('.header-container');
    
    headerContainer.appendChild(Header());

