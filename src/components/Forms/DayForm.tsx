import { IHour } from "../../types";

interface DayFormProps {
  handleHours: (e: React.ChangeEvent<HTMLFormElement>) => void;
  isActiveDayForm: boolean;
  days: Array<IHour>;
}

const DayForm: React.FC<DayFormProps> = ({
  handleHours,
  isActiveDayForm,
  days,
}) => {
  return (
    <form className="form " onChange={handleHours}>
      {isActiveDayForm && (
        <label className="label">
          Выберите день:
          <select className="select">
            {days &&
              days.map((obj: IHour, index: number) => (
                <option key={index} value={obj.time.slice(0, 8)}>
                  {obj.time.slice(0, 8)}
                </option>
              ))}
          </select>
        </label>
      )}
    </form>
  );
};

export default DayForm;
