import {useState} from 'react';

function Card({light, onCardDelete, card}) {


    const [important, setImportant] = useState(false); //стэйт для кнопки важных задач
    const [changeDoSomething, setChangeDoSomething] = useState(card.doSomething);
    const [disabledInput, setDisabledInput] = useState(true); //стэйт для инпута
    const [toggle, setToggle] = useState(true); //стэйт для кнопки релактирования

    const IportantCardClassName = (
        `Card__button_important' ${!important ? 'Card__button_important' : 'Card__button_important-active'} `
    );

    const MainFormClassName = (
        `Main__form' ${light&&important ? 'Main__form_light' : 'Main__form'} `
    )

    function handleSubmitCard(e) {
      // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    }

    function handleImportantClick() {
        !important ? setImportant(true) : setImportant(false);
    }

    /*const ButtonEditCardClassName = (
        `Card__button_edit' ${handleChangeTask ? 'Card__button_edit' : 'Card__button_edit-active'} `
    );*/

    function handleChangeTask(e) {
        if (e) {
            card.doSomething = setChangeDoSomething(e.target.value);
        }
    }

    function handleEditClick() {
        setToggle(!toggle); // при каждом клике на кнопку карандаша меняем стэйт true/false
        //console.log(toggle)
        toggle ? setDisabledInput(false) && handleChangeTask() : setDisabledInput(true)
        
    }

    function handleDeleteClick () {
        onCardDelete (card);
    }
    

    return (
        <>
            <div className="Main">
                <form className={MainFormClassName} onSubmit={handleSubmitCard}>
                    <input 
                        className="Card_info"
                        type="text"
                        value={card.doSomething || changeDoSomething}
                        disabled = {disabledInput}
                        onChange={handleChangeTask}
                    />
                    <button
                        onClick = {handleImportantClick}
                        className = {IportantCardClassName || ''}
                        type ="button" aria-label= "add-important">
                    </button>
                    
                    <button
                        onClick={handleEditClick}
                        className = "Card__button_edit"
                        type ="button" aria-label="delete">
                    </button>

                    <button
                        onClick={handleDeleteClick}
                        className = "Card__button_add-file"
                        type ="button" aria-label="add-file">
                    </button>

                    <button
                        onClick={handleDeleteClick}
                        className = "Card__button_delete"
                        type ="button" aria-label="delete">
                    </button>
                </form>
            </div>
        </>
    );
}

export default Card;