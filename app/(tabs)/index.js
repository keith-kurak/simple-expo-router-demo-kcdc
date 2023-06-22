import { View, Pressable } from "react-native";
import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import tweets from "../../stores/data";
import TweetContent from "../../components/TweetContent";

function ListItem({ item }) {
  return (
    <Link asChild href={`/tweets/${item.id}`}>
      <Pressable>
        <TweetContent tweet={item} />
      </Pressable>
    </Link>
  );
}

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs.Screen
        options={{
          title: "Bird Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={20} name="chatbox-outline" />
          ),
        }}
      />
      <FlashList renderItem={ListItem} estimatedItemSize={100} data={tweets} />
    </View>
  );
}
