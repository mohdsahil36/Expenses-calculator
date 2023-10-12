// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/Newexpense';
// import Filter from './components/Filter';
import './styles/App.scss';

//importing bootstrap css and js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from 'react';

const DUMMY_DATA=[
  {
    id:'1',
    title:"Car insurance",
    amount:"300",
    date:new Date(2022,6,16)
  },
  {
    id:'2',
    title:"Groceries",
    amount:"100",
    date:new Date(2019,6,15)
  },
  {
    id:'3',
    title:"Books",
    amount:"100",
    date:new Date(2021,8,10)
  },
  {
    id:'4',
    title:"Furniture",
    amount:"400",
    date:new Date(2022,5,18)
  }
]

function App() {
  const [expenses,setExpenses]=useState(DUMMY_DATA);
  const addExpenseHandler=(expense)=>{
    console.log("This is inside App.js");
    console.log(expense);
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  }

  return (
    <div className='main bg-secondary py-4'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
