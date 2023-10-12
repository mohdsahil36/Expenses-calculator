import {React} from 'react';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props){
    // <div>
    //     {props.items.length===0 && <h4 className='mt-4 text-center'>There is no content for the selected filter!</h4>}
    //         {props.items.length>0 && 
    //         }
    // </div>
    if(props.items.length===0){
        // console.log("No record");
        return <h3 className='text-center mt-4 '>No record found for the selected filter!</h3>
    }
    console.log(props.items);
    return(
        <ul className='p-0'>
            {
                props.items.map((values) => {   
                    return(
                    <ExpenseItem key={values.id} title={values.title} amount={values.amount} date={values.date}/>
                    )
                })
            }
        </ul>
        
    )
}
export default ExpensesList