import { months } from "@/constants/months";
import { add } from "date-fns";

export const getThreeMothsFromNow = () => {
  const currentMonth = add(new Date(), {
    months: 1,
  }).getMonth();

  const threeMonthsFromCurrentMonth = months.slice(
    currentMonth,
    currentMonth + 3,
  );

  return threeMonthsFromCurrentMonth;
};
