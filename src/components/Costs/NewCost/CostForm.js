import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const NameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const AmountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        console.log(costData);

        setInputName('');
        setInputAmount('');
        setInputDate('');

        props.onSaveCostData(costData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input 
                    type='text' 
                    value={inputName} 
                    onChange={NameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input 
                    type='number' 
                    min="0.01" 
                    step="0.01" 
                    value={inputAmount}
                    onChange={AmountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input 
                    type='date' 
                    min="2019-01-01" 
                    step="2023-01-01"
                    value={inputDate} 
                    onChange={DateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button type="button" onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;