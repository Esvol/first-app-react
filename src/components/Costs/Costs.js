import './Costs.css'
import Card from '../UI/Card';
import CostList from './NewCost/CostList';
import CostsFilter from './NewCost/CostsFilter';
import { useState } from 'react';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter((yearSel) => yearSel.date.getFullYear() == selectedYear)

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    );
}

export default Costs;