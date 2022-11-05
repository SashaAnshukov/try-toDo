import {useState} from 'react';

function CaseItem({onCardLike, onCardDelete, card}) {
    const [doSomething, setDoSomething] = useState('');

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleChangeTarget(e) {
        setDoSomething(e.target.value);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick () {
        onCardDelete (card);
    }

    return (
        <>
            <div className="CaseItem">
                <header className="CaseItem_Logo">ToDo plan</header>
                
                
                <form className="CaseItem__form" onSubmit={handleSubmit}>
                    <input
                    onChange={handleChangeTarget}
                    placeholder="Добавь цель"
                    required minLength="2" maxLength="40" type="text"
                    name ="name" className="CaseItem__input CaseItem__input_text_name"
                    />
                    <button
                    onClick={handleLikeClick}
                    className = "CaseItemLikeButton"
                    type ="button" aria-label="like" 
                    >
                    </button>
                    <button type ="submit" aria-label="saveButton"
                    className="CaseItem__button CaseItem__button_invalid"> Save
                    </button>
                </form>
            </div>

            <div className="rectangle-item-template">
                <article className="rectangle">
                    <button
                        onClick={handleDeleteClick} 
                        className = "cardDeleteButtonClassName"
                        type ="button" aria-label="trash" 
                        /*className="rectangle__trash opacity-buttons"*/>
                    </button>
                    <div className="rectangle__info">
                        <div className="rectangle__likes">
                            <button
                                onClick={handleLikeClick}
                                className = "cardLikeButtonClassName"
                                type ="button" aria-label="like" 
                                /*className="rectangle__mesto-like opacity-like"*/>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
                

        </>
    );
}

export default CaseItem;