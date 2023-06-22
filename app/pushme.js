import { StyleSheet, Text, View } from "react-native";
import { Stack, Link } from "expo-router";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: "Nice Screen Title" }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Pushed me onto the stack</Text>
          <Link href="pushme2">Push another screen</Link>
        </View>
      </View>
    </>
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
