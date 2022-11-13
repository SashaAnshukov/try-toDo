import {useState} from 'react';

function Card({onCardLike, onCardDelete, card}) {
    
    const [doSomething, setDoSomething] = useState('');
    const [toDo, setToDo] = useState([]);

    const CaseItemLikeButtonClassName = "CaseItem__mesto-like";

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleChangeInput(e) {
        setDoSomething(e.target.value);
    }

    function addTodo() {
        if (toDo !== "") {
            setToDo([...toDo, toDo]);
            setToDo("");
        }
    };

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick () {
        onCardDelete (card);
    }

    return (
        <>
            <div className="CaseItem">
                
                <form className="CaseItem__form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChangeInput}
                        placeholder="Добавь цель"
                        required minLength="2" maxLength="40" type="text"
                        name ="name" className="CaseItem__input CaseItem__input_text_name"
                    />
                    <button
                        onClick={addTodo} 
                        type ="submit"
                        aria-label="saveButton"
                        className="CaseItem__button CaseItem__button_invalid">
                        addTodo
                    </button>
                    <button
                        onClick={handleLikeClick}
                        className = {CaseItemLikeButtonClassName}
                        type ="button" aria-label= "add-favorite">
                        Like
                    </button>
                    <button
                        onClick={handleDeleteClick}
                        className = "CaseItemDeleteButton"
                        type ="button" aria-label="delete">
                        Delete
                    </button>
                </form>
            </div>
        </>
    );
}

export default Card;