// Local reviews data
const reviews = [
  {
    id: 1,
    name: 'Jon Snow',
    job: 'Lord Commander',
    img: 'https://i.vgy.me/FOZ48Z.jpg',
    text: 'A brooding character with a mysterious past, Jon Snow leads the Night\'s Watch at the Wall.',
  },
  {
    id: 2,
    name: 'Arya Stark',
    job: 'Assassin',
    img: 'https://i.vgy.me/LjbM5V.jpg',
    text: 'A fierce and independent young woman, Arya Stark is on a quest for vengeance.',
  },
  {
    id: 3,
    name: 'Tyrion Lannister',
    job: 'Hand of the King',
    img: 'https://i.vgy.me/PFRF7C.jpg',
    text: 'Known for his wit and intelligence, Tyrion Lannister navigates the dangerous political landscape of Westeros.',
  },
  {
    id: 4,
    name: 'Daenerys Targaryen',
    job: 'Mother of Dragons',
    img: 'https://i.vgy.me/8bA0xc.jpg',
    text: 'With dragons at her side, Daenerys Targaryen seeks to reclaim the Iron Throne and free the oppressed.',
  },
];

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Go to the start of the review section
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});

// Go to the end of the review section
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});
