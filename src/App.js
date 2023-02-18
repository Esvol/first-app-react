import { useState } from 'react';
import './App.css';
import Costs from './components/Costs/Costs';
import NewCost from './components/Costs/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    date: new Date(2022, 4, 12),
    description: 'Холодильник',
    amount: 999.99,
    id: 'c1'
  },
  {
    date: new Date(2021, 5, 22),
    description: 'Футболка',
    amount: 19.49,
    id: 'c2'
  },
  {
    date: new Date(2021, 1, 5),
    description: 'Носки',
    amount: 9.99,
    id: 'c3'
  }
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs} />
    </div>
  );
}

export default App;
