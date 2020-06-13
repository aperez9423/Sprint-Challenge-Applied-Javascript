// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        console.log("This is the response.", res);
        const newTab = document.createElement('div');

        return newTab;
        })
        .catch((err) => {
        console.log("This is an error." , err)
    });

function tabCreator (tabName) {

    newTab.textContent = data.topics;

    return tabs;
}

topics.appendChild(newTab);



