import { StyleSheet, View, Image, Text, } from "react-native";
import Thumbnail from './Thumbnail';

const tweetActions = (
  retweets,
  comments,
  likes
) => {
  return (
    <View style={[styles.rowActions, styles.actionBar]}>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require("../assets/comment.png")}
        />
        <Text style={styles.actionText}>{comments}</Text>
      </View>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require("../assets/retweet.png")}
        />
        <Text style={styles.actionText}>{retweets}</Text>
      </View>
      <View style={styles.elemAction}>
        <Image
          style={styles.actionButton}
          source={require("../assets/like.png")}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </View>
      <Image style={styles.actionButton} source={require("../assets/share.png")} />
    </View>
  );
};

const avatar = (author) => {
  return <Thumbnail diameter={30} name={author.name} />;
};

const GrayText = ({ children, numberOfLines, style }) => {
  return (
    <Text style={[style, styles.gray]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const TweetCell= ({ tweet }) => {
  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        {avatar(tweet.author)}
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text numberOfLines={1} style={styles.header}>
              {tweet.author.name}
            </Text>
            <GrayText>·</GrayText>
            <GrayText>2h</GrayText>
          </View>
          <Text style={styles.description}>{tweet.fullText}</Text>
          <View style={styles.rowActions}>
            {tweetActions(
              tweet.retweetCount,
              tweet.replyCount,
              tweet.favoriteCount
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 8,
    justifyContent: "space-between",
    marginRight: 16,
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  gray: {
    color: "#777",
    fontSize: 13,
    paddingRight: 2,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 16,
    flexShrink: 0,
    marginTop: 4,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
    paddingRight: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    padding: 16,
    backgroundColor: "#FFF",
  },
  rowTop: {
    flexDirection: "row",
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  elemAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionText: {
    fontSize: 12,
    color: "#444",
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});

export default TweetCell;