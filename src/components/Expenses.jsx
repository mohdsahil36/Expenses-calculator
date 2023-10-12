import {React,useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import Filter from './Filter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    // console.log("Expenses",props.items);

    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=(selectedYear)=>{
        console.log("App.js",selectedYear);
        // console.log("Selected year",selectedYear);
        setFilteredYear(selectedYear);
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    return(
        <div>
            <Filter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses