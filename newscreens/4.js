import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Cool Stuff",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={20} name="sunny-outline" />
          ),
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Three great things about Expo Router</Text>
        <Text style={styles.subtitle}>1. URL's everywhere</Text>
        <Text style={styles.subtitle}>2. Metro for Web+</Text>
        <Text style={styles.subtitle}>3. Based on React Nav</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://github.com/expo/simple-expo-router-demo-kcdc"
            )
          }
        >
          <Text style={styles.link}>Open this demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://docs.google.com/forms/d/e/1FAIpQLSdBNm6-8w7Z8jGnJ7HwGDmMxy6wLF7ROB38o2mgAHvtSjGwfg/viewform"
            )
          }
        >
          <Text style={styles.link}>Rate this presentation, maybe win a Switch!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              Platform.OS === 'ios' ? "https://apps.apple.com/us/app/just-some-kana/id1671606312" : "https://play.google.com/store/apps/details?id=com.keithkurak.justkana"
            )
          }
        >
          <Text style={styles.link}>Download my app, use it in a demo later</Text>
        </TouchableOpacity>
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
    fontSize: 42,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 8,
    color: "blue",
  }
});
