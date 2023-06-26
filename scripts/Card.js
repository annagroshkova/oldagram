export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._data = data;
    this._cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
    this._likeBtn = this._cardElement.querySelector('.card__like-button');
    this._setEventListeners()
  }

  generateCard() {
    this._cardElement.querySelector('.card__user-avatar').src = this._data.avatar;
    this._cardElement.querySelector('.card__user-full-name').textContent = this._data.name;
    this._cardElement.querySelector('.card__user-location').textContent = this._data.location;
    this._cardElement.querySelector('.card__image-post').src = this._data.post;
    this._cardElement.querySelector('.card__user-likes').textContent = `${this._data.likes} likes`;
    this._cardElement.querySelector('.card__user-comment').textContent = this._data.comment;
    this._cardElement.querySelector('.card__user-nickname').textContent = `${this._data.username} `;

    return this._cardElement
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
     if (!this._likeBtn.classList.contains('card__like-button_active')) {
       this._data.likes += 1
       this._likeBtn.classList.add('card__like-button_active');
     } else {
       this._data.likes -= 1
       this._likeBtn.classList.remove('card__like-button_active');
     }
     this.generateCard()
    })
  }
}
