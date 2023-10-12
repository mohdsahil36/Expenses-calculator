import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){
    // console.log(props,"new prop")
    return(
        <div className="wrapping-div">
            <ExpenseDate date={props.date}/>
            <div className="expenses-desc">
                <p className="reason">{props.title}</p>
            </div>
            <div className="expenses-cost">
                <p className="amount">{props.amount}</p>
            </div>
        </div>
    )
}
export default ExpenseItem;