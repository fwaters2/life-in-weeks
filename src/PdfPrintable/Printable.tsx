import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { colors } from "../assets/colors";
import { getEmojiData, getWeeksFromBirthday, getYearsOfLife } from "../utils";
import Row from "./components/Row";

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
});

const LifeInWeeks = (props: any) => {
  // Number of columns
  const YEARS_IN_LIFE = getYearsOfLife(
    props.formData.gender,
    props.formData.nationality
  );
  const emojiData = getEmojiData(props.formData);
  const myAgeInWeeks = getWeeksFromBirthday(dayjs(), props.formData.birthday);

  return (
    <View>
      {Array(YEARS_IN_LIFE)
        .fill(Row)
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
          <Text style={{ fontFamily: "adobe-arabic" }}>
            LIFE IN WEEKS of {formData.name || "Undisclosed"}
          </Text>
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
