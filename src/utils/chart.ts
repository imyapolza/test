import { IHour } from "../types";

export const monthsFunc = (data: Array<IHour>) =>
  data
    .filter((obj: IHour, index: number) =>
      Number(obj.time.slice(9) === "00:00" && obj.time.slice(6, 8) === "01")
    )
    .map((obj: IHour) => ({ ...obj, name: obj.time.slice(0, 8) }));

export const onlyDaysFunc = (data: Array<IHour>) =>
  data.filter((obj: IHour, index: number) =>
    Number(obj.time.slice(9) === "00:00")
  );

export const daysFunc = (onlyDays: Array<IHour>) =>
  onlyDays.map((obj: IHour) => ({
    ...obj,
    name: obj.time.slice(0, 8),
  }));

export const hoursFunc = (data: Array<IHour>, e: React.ChangeEvent<HTMLFormElement>) =>
  data
    .filter((obj: IHour) => obj.time.slice(0, 8) === e.target.value)
    .map((obj: IHour) => ({ ...obj, name: obj.time.slice(9) }));

export const everyNth = (arr: Array<IHour>, n: number) =>
  arr.filter((e, i) => i % n === 0);
