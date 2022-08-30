import { useEffect } from "react";
import OptionState from "../enum";
import { IHour } from "../types";

interface IUseOption {
  option: string;
  setDataState: (arg: Array<IHour>) => void;
  setActiveDayForm: (arg: boolean) => void;
  days: Array<IHour>;
  months: Array<IHour>;
  weeks: Array<IHour>;
}

const useOption = ({
  option,
  setDataState,
  setActiveDayForm,
  days,
  months,
  weeks,
}: IUseOption) => {
  useEffect(() => {
    switch (option) {
      case OptionState.days:
        setDataState(days);
        setActiveDayForm(false);
        break;

      case OptionState.months:
        setDataState(months);
        setActiveDayForm(false);
        break;
      case OptionState.hours:
        setActiveDayForm(true);
        break;
      case OptionState.weeks:
        setDataState(weeks);
        setActiveDayForm(false);
        break;
      default:
        setDataState(months);
    }
  }, [option]);
};

export default useOption;
