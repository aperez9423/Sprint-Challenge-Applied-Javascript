// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const newCard = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((res) => {
    console.log("This is the response.", res);
    const getCard = cardCreator(res);
    newCard.appendChild(getCard);
    });

function cardCreator({data}) {
    //creating
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const by = document.createElement('span');

    //styling
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('image-container');

    //appending
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(by);
    imgContainer.appendChild(img);   

    //update content
    headline.textContent = data.articles.javascript.headline;
    img.src = data.articles.javascript.authorPhoto;
    by.textContent = data.articles.javascript.authorName;
    headline.textContent = data.articles.bootstrap.headline;
    img.src = data.articles.bootstrap.authorPhoto;
    by.textContent = data.articles.bootstrap.authorName;

    return card
};