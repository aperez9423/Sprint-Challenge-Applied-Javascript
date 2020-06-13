/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(Creator());

function Creator () {
  //creating 
  const carouselSetUp = document.createElement('div');
  const leftButton = document.createElement('div');
  const pictureOne = document.createElement('img');
  const pictureTwo = document.createElement('img');
  const pictureThree = document.createElement('img');
  const pictureFour = document.createElement('img');
  const rightButton = document.createElement('div');

  //appending
  carouselSetUp.appendChild(leftButton);
  carouselSetUp.appendChild(pictureOne);
  carouselSetUp.appendChild(pictureTwo);
  carouselSetUp.appendChild(pictureThree);
  carouselSetUp.appendChild(pictureFour);
  carouselSetUp.appendChild(rightButton);

  //styling
  carouselSetUp.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  
  //update content
  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';
  pictureOne.src = assets/carousel/mountains.jpeg;
  pictureTwo.src = assets/carousel/computer.jpeg;
  pictureThree.src = assets/carousel/trees.jpeg;
  pictureFour.src = assets/carousel/turntable.jpeg;

  return carouselSetUp;
};

