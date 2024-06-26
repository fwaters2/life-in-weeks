import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { getEmojiData, getWeeksFromBirthday, getYearsOfLife } from "../utils";
import Row from "./components/Row";
// import PalatinoFont from "./Palatino.ttf";
// const newPalatinoFontUrl = new URL("./Palatino.ttf", import.meta.url).href;

// const FONT_FAMILY = "Palatino";

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
// Font.register({
//   family: "Palatino",
//   src:new URL("./Palatino.ttf", import.meta.url).href,
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  section: {
    alignItems: "center",
  },
  title: {
    // fontFamily: FONT_FAMILY,
  },
  subtitle: {
    // fontFamily: FONT_FAMILY,
    fontSize: 10,
    marginTop: 2,
  },
  labelYear: {
    fontSize: 10,
    // fontFamily: FONT_FAMILY,
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
        .map((Year, index) => {
          if (index < 15) {
            return;
          }
          return (
            <Year
              key={index}
              styles={styles}
              currentYear={index}
              {...props}
              myAgeInWeeks={myAgeInWeeks}
              emojiData={emojiData}
            />
          );
        })}
    </View>
  );
};

// Create Document Component
const Printable = (props: any) => {
  const { formData } = props;
  const YEARS_IN_LIFE = getYearsOfLife(formData.gender, formData.nationality);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.section, { marginBottom: 5 }]}>
          <Text style={styles.title}>
            LIFE IN WEEKS of {formData.name.toUpperCase() || "Undisclosed"}
          </Text>
          <Text style={styles.subtitle}>Ages 15-{YEARS_IN_LIFE}</Text>
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
