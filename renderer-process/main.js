import { Carousel } from './components/carousel/carousel.js';
import { Day } from './components/day/day.js';

const mainContent = document.querySelector('section.main-content');
const carousel = document.querySelector('app-carousel');

fetch('http://localhost:3000/news.json')
  .then((serverResponse) => serverResponse.text())
  .then((responseText) => {
    const data = JSON.parse(responseText);
    carousel.populateNewsCarousel(data.articles);
  });

const currentDate = new Date();
const maxDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0,
).getDate();

for (let i = 1; i <= maxDate; i++) {
  const dayDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    i,
  );
  mainContent.appendChild(new Day(dayDate));
}

const openModalButton = document.querySelector("#open-modal");
openModalButton.addEventListener("click", () => {
  const template = document.querySelector("#modal-template");
  const modal = template.textContent.cloneNode(true);
  modal.querySelector("#close-modal").addEventListener("click", () => {
    const child = document.querySelector("section.modal-container");
      document.removeChild();
  });
  document.body.appendChild(modal);
});


const modalContainer = document.querySelector('.modal-container');
const buttonOpenModal = document.getElementById('open-modal');

buttonOpenModal.addEventListener('click', () => {
  modalContainer.hidden = false;
});
      

//     function populateNewsCarousel(news, startAt) {
//         header.innerText = '';
//         for (let i = startAt; i < startAt + carouselItemCount; i++) {
//           const newsValue = news[i];
//           const newsDiv = createDivForNews(newsValue);
//           header.appendChild(newsDiv);
//           checkButtonsVisibility(articles, carouselItemCount, carouselItemStart);
//         }
//       }
      

// const buttonLeft = document.querySelector('#carousel-button-left');

// const buttonRight = document.querySelector('#carousel-button-right');

// buttonLeft.addEventListener('click', () =>  {
//         carouselItemStart --;
//         populateNewsCarousel(articles, carouselItemStart);
// });

// buttonRight.addEventListener('click', () =>  {
//     carouselItemStart ++;
//     populateNewsCarousel(articles, carouselItemStart);
// });

// function checkButtonsVisibility(
//     articles,
//     carouselItemCount,
//     carouselItemStart,
//   ) {
//     buttonRight.hidden = carouselItemStart >= articles.length - carouselItemCount;
//     buttonLeft.hidden = carouselItemStart === 0;
//     return;
//   }
  
// for (let i = 1; i <= 31; i++) {
//     const daysDiv = document.createElement('div');
//     daysDiv.className = 'main-content__day';
//     mainContent.appendChild(daysDiv);
//     daysDiv.innerText = [i];    
// }

