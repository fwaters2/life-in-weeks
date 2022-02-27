import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { colors } from "../../../assets/colors";
import dayjs from "dayjs";
import Cell from "./Cell";
import { isIndexMultipleOfN } from "../../utils";
import { getWeeksFromBirthday } from "../../../utils";

// Number of Rows
const WEEKS_BLOCKS_IN_ROW = 52;

const EpochWrapper = (props: { isShaded?: boolean; children: any }) => {
  const { isShaded = false, children } = props;
  return (
    <View style={{ position: "relative" }}>
      {children}
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: isShaded ? `${colors.blue}80` : `transparent`,
        }}
      />
    </View>
  );
};

const WeekSquare = (props: any) => {
  const { currentYear, currentWeekInYear, hasBottomMargin } = props;

  const currentWeek = currentYear * WEEKS_BLOCKS_IN_ROW + currentWeekInYear;
  const isFilled = currentWeek < props.myAgeInWeeks;
  const WEEKS_PER_BLOCK = 4;
  const isMultiple = isIndexMultipleOfN(currentWeekInYear, WEEKS_PER_BLOCK);

  const emoji = props.emojiData.find((data: any) => data.week === currentWeek);
  const NO_CHILDREN =
    !props.formData.youngestChildBirthday &&
    !props.formData.eldestChildBirthday;

  const EmojiWeek = (props: { emoji: any }) => {
    const { emoji } = props;
    return <Text style={styles.emoji}>{emoji.emoji}</Text>;
  };
  if (NO_CHILDREN) {
    return (
      <View>
        <Cell
          isFilled={isFilled}
          isMultiple={isMultiple}
          hasBottomMargin={hasBottomMargin}
        />
        {emoji && <EmojiWeek emoji={emoji} />}
      </View>
    );
  }
  const WEEK_CHILD_START = getWeeksFromBirthday(
    props.formData.eldestChildBirthday,
    props.formData.birthday
  );

  const WEEKS_TO_RAISE_A_CHILD = 21 * WEEKS_BLOCKS_IN_ROW;
  const lastChild =
    props.formData.youngestChildBirthday || props.formData.eldestChildBirthday;
  const WEEK_CHILD_END =
    dayjs(lastChild).diff(dayjs(props.formData.birthday), "week") +
    WEEKS_TO_RAISE_A_CHILD;
  const isChildCareWeek =
    currentWeek > WEEK_CHILD_START && currentWeek < WEEK_CHILD_END;

  return (
    <EpochWrapper isShaded={isChildCareWeek}>
      <Cell
        isFilled={isFilled}
        isMultiple={isMultiple}
        hasBottomMargin={hasBottomMargin}
      />
      {emoji && <EmojiWeek emoji={emoji} />}
    </EpochWrapper>
  );
};

export default WeekSquare;

const styles = StyleSheet.create({
  emoji: {
    fontSize: 7,
    width: 10,
    height: 10,
    marginTop: 1,
    position: "absolute",
    backgroundColor: "white",
    textAlign: "center",
  },
});
