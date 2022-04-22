import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { colors } from "../../../assets/colors";
import dayjs from "dayjs";
import Cell from "./Cell";
import { isIndexMultipleOfN } from "../../utils";
import { getWeeksFromBirthday } from "../../../utils";

// Number of Rows
const WEEKS_BLOCKS_IN_ROW = 52;

const SPACING = 2;
const filledColor = colors.brown;

const EpochWrapper = (props: {
  hasEmoji: boolean;
  isShaded?: boolean;
  children: any;
}) => {
  const { isShaded = false, children } = props;

  return (
    <View style={{ position: "relative", zIndex: props.hasEmoji ? 0 : 1 }}>
      {children}
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: isShaded ? `${colors.backdrop}30` : `transparent`,
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
      <View style={{ position: "relative", zIndex: props.hasEmoji ? 0 : 1 }}>
        <Cell
          isFilled={isFilled}
          isMultiple={isMultiple}
          hasBottomMargin={hasBottomMargin}
        />
        {emoji ? (
          <View style={styles.emojiContainer}>
            <EmojiWeek emoji={emoji} />
          </View>
        ) : (
          <View
            style={{
              width: 8,
              height: 8,
              margin: 1,
              position: "absolute",

              backgroundColor: isFilled ? filledColor : "transparent",
              borderColor: filledColor,
              borderRadius: 3,
              borderWidth: isFilled ? 0 : 1,
              marginRight: isMultiple ? SPACING : 0,
              marginBottom: hasBottomMargin ? SPACING : 0,
            }}
          />
        )}
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
    <EpochWrapper isShaded={isChildCareWeek} hasEmoji={!!emoji}>
      <Cell
        isFilled={isFilled}
        isMultiple={isMultiple}
        hasBottomMargin={hasBottomMargin}
      />

      {emoji ? (
        <View style={styles.emojiContainer}>
          <EmojiWeek emoji={emoji} />
        </View>
      ) : (
        <View
          style={{
            width: 8,
            height: 8,
            margin: 1,
            position: "absolute",

            backgroundColor: isFilled ? filledColor : "transparent",
            borderColor: filledColor,
            borderRadius: 3,
            borderWidth: isFilled ? 0 : 1,
            marginRight: isMultiple ? SPACING : 0,
            marginBottom: hasBottomMargin ? SPACING : 0,
          }}
        />
      )}
    </EpochWrapper>
  );
};

export default WeekSquare;

const styles = StyleSheet.create({
  emojiContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: "50%",

    width: 11,
    height: 11,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 8,
    // width: 12,
    // height: 12,

    textAlign: "center",
  },
});
