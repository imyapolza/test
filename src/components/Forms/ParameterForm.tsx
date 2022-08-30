interface ParameterFormProps {
  handleRechart: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const ParameterForm: React.FC<ParameterFormProps> = ({ handleRechart }) => {
  return (
    <form className="form" onChange={handleRechart}>
      <label className="label">
        Выберите параметр:
        <select className="select">
          <option value="months">Месяцы</option>
          <option value="hours">Часы</option>
          <option value="days">Дни</option>
          <option value="weeks">Недели</option>
        </select>
      </label>
    </form>
  );
};

export default ParameterForm;
