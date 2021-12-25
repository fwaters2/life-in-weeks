import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { colors } from "./assets/colors";

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
    padding: 10,
  },
  section: {
    alignItems: "center",
  },
  weekSquare: {
    width: 6,
    height: 6,
    margin: 1,
  },
});
// Number of Rows
const WEEKS_IN_YEAR = 65;

const ARBITRARY_CHILD_BIRTH_YEAR = 42;
const ARBITRARY_CHILD_BIRTH_WEEK = 7;
// Number of columns
const YEARS_IN_LIFE = 82;
const WEEK_CHILD_START =
  ARBITRARY_CHILD_BIRTH_YEAR * WEEKS_IN_YEAR + ARBITRARY_CHILD_BIRTH_WEEK; // Hardcoded test date
const YEARS_OF_CHILD_CARE = 21;
const WEEK_CHILD_END = YEARS_OF_CHILD_CARE * WEEKS_IN_YEAR + WEEK_CHILD_START;

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
const BIRTHDAY_EMOJI = "😀";
const myAgeInWeeks = 58 * WEEKS_IN_YEAR + 50;
const WeekSquare = (props: {
  currentYear: number;
  currentWeekInYear: number;
  hasBottomMargin: number;
}) => {
  const { currentYear, currentWeekInYear, hasBottomMargin } = props;
  const currentWeek = currentYear * WEEKS_IN_YEAR + currentWeekInYear;
  const isFilled = currentWeek < myAgeInWeeks;
  const isMultipleOfFive = (currentWeekInYear + 1) % 5 === 0;
  const isChildCareWeek =
    currentWeek > WEEK_CHILD_START && currentWeek < WEEK_CHILD_END;
  const RANDOM_WEEKS = [3725, 1500, 2487, 5555, 1987];
  const hasEmoji = RANDOM_WEEKS.includes(currentWeek);
  return (
    <EpochWrapper isShaded={isChildCareWeek}>
      {hasEmoji ? (
        <View
          style={[
            styles.weekSquare,
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: isMultipleOfFive ? SPACING : 0,
              marginBottom: hasBottomMargin ? SPACING : 0,
            },
          ]}
        >
          <Text style={{ fontSize: 5 }}>{BIRTHDAY_EMOJI}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.weekSquare,
            {
              backgroundColor: isFilled ? colors.brown : "white",
              borderColor: colors.brown,
              borderWidth: isFilled ? 0 : 1,
              marginRight: isMultipleOfFive ? SPACING : 0,
              marginBottom: hasBottomMargin ? SPACING : 0,
            },
          ]}
        />
      )}
    </EpochWrapper>
  );
};

const YearRow = (props: { currentYear: number }) => {
  const { currentYear } = props;
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
      {Array(WEEKS_IN_YEAR)
        .fill(WeekSquare)
        .map((Week, index) => (
          <Week
            currentWeekInYear={index}
            currentYear={currentYear}
            hasBottomMargin={isMultipleOfFive}
          />
        ))}
    </View>
  );
};

const LifeInWeeks = () => {
  return (
    <View>
      {Array(YEARS_IN_LIFE)
        .fill(YearRow)
        .map((Year, index) => (
          <Year currentYear={index} />
        ))}
    </View>
  );
};

// Create Document Component
const Printable = (props: { name: string }) => {
  const { name } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, { marginBottom: 30 }]}>
          <Text>LIFE IN WEEKS of {name}</Text>
        </View>
        <View style={styles.section}>
          <LifeInWeeks />
        </View>
      </Page>
    </Document>
  );
};

export default Printable;
