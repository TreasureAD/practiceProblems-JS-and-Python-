// Target elements by class name
const demoClass = document.getElementsByClassName('demos');
// Loop over the collection to apply styles
for (let x = 0; x < demoClass.length; x++) {
  demoClass[x].style.backgroundColor = 'lightblue';
}

// Target elements by tag name
const demoTag = document.getElementsByTagName('article');
// Loop over the collection to apply styles
for (let x = 0; x < demoTag.length; x++) {
  demoTag[x].style.backgroundColor = 'yellow';
}

// Target element by ID
const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '2px solid green';

// Target elements by querySelectorAll
const demoQueryAll = document.querySelectorAll('.demo-query-all');
// Loop over the NodeList using forEach
demoQueryAll.forEach(query => {
  query.style.backgroundColor = 'black';
});


const html = document.documentElement;
console.log(html.parentNode);

const ul = document.getElementsByTagName('ul');

for (let x = 0; x < ul.length; x++) {
  console.log(ul[x].children);
}

ul[0].children[1].style.backgroundColor = 'blue';

console.log(document.body.children[9].children[0]);
console.log(document.body.children[9].children[0]);

// Create a new anchor element
const githubLink = document.createElement("a");

// Set the text content for the link
githubLink.innerHTML = "Visit my GitHub profile";

// Set the href attribute to your GitHub profile URL
githubLink.href = "https://github.com/TreasureAD"; // Replace "your-username" with your actual GitHub username

// Append the link to the document body
document.body.appendChild(githubLink);

// Topics we have to learn

// add new topic (bullet)
const topList = document.querySelector('ul');

// Create a new list item
const newTopicToLearn = document.createElement('li');

// Change the content of the list item
newTopicToLearn.textContent = 'Bootstrap';
topList.appendChild(newTopicToLearn);

// Add new topic Docker to the beginning of the list
const newTopic2 = document.createElement('li');
newTopic2.textContent = 'Docker';

topList.insertBefore(newTopic2, topList.firstChild);


const newTopic3 = document.createElement('li');
newTopic3.textContent = 'React';

// Replace bootstrap with React
topList.replaceChild(newTopic3, newTopicToLearn)
//newTopicToLearn.textContent = 'React';

// Remove react from list
topList.removeChild(newTopicToLearn);

// Modify attributes in DOM