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
    res.data.articles.javascript.map(article => {
      const articleContent = cardCreator(article);
      newCard.appendChild(articleContent);
    })
    res.data.articles.bootstrap.map(article => {
      const articleContent = cardCreator(article);
      newCard.appendChild(articleContent);
    })
    res.data.articles.technology.map(article => {
      const articleContent = cardCreator(article);
      newCard.appendChild(articleContent);
    })
    res.data.articles.jquery.map(article => {
      const articleContent = cardCreator(article);
      newCard.appendChild(articleContent);
    })
    res.data.articles.node.map(article => {
      const articleContent = cardCreator(article);
      newCard.appendChild(articleContent);
    })
    .catch((err) => {
      console.log("This is an error." , err)
    });
  });

function cardCreator(obj) {
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
    img.style.width = '250px';

    //appending
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(by);
    imgContainer.appendChild(img);   

    //update content
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    by.textContent = obj.authorName;

    return card
};