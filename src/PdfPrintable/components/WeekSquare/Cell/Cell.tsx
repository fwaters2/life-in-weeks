import { View, StyleSheet } from "@react-pdf/renderer";

interface CellProps {
  isFilled: boolean;
  isMultiple: boolean;
  hasBottomMargin: boolean;
}

const SPACING = 2;
const Cell = (props: CellProps) => {
  const { isMultiple, hasBottomMargin } = props;
  // const filledColor = "blue"; //colors.brown; // "#666666";
  return (
    <>
      <View
        style={[
          styles.weekSquare,
          {
            position: "relative",
            marginRight: isMultiple ? SPACING : 0,
            marginBottom: hasBottomMargin ? SPACING : 0,
          },
        ]}
      />
      {/* <View
        style={{
          width: 8,
          height: 8,
          margin: 1,
          position: "absolute",
          zIndex: 1,
          backgroundColor: isFilled ? filledColor : "transparent",
          borderColor: filledColor,
          borderRadius: 3,
          borderWidth: isFilled ? 0 : 1,
          marginRight: isMultiple ? SPACING : 0,
          marginBottom: hasBottomMargin ? SPACING : 0,
        }}
      /> */}
    </>
  );
};

export default Cell;

const styles = StyleSheet.create({
  weekSquare: {
    width: 8,
    height: 8,
    margin: 1,
  },
});
