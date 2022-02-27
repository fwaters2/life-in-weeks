import { isIndexMultipleOfN } from "./utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

test("isIndexMultipleOfN", () => {
  const rowIndexWithZeroIndex = 0; //1st row
  const rowIndexWithOneIndex = 1; //2nd row
  const rowIndexWithTwoIndex = 2; //3rd row
  const rowIndexWithThreeIndex = 3; //4th row

  const N = 4;

  expect(isIndexMultipleOfN(rowIndexWithZeroIndex, N)).toBe(false);
  expect(isIndexMultipleOfN(rowIndexWithOneIndex, N)).toBe(false);
  expect(isIndexMultipleOfN(rowIndexWithTwoIndex, N)).toBe(false);
  expect(isIndexMultipleOfN(rowIndexWithThreeIndex, N)).toBe(true);
});

test("getWeeksFromBirthday", () => {
  const birthday = dayjs("2020-01-01");
  const ONE_DAY_LATER = dayjs("2020-01-02");
  const ONE_WEEK_LATER = dayjs("2020-01-08");
  const ONE_MONTH_LATER = dayjs("2020-02-01");
  const ALMOST_A_YEAR_LATER = dayjs("2020-12-31");

  const diffOfOneDay = ONE_DAY_LATER.diff(birthday, "weeks");
  const diffOfOneWeek = ONE_WEEK_LATER.diff(birthday, "weeks");
  const diffofFourWeeks = ONE_MONTH_LATER.diff(birthday, "weeks");
  const diffofAlmostAYear = ALMOST_A_YEAR_LATER.diff(birthday, "weeks");

  expect(diffOfOneDay).toBe(0);
  expect(diffOfOneWeek).toBe(1);
  expect(diffofFourWeeks).toBe(4);
  expect(diffofAlmostAYear).toBe(52);
});

test("isInCurrentYear", () => {
  const CURRENT_YEAR = dayjs("2020-02-02");
  const ONE_DAY_LATER = dayjs("2020-02-03");
  const ONE_WEEK_LATER = dayjs("2020-02-09");
  const ALMOST_A_YEAR_LATER = dayjs("2021-02-01");
  const ONE_YEAR_LATER = dayjs("2021-02-02");
  const TWO_YEARS_LATER = dayjs("2022-02-02");

  const diffOfOneDay = ONE_DAY_LATER.diff(CURRENT_YEAR, "years");
  const diffOfOneWeek = ONE_WEEK_LATER.diff(CURRENT_YEAR, "years");
  const diffofAlmostAYear = ALMOST_A_YEAR_LATER.diff(CURRENT_YEAR, "years");
  const diffOfOneYear = ONE_YEAR_LATER.diff(CURRENT_YEAR, "years");
  const diffofTwoYears = TWO_YEARS_LATER.diff(CURRENT_YEAR, "years");

  expect(diffOfOneDay).toBe(0);
  expect(diffOfOneWeek).toBe(0);
  expect(diffofAlmostAYear).toBe(0);
  expect(diffOfOneYear).toBe(1);
  expect(diffofTwoYears).toBe(2);
});
