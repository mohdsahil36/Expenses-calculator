import {React, useState} from 'react';

function ExpenseInput(props){
    // console.log("Props value is :",props);
    const [setTitle,newsetTitle]=useState('');
    const setTitleHandler=(event)=>{
        newsetTitle(event.target.value);
    }

    const [setAmount,newsetAmount]=useState('');
    const setAmountHandler=(event)=>{
        newsetAmount(event.target.value);
    }

    const [setDate,newsetDate]=useState('');
    const setDateHandler=(event)=>{
        newsetDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData ={
            title:setTitle,
            amount:+setAmount,
            date:new Date(setDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        newsetTitle('');
        newsetAmount('');
        newsetDate('');
    }
    
    return(
        <form action="" onSubmit={submitHandler}>
            <div className='values-input'>
                <div className='title'>
                    <label htmlFor="costTitle">Title</label>
                    <input type="text" value={setTitle} onChange={setTitleHandler}/>
                </div>
                <div className='amount'>
                    <label htmlFor="costAmount">Amount</label>
                    <input type="text" value={setAmount} onChange={setAmountHandler} />
                </div>
                <div className='date'>
                    <label htmlFor="costTitle">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={setDate} onChange={setDateHandler} />
                </div>
                <div className='mt-3 action'>
                    <button>Submit</button>
                    <button type='button' onClick={props.onCancel} className='ms-3'>Cancel</button>
                </div>
            </div>
            
        </form>
    )
}
export default ExpenseInput;