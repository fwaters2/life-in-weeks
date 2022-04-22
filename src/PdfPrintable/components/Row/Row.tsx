import { Text, View } from "@react-pdf/renderer";
import WeekSquare from "../WeekSquare";
import { isIndexMultipleOfN } from "../../utils";

const Row = (props: any) => {
  const { currentYear } = props;
  const WEEKS_BLOCKS_IN_ROW = 52;
  const YEARS_PER_BLOCK = 5;

  const hasLabel = currentYear % YEARS_PER_BLOCK === 0;

  const hasBottomMargin = isIndexMultipleOfN(currentYear, YEARS_PER_BLOCK);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {hasLabel && (
        <View style={{ left: -15, top: 1, position: "absolute" }}>
          <Text style={{ fontSize: 10, fontFamily: "Palatino" }}>
            {currentYear}
          </Text>
        </View>
      )}
      {Array(WEEKS_BLOCKS_IN_ROW)
        .fill(WeekSquare)
        .map((Week, index) => {
          return (
            <Week
              key={index}
              currentWeekInYear={index}
              hasBottomMargin={hasBottomMargin}
              {...props}
            />
          );
        })}
    </View>
  );
};

export default Row;
