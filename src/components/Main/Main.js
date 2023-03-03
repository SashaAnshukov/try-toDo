import {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Reorder} from 'framer-motion'
import Card from '../Card/Card';
import todo from '../../store/todo'

/*function Main({light}) {*/
const Main = observer ( ({light}) => {
    
    /*const [cards, setCards] = useState([]); // Стейт для массива карточек
    const [doSomething, setDoSomething] = useState(''); // Стейт, в котором содержится значение инпута*/

    // Обработчики изменения инпута обновляет стейт
    /*function handleChangeInput(e) {
        setDoSomething(e.target.value);
    }*/

    /*function handleSubmit(e) {
        e.preventDefault(); // Запрещаем браузеру переходить по адресу формы
        const dataCard = {}; // Передаём значения управляемых компонентов во внешний обработчик
        dataCard.doSomething = doSomething;
        dataCard.id = Math.random().toString(16).slice(2);
        //console.log(dataCard.id)
        onAddCard(dataCard);
        e.target.reset() //очищаем инпут
    }*/

    /*function onAddCard(newCard) {
        if (doSomething !== '') {
            setCards([newCard, ...cards]);
        }
    };

    function onCardDelete (card) {
        setCards((cards) => cards.filter((i) => i.id !== card.id));
    }*/

    /*<Reorder.Group as= "div" axis="y" values={cards} onReorder={setCards}>
                    {cards.map (card => {
                        return <Reorder.Item value={card} key={card.id} >
                            {<Card 
                                light={light}
                                onCardDelete ={onCardDelete} 
                                card={card}
                                key={card.id} 
                            />}
                        </ Reorder.Item>
                    })}
                </Reorder.Group>*/

    return (
        <>
            <div className="Main">
                <header className="Main__logo">ToDo list</header>
                
                <form className="Main__form" onSubmit={todo.handleSubmit}>
                    <input
                        onChange={todo.handleChangeInput}
                        placeholder="Добавь цель"
                        required minLength="2" maxLength="400" type="text"
                        name ="name" className="Card__info"
                    />
                    <button
                        type ="submit"
                        aria-label="addButton"
                        className="Main__button">
                    </button>
                </form>
                
                <Reorder.Group as= "div" axis="y" values={todo} onReorder={todo}>
                    {todo.cards.map (card => {
                        return <Reorder.Item value={todo} key={card.id} >
                            {<Card 
                                light={light}
                                onCardDelete ={todo.onCardDelete} 
                                card={card}
                                key={card.id} 
                            />}
                        </ Reorder.Item>
                    })}
                </Reorder.Group>
            </div>
        </>
    );

})

export default Main;