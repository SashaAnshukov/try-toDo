import {useState, useEffect} from 'react';
import Card from '../Card/Card';

function Main({onCardLike}) {
    
    const [cards, setCards] = useState([]); // Стейт для массива карточек
    const [doSomething, setDoSomething] = useState(''); // Стейт, в котором содержится значение инпута

    // Обработчики изменения инпута обновляет стейт
    function handleChangeInput(e) {
        setDoSomething(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Запрещаем браузеру переходить по адресу формы
        const dataCard = {}; // Передаём значения управляемых компонентов во внешний обработчик
        dataCard.doSomething = doSomething;
        dataCard.id = Math.random().toString(16).slice(2);
        //console.log(dataCard.id)
        onAddCard(dataCard);
        e.target.reset() //очищаем инпут
    }

    function onAddCard(newCard) {
        if (doSomething !== '') {
            setCards([newCard, ...cards]);
        }
    };

    function onCardDelete (card) {
        setCards((cards) => cards.filter((i) => i.id !== card.id));
    }

    return (
        <>
            <div className="Main">
                <header className="Main__logo">ToDo plan</header>
                
                <form className="Main__form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChangeInput}
                        placeholder="Добавь цель"
                        required minLength="2" maxLength="400" type="text"
                        name ="name" className="Main__input Main__input_text_name"
                    />
                    <button
                        type ="submit"
                        aria-label="saveButton"
                        className="Main__button Main__button_invalid">
                        Add
                    </button>
                </form>
                
                <section className="elements">
                    {cards.map (card => {
                        return <Card 
                            onCardLike = {onCardLike} addCard = {onAddCard}
                            onCardDelete ={onCardDelete} card={card} key = {card.id}/>
                    })}
                </section>
            </div>
        </>
    );
}

export default Main;