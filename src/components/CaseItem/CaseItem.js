import {useState} from 'react';

function CaseItem({onCardLike, onCardDelete, card}) {
    const [doSomething, setDoSomething] = useState('');

    const CaseItemLikeButtonClassName = "CaseItem__mesto-like";

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
                        type ="checkbox" aria-label="like">
                        Done
                    </button>
                    <button 
                        type ="submit"
                        aria-label="saveButton"
                        className="CaseItem__button CaseItem__button_invalid">
                        Save
                    </button>
                    <button
                        onClick={handleLikeClick}
                        className = {CaseItemLikeButtonClassName}
                        type ="button" aria-label= "add-favorite">
                        Like
                    </button>
                </form>
            </div>
        </>
    );
}

export default CaseItem;