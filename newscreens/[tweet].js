import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { Stack, usePathname } from "expo-router";
import TweetContent from "../../components/TweetContent";
import tweets from "../../stores/data";

export default function Page() {
  const pathname = usePathname();

  const [text, setText] = useState("");
  console.log(pathname);
  const tweetId = pathname.split("/")[2];

  const tweet = tweets.find((tweet) => tweet.id == tweetId.toString());
  return (
    <>
      <Stack.Screen options={{ title: tweet.author.name }} />
      <View style={styles.container}>
        <TweetContent tweet={tweet} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              marginHorizontal: 14,
              height: 50,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "gray",
              flex: 1,
            }}
            placeholder="Reply..."
            onChangeText={setText}
            value={text}
          />
        </View>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
