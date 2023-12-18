import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, Link } from "expo-router";
import * as Speech from "expo-speech";

function getRandomComplement() {
  const complements = [
    "I'm rating this talk an eleven out of ten!",
    "I love his hair!",
    "Best. Demo. Ever.",
    "He's an awesome programmer!",
  ];

  const insults = [
    "Get this guy off the stage!",
    "Booooo!!!!",
    "This presentation would have been a lot better if the speaker didn't waste so much time playing Tears of the Kingdom.",
    "His hair and this talk make me blue!",
  ];

  if (Platform.OS === "ios") {
    return insults[Math.floor(Math.random() * complements.length)];
  }

  return complements[Math.floor(Math.random() * complements.length)];
}

export default function Page() {
  const [complement, setComplement] = useState("");

  const sayComplement = useCallback(() => {
    const newComplement = getRandomComplement();
    setComplement(newComplement);
    Speech.speak(newComplement);
  }, []);

  /*return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Talk to me",
          tabBarIcon: ({ color }) => (
            <Ionicons
              color={color}
              size={20}
              name="chatbubble-ellipses-outline"
            />
          ),
        }}
      />
      <Text>Coming soon...</Text>
    </View>
  );*/

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Talk to me",
          tabBarIcon: ({ color }) => (
            <Ionicons
              color={color}
              size={20}
              name="chatbubble-ellipses-outline"
            />
          ),
        }}
      />
      <View style={styles.main}>
        <TouchableOpacity onPress={sayComplement}>
          <View
            style={{
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "blue",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              {Platform.OS === "ios"
                ? '"Complement" the speaker'
                : "Complement the speaker"}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 16 }}>
          <Text
            style={{ fontSize: 12, textAlign: "center", fontStyle: "italic" }}
          >
            {complement}
          </Text>
        </View>
        <Link href="3">Go to tab 3</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
