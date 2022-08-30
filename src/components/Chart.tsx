import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IHour } from "../types";

interface ChartProps {
  dataState: Array<IHour>;
}

const Chart: React.FC<ChartProps> = ({ dataState }) => {
  return (
    <div className="chart__container">
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart data={dataState}>
          <Line type="monotone" dataKey="gasPrice" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
