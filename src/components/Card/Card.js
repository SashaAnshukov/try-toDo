import {useState, useRef} from 'react';
import api from '../../utils/Api';

function Card({light, onCardDelete, card}) {


    const [important, setImportant] = useState(false); //стэйт для кнопки важных задач
    const [changeDoSomething, setChangeDoSomething] = useState(card.doSomething);
    const [disabledInput, setDisabledInput] = useState(true); //стэйт для инпута
    const [toggle, setToggle] = useState(true); //стэйт для кнопки релактирования
    const [upload, setUpload] = useState(false); 
    const [linkk, setLinkk] = useState(''); 

    const InputEl = useRef(null);
    console.log(InputEl)

    const IportantCardClassName = (
        `Card__button_important' ${!important ? 'Card__button_important' : 'Card__button_important-active'} `
    );

    const MainFormClassName = (
        `Main__form' ${light && important ? 'Main__form_light' : 'Main__form'} `
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
        setToggle(!toggle); // при каждом клике на кнопку карандаша(редактирования) меняем стэйт true/false
        //console.log(toggle)
        toggle ? setDisabledInput(false) && handleChangeTask() : setDisabledInput(true)
    }

    const CardButtonUploadClassName = (
        `Card__button_upload' ${handleChangeInput && upload? 'Card__button_upload' : 'Card__button_upload-hide'} `
    )

    function handleChangeInput (e) {
        e.preventDefault();
        console.log(InputEl.current.value)
        setUpload(true)
        //console.log(InputEl.current.files)
        InputEl.current.files.length !== 0 ? setUpload(true) : setUpload(false);
        
    }

    function handleAddFile () {
        api.upload(InputEl.current.files[0]).then(res => {
            console.log(res.link);
            setLinkk(res.link)
        })
        .catch(err => {
            console.log (`Ошибка: ${err}`)
        })
        setUpload(false)
    }

    const CardLinkClassName = (
        `Card__link' ${linkk ? 'Card__link' : 'Card__link-hide'} `
    )

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

                    <label className = "Card__button_add-file">
                        <input
                            className ="Card__button_add-file-hide"
                            type ="file" required 
                            onChange={handleChangeInput}
                            className ="Card__button_add-file-hide"
                            ref={InputEl}
                        />
                        <button 
                            className = {CardButtonUploadClassName}
                            type ="submit" 
                            onClick={handleAddFile} >
                                Download
                        </button>
                        <a className = {CardLinkClassName} href = {linkk}> ссылка </a>
                    </label>

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