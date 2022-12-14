import {useState} from 'react';
import Card from '../Card/Card';

function CaseItem({onCardLike, onCardDelete, card}) {
    
    const [doSomething, setDoSomething] = useState('');
    const [toDo, setToDo] = useState([]);

    const CaseItemLikeButtonClassName = "CaseItem__mesto-like";

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleChangeTarget(e) {
        setDoSomething(e.target.value);
    }

    function addTodo() {
        setToDo([toDo, ...toDo]);
    };

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick (card) {
        console.log(card)
        setToDo((card) => card.filter((i) => i._id !== card._id));
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
                        onClick={addTodo} 
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
                    <button
                        onClick={handleDeleteClick}
                        className = "CaseItemDeleteButton"
                        type ="button" aria-label="delete">
                        Done
                    </button>
                </form>
                
                <section className="elements">
                    {toDo.map (card => {
                        return <Card 
                            onCardLike = {onCardLike}
                            onCardDelete ={handleDeleteClick} card={card} key = {card._id}/>
                    })}
                </section>
            </div>
        </>
    );
}

export default CaseItem;