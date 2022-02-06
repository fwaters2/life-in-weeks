import dayjs from "dayjs";

const ACTUAL_WEEKS_IN_A_YEAR = 52.1429;
const lifeExpectancyData = require("./life-expectancy.json");

export const getYearsOfLife = (gender: string, nationality: string) => {
  const expectancyForNationality = lifeExpectancyData.find(
    (data: { nationality: string }) => data.nationality === nationality
  );
  if (!expectancyForNationality) {
    return 72;
  }
  const expectancy = expectancyForNationality[gender];
  const returnedVal = Math.ceil(expectancy);

  return returnedVal;
};

export const getEmojiData = (dates: {
  name?: string;
  birthday?: any;
  gender?: string;
  nationality?: string;
  highSchoolFinishDate?: any;
  collegeFinishDate?: any;
  gradSchoolFinishDate?: any;
  eldestChildBirthday?: any;
  youngestChildBirthday?: any;
  anniversary?: any;
  careerStartDate?: any;
  businessStartDate?: any;
  retirementDate?: any;
  milestone1?: any;
  milestone2?: any;
  milestone3?: any;
  email?: string;
}) => {
  const { highSchoolFinishDate, collegeFinishDate, gradSchoolFinishDate } =
    dates;
  const BIRTHDAY_EMOJI = "🎂";
  const GRADUATION_EMOJI = "🎓";
  const graduationDates = {
    highSchoolFinishDate,
    collegeFinishDate,
    gradSchoolFinishDate,
  };
  const CHILD_BIRTHDAY_EMOJI = "👪";
  const childBirthdayDates = {
    eldestChildBirthday: dates.eldestChildBirthday,
    youngestChildBirthday: dates.youngestChildBirthday,
  };
  const ANNIVERSARY_EMOJI = "❤️";
  const START_CAREER_EMOJI = "💼";
  const START_BUSINESS_EMOJI = "💰";
  const RETIREMENT_EMOJI = "🏖️";
  const MILESTONE_EMOJI = "🏆";
  const milestoneDates = {
    milestone1: dates.milestone1,
    milestone2: dates.milestone2,
    milestone3: dates.milestone3,
  };
  const emojiData: { emoji: string; week: number }[] = [
    { emoji: BIRTHDAY_EMOJI, week: 0 },
  ];
  const getWeeksFromBirthday = (date: any) => {
    return dayjs(date).diff(dayjs(dates.birthday), "week");
  };
  Object.values(graduationDates).forEach((date) => {
    if (date) {
      const week = getWeeksFromBirthday(date);
      emojiData.push({ emoji: GRADUATION_EMOJI, week });
    }
  });
  Object.values(childBirthdayDates).forEach((date) => {
    if (date) {
      const week = getWeeksFromBirthday(date);
      emojiData.push({ emoji: CHILD_BIRTHDAY_EMOJI, week });
    }
  });
  if (dates.anniversary) {
    emojiData.push({
      emoji: ANNIVERSARY_EMOJI,
      week: getWeeksFromBirthday(dates.anniversary),
    });
  }
  if (dates.careerStartDate) {
    emojiData.push({
      emoji: START_CAREER_EMOJI,
      week: getWeeksFromBirthday(dates.careerStartDate),
    });
  }
  if (dates.businessStartDate) {
    emojiData.push({
      emoji: START_BUSINESS_EMOJI,
      week: getWeeksFromBirthday(dates.businessStartDate),
    });
  }
  if (dates.retirementDate) {
    emojiData.push({
      emoji: RETIREMENT_EMOJI,
      week: getWeeksFromBirthday(dates.retirementDate),
    });
  }
  Object.values(milestoneDates).forEach((date) => {
    if (date) {
      const week = getWeeksFromBirthday(date);
      emojiData.push({ emoji: MILESTONE_EMOJI, week });
    }
  });

  return emojiData;
};
