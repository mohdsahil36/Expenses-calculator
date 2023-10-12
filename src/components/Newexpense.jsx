import {React,useState} from 'react';
import ExpenseInput from './ExpenseInput';
// import Filter from './Filter';

function NewExpense(props){

    const [isEditing,setisEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const newExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(newExpenseData);
        props.onAddExpense(newExpenseData);
        setisEditing(false);
    }

    const addExpenseHandler=()=>{
        setisEditing(true);
    }

    const stopEditingHandler=()=>{
        setisEditing(false);
    }

    return(
        <div className='text-center new_expense'>
            {isEditing && <ExpenseInput onSaveExpenseData = {saveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
            {!isEditing && <button className='p-3 bg-success my-2 text-white add_new' onClick={addExpenseHandler}>Add New Expense</button>}
        </div>
    )
}
export default NewExpense