import React from "react";
import { StyleSheet, View, Text } from "react-native";
/**
 * One of those fancy circular thumbnails that appears with the
 * user's initials when they don't have an actual avatar.
 */
const Thumbnail = ({ diameter, name }) => {
  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ];
  // change the colors based on running their name through
  // some math
  const charIndex = name.charCodeAt(0) - 65;
  const colorIndex = charIndex % 19;
  return (
    <MaterialInitialsInner
      size={diameter}
      color="white"
      backgroundColor={colors[colorIndex]}
      single={false}
      text={name}
      style={{ marginRight: 7 }}
    />
  );
};

const MaterialInitialsInner = ({
  text,
  size,
  color,
  backgroundColor,
  single,
  style,
}) => {
  const getFontSize = () => {
    return single ? size / 1.7 : (size - 5) / 2;
  };

  const getInitials = () => {
    if (text === "") {
      return text;
    } else {
      let symbols = text.trim();
      let indexOfSpace = symbols.indexOf(" ");
      if (indexOfSpace > 0 && indexOfSpace < symbols.length && !single) {
        return (symbols[0] + symbols[indexOfSpace + 1]).toUpperCase();
      } else {
        return symbols[0].toUpperCase();
      }
    }
  };

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <View
        style={[
          styles.icon,
          {
            backgroundColor: backgroundColor,
            height: size,
            width: size,
            borderRadius: size / 2,
          },
          style,
        ]}
      >
        <Text
          allowFontScaling={false}
          style={[
            styles.text,
            {
              fontSize: getFontSize(),
              color: color,
              backgroundColor: "transparent",
            },
          ]}
        >
          {getInitials()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
  },
});

export default Thumbnail;
