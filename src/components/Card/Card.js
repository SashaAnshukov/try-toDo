import {useState} from 'react';

function Card({onCardLike, onCardDelete, card}) {
    
    const MainItemLikeButtonClassName = "MainItem__mesto-like";

    function handleSubmitCard(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick () {
        onCardDelete (card);
    }

    return (
        <>
            <div className="Main">
                
                <form className="Main__form" onSubmit={handleSubmitCard}>
                <h2 className="rectangle__mesto-text">{card.doSomething}</h2>
                    <button
                        onClick={handleLikeClick}
                        className = {MainItemLikeButtonClassName}
                        type ="button" aria-label= "add-favorite">
                        Like
                    </button>
                    <button
                        onClick={handleDeleteClick}
                        className = "MainItemDeleteButton"
                        type ="button" aria-label="delete">
                        Delete
                    </button>
                </form>
            </div>
        </>
    );
}

export default Card;