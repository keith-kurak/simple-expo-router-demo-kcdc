import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { Tabs } from "expo-router";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

const ROWS = 23;
const COLS = 12;

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
function Bubble({ row, col, reverse }) {
  const backgroundColor = React.useRef(getRandomColor()).current;

  const width = useSharedValue(0);

  React.useEffect(() => {
    if (reverse) {
      const delay = 400 + Math.random() * row * 10 + Math.random() * 2500;
      width.value = withDelay(delay, withSpring(0, { damping: 1e6 }));
    } else {
      const delay = 400 + Math.random() * row * 10 + Math.random() * 10000;
      width.value = withDelay(delay, withSpring(40, { damping: 1e6 }));
    }
  }, [width, row, col, reverse]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: width.value,
      borderRadius: width.value / 2,
    };
  }, []);

  return <Animated.View style={[{ backgroundColor }, animatedStyle]} />;
}

function BubbleRow({ row, reverse }) {
  return (
    <View style={[styles.row, { paddingLeft: 40 * (row % 2) }]}>
      {[...Array(COLS)].map((_, col) => (
        <Bubble row={row} col={col} key={col} reverse={reverse} />
      ))}
    </View>
  );
}

export default function BubblesExample() {
  const [reverse, setReverse] = React.useState(false);
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Animate Me",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={20} name="bicycle" />
          ),
        }}
      />
      {[...Array(ROWS)].map((_, row) => (
        <BubbleRow row={row} key={row} reverse={reverse} />
      ))}
      <View style={{ position: "absolute", bottom: 0, right: 0 }}>
        <Pressable onPress={() => setReverse(!reverse)}>
          <View
            style={{
              padding: 10,
              margin: 10,
              borderRadius: 5,
              backgroundColor: "white",
            }}
          >
            <Text>{reverse ? "materialize" : "dematerialize"}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -5,
  },
});
