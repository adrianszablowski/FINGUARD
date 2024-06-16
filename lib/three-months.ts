import { months } from "@/constants/months";

export const getThreeMothsFromNow = () => {
  const currentMonth = new Date().getMonth() + 1;

  const threeMonthsFromCurrentMonth = months.slice(
    currentMonth,
    currentMonth + 3,
  );

  return threeMonthsFromCurrentMonth;
};
