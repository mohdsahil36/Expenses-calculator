import {React} from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

function Chart(props){
    const dataPointValues=props.dataPoints.map((dataPoint=>dataPoint.value))
    const totalMaximum=Math.max(...dataPointValues);
    console.log("Total max value:",totalMaximum );
return(
    <div className='chart'>
        {props.dataPoints.map((datapoint)=>
        <ChartBar 
        key={datapoint.label}
        value={datapoint.value} 
        maxValue={totalMaximum} 
        label={datapoint.label}
        />)}
    </div>
)
}
export default Chart