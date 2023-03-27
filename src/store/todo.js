import {makeAutoObservable} from 'mobx';

class Todo {
    cards = [];
    doSomething = '';

    constructor() {
        makeAutoObservable(this)
    }

    handleChangeInput = (e) => {  // если прописать не через стрелочную функцию, то потеряется контекст!!
        this.doSomething = e.target.value;
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Запрещаем браузеру переходить по адресу формы
        const dataCard = {}; // Передаём значения управляемых компонентов во внешний обработчик
        dataCard.doSomething = this.doSomething;
        dataCard.id = Math.random().toString(16).slice(2);
        //console.log(dataCard.id)
        this.onAddCard(dataCard);
        e.target.reset() //очищаем инпут
    }

    onAddCard = (card) => {
        if (this.doSomething !== '') {
            this.cards.push(card)
        }
    };

    onCardDelete = (card) => {
        this.cards = this.cards.filter((i) => i.id !== card.id);
    }
    
}

export default new Todo()