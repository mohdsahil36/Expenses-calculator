import { React} from 'react';

function Filter(props) {
    const yearChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
        // console.log("target value",event.target.value);
    }

    return (
        <div className='mx-3 py-3 expenses-filter bg-dark text-white'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select className='px-2 py-1' onChange={yearChangeHandler} value={props.selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}
export default Filter