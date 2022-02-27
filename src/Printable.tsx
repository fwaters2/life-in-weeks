import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { colors } from "./assets/colors";
import { getEmojiData, getYearsOfLife } from "./utils";

Font.registerEmojiSource({
  format: "png",
  url: "https://twemoji.maxcdn.com/2/72x72/",
});
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  section: {
    alignItems: "center",
  },
  weekSquare: {
    width: 8,
    height: 8,
    margin: 1,
  },
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

// Number of Rows
const WEEKS_BLOCKS_IN_ROW = 52;

const EpochWrapper = (props: { isShaded?: boolean; children: any }) => {
  const { isShaded = false, children } = props;
  return (
    <View
      style={{
        backgroundColor: isShaded ? `${colors.blue}` : `white`,
      }}
    >
      {children}
    </View>
  );
};

const SPACING = 2;

const WeekSquare = (props: any) => {
  const { currentYear, currentWeekInYear, hasBottomMargin } = props;

  const currentWeek = currentYear * WEEKS_BLOCKS_IN_ROW + currentWeekInYear;
  const isFilled = currentWeek < props.myAgeInWeeks;
  const WEEKS_PER_BLOCK = 4;
  const isMultiple = currentWeekInYear % WEEKS_PER_BLOCK === 0;

  const emoji = props.emojiData.find((data: any) => data.week === currentWeek);
  const NO_CHILDREN =
    !props.formData.youngestChildBirthday &&
    !props.formData.eldestChildBirthday;

  const Cell = () => {
    const filledColor = "#2e2e2e"; //colors.brown
    return (
      <View
        style={[
          styles.weekSquare,
          {
            backgroundColor: isFilled ? filledColor : "white",
            borderColor: filledColor,
            borderRadius: "3px",
            borderWidth: isFilled ? 0 : 1,
            marginRight: isMultiple ? SPACING : 0,
            marginBottom: hasBottomMargin ? SPACING : 0,
          },
        ]}
      />
    );
  };
  const EmojiWeek = (props: { emoji: any }) => {
    const { emoji } = props;
    return <Text style={styles.emoji}>{emoji.emoji}</Text>;
  };
  if (NO_CHILDREN) {
    return (
      <View>
        <Cell />
        {emoji && <EmojiWeek emoji={emoji} />}
      </View>
    );
  }
  const WEEK_CHILD_START = dayjs(props.formData.eldestChildBirthday).diff(
    dayjs(props.formData.birthday),
    "week"
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
      <Cell />
      {emoji && <EmojiWeek emoji={emoji} />}
    </EpochWrapper>
  );
};

const YearRow = (props: any) => {
  const { currentYear } = props;
  const ACTUAL_WEEKS_IN_A_YEAR = 52.1429;
  const WEEKS_BLOCKS_IN_ROW = Math.ceil(ACTUAL_WEEKS_IN_A_YEAR);
  const isMultipleOfFive = (currentYear + 1) % 5 === 0;
  const hasLabel = currentYear % 5 === 0;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={{ width: 6, height: 6 }}>
        {hasLabel && <Text style={{ fontSize: 5 }}>{currentYear}</Text>}
      </View>
      {Array(WEEKS_BLOCKS_IN_ROW)
        .fill(WeekSquare)
        .map((Week, index) => (
          <Week
            currentWeekInYear={index}
            hasBottomMargin={isMultipleOfFive}
            {...props}
          />
        ))}
    </View>
  );
};

const LifeInWeeks = (props: any) => {
  // Number of columns
  const YEARS_IN_LIFE = getYearsOfLife(
    props.formData.gender,
    props.formData.nationality
  );
  const emojiData = getEmojiData(props.formData);
  const myAgeInWeeks = dayjs().diff(dayjs(props.formData.birthday), "week");

  return (
    <View>
      {Array(YEARS_IN_LIFE)
        .fill(YearRow)
        .map((Year, index) => (
          <Year
            currentYear={index}
            {...props}
            myAgeInWeeks={myAgeInWeeks}
            emojiData={emojiData}
          />
        ))}
    </View>
  );
};

// Create Document Component
const Printable = (props: any) => {
  const { formData } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, { marginBottom: 30 }]}>
          <Text>LIFE IN WEEKS of {formData.name || "Undisclosed"}</Text>
        </View>
        <View style={styles.section}>
          <LifeInWeeks {...props} />
        </View>
        <View style={{ marginTop: "10px" }}>
          <Text style={{ fontSize: "10px", color: "grey" }}>
            {new Date().toLocaleDateString()} ©{new Date().getFullYear()} Life
            In Weeks
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Printable;
