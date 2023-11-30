/* eslint-disable react/prop-types */
import  Chart  from "react-apexcharts";

const ChartView = ({perti,win}) => {

const pieData = () => {
  const valuePercentage = (win / perti) * 100;
  const valuePercentageFixed = parseFloat(valuePercentage.toFixed(2))
  const array= [valuePercentageFixed, 100 - valuePercentageFixed]
  // console.log(array,perti,win);
  return array;
} 
  return (
    <div className="container-fluid mb-3 flex justify-center">
        <Chart 
        className="w-[600px] h-[400px]"
        type="pie"
        series={pieData()}            
        options={{
                labels:["Total Win Rate","You Not Win"],
                legend: {position: 'bottom'},
                colors:['#00C49F', '#FF444A'] 
              }}
        >
        </Chart>
    </div>
);
}


export default ChartView;