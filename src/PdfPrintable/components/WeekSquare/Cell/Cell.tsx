import { View, StyleSheet } from "@react-pdf/renderer";

interface CellProps {
  isFilled: boolean;
  isMultiple: boolean;
  hasBottomMargin: boolean;
}

const SPACING = 2;
const Cell = (props: CellProps) => {
  const { isFilled, isMultiple, hasBottomMargin } = props;
  const filledColor = "#666666"; //colors.brown
  return (
    <View
      style={[
        styles.weekSquare,
        {
          backgroundColor: isFilled ? filledColor : "transparent",
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

export default Cell;

const styles = StyleSheet.create({
  weekSquare: {
    width: 8,
    height: 8,
    margin: 1,
  },
});
