import data from '../data.json'
import Bar from './Bar'
const Chart = () => {
  return (
    <div className="container">
      <h2 className="chart__heading">Spending - Last 7 days</h2>
      <div className="chart">
        {data.map(item => <Bar amount={item.amount} day={item.day} />)}
      </div>
      <div className="total">
        <p className="total__month">
          Total this month <span>$478.33</span>
        </p>
        <p className="last__month">
          <span>+2.4% </span>from last month
        </p>
      </div>
    </div>
  );
};

export default Chart;
