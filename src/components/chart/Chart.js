import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 0 },
  { name: "Feb", Total: 10000 },
  { name: "Mar", Total: 5000 },
  { name: "Apr", Total: 15000 },
  { name: "May", Total: 10000 },
  { name: "Jun", Total: 20000 },
  { name: "Jul", Total: 15000 },
  { name: "Aug", Total: 25000 },
  { name: "Sep", Total: 20000 },
  { name: "Oct", Total: 35000 },
  { name: "Nov", Total: 25000 },
  { name: "Dec", Total: 40000 },
];

const Chart = ({aspect,title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart 
        width={972}
        height={320}
        data={data}
        margin={{top:10,right:30,left:0,bottom:0}}>
          <defs>
            <linearGradient id="total" xl="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <YAxis />
          <Tooltip />
          <Area 
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
