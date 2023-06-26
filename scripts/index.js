import {initialPosts} from './constants.js'
import {Card} from "./Card.js";

const cardContainer = document.querySelector('.card-container');

initialPosts.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  cardContainer.append(cardElement)
 }
)




