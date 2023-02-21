import {useState} from 'react';

function Card({onCardEdit, onCardDelete, card}) {


    const [important, setImportant] = useState(false); //стэйт для кнопки важных задач

    const IportantCardClassName = (
        `Card__button_important' ${important ? 'Card__button_important' : 'Card__button_important-active'} `
    );

    function handleSubmitCard(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleImportantClick() {
        !important ? setImportant(true) : setImportant(false)
    }

    function handleEditClick() {
        onCardEdit (card)
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
                        onClick = {handleImportantClick}
                        className = {IportantCardClassName}
                        type ="button" aria-label= "add-important">
                    </button>
                    
                    <button
                        onClick={handleDeleteClick}
                        className = "Card__button_delete"
                        type ="button" aria-label="edit">
                    </button>
                    
                    <button
                        onClick={handleEditClick}
                        className = "Card__button_edit"
                        type ="button" aria-label="delete">
                    </button>
                </form>
            </div>
        </>
    );
}

export default Card;