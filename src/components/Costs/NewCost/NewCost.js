import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

let counter = 0;

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: counter
        }
        counter++;
        console.log(costData);
        console.log('In NewCost component');

        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
    <div className="new-cost"> 
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
    );
}

export default NewCost;