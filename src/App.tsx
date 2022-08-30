import { useState } from "react";

import "./App.scss";
import Chart from "./components/Chart";
import DayForm from "./components/Forms/DayForm";
import ParameterForm from "./components/Forms/ParameterForm";
import useOption from "./hooks/useOption";
import { IHour } from "./types";
import {
  daysFunc,
  everyNth,
  hoursFunc,
  monthsFunc,
  onlyDaysFunc,
} from "./utils/chart";

const filters: { [key: string]: any } = require("./gas_price.json");

function App() {
  const [dataState, setDataState] = useState<Array<IHour>>([]);
  const [option, setOption] = useState<string>("");
  const [isActiveDayForm, setActiveDayForm] = useState<boolean>(false);

  const data = filters.ethereum.transactions;

  const months = monthsFunc(data);
  const onlyDays = onlyDaysFunc(data);
  const days = daysFunc(onlyDays);

  const weeks: Array<IHour> = everyNth(days, 8);

  useOption({ option, setDataState, setActiveDayForm, days, months, weeks });

  const handleRechart = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  const handleHours = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hours = hoursFunc(data, e);

    setDataState(hours);
  };

  return (
    <>
      <ParameterForm handleRechart={handleRechart} />

      <DayForm
        handleHours={handleHours}
        isActiveDayForm={isActiveDayForm}
        days={days}
      />

      <Chart dataState={dataState} />
    </>
  );
}

export default App;
