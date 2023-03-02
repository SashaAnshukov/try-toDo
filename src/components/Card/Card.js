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
        `Card__button ${!important ? 'Card__button_important' : 'Card__button_important-active'} `
    );

    const CardButtonEditClassName = (
        `Card__button ${toggle ? 'Card__button_edit' : 'Card__button_edit-active'} `
    );

    const MainFormClassName = (
        `Main__form ${light && important ? 'Main__form_light' : ''} `
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

    const CardInfoClassName = (
        `Card__info ${!toggle ? 'Card__info_focus' : ''}`
    )

    const CardButtonUploadClassName = (
        `Card__button ${handleChangeInput && upload ? 'Card__button_upload' : 'Card__button_upload-hide'} `
    )

    const CardButtonAddFileClassName = (
        `Card__button Card__button_add-file' ${
            handleChangeInput && upload ? 'Card__button_add-file-ready' : 'Card__button_add-file'
        } `
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
        `Card__button ${linkk ? 'Card__button_link' : 'Card__button_link-hide'} `
    )

    function handleDeleteClick () {
        onCardDelete (card);
    }
    

    return (
        <>
            <div className="Main">
                <form className={MainFormClassName} onSubmit={handleSubmitCard}>
                    <input 
                        className={CardInfoClassName}
                        rows="3"
                        cols="30"
                        minLength="1"
                        maxLength="54"
                        type="text"
                        value={card.doSomething || changeDoSomething}
                        disabled = {disabledInput}
                        onChange={handleChangeTask}
                    />
                    <button
                        className = {IportantCardClassName || ''}
                        type ="button"
                        aria-label= "add-important"
                        onClick = {handleImportantClick} >
                    </button>
                    
                    <button
                        className = {CardButtonEditClassName}
                        type ="button"
                        aria-label="edit"
                        onClick={handleEditClick} >
                    </button>

                    <label className = {
                            !linkk 
                                ? 
                            CardButtonAddFileClassName 
                                : 
                            ''
                            }>
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
                            aria-label="download"
                            onClick={handleAddFile} >
                                Download
                        </button>
                        
                    </label>
                    <a 
                        className = {CardLinkClassName}
                        href = {linkk}
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <button
                        className = "Card__button Card__button_delete"
                        type ="button"
                        aria-label="delete"
                        onClick={handleDeleteClick} >
                    </button>
                </form>
            </div>
        </>
    );
}

export default Card;