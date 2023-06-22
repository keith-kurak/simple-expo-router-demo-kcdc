import loremIpsum from "lorem-ipsum-react-native";

const getSomeLoremIpsum = () => {
  const output = loremIpsum({
    count: 2, // Number of words, sentences, or paragraphs to generate.
    units: "sentences", // Generate words, sentences, or paragraphs.
    sentenceLowerBound: 4, // Minimum words per sentence.
    sentenceUpperBound: 12, // Maximum words per sentence.
    paragraphLowerBound: 1, // Minimum sentences per paragraph.
    paragraphUpperBound: 1, // Maximum sentences per paragraph.
  });
  return output;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = () => {
  const now = new Date();
  return new Date(getRandomInt(now.getTime() - 500000000, now.getTime()));
};

const getRandomName = () => {
  const names = [
    "Anne Teak",
    "Chuck Waggon",
    "Liv Long",
    "Dan Druff",
    "Farris Wheeler",
  ];

  return names[getRandomInt(0, names.length - 1)];
};

const generateTweets = () => {
  const tweetCount = 200;

  const tweets = [];

  for (let i = 0; i < tweetCount; i++) {
    tweets.push({
      author: { name: getRandomName() },
      id: i.toString(),
      fullText: getSomeLoremIpsum(),
      retweetCount: getRandomInt(1, 200),
      replyCount: getRandomInt(1, 50),
      favoriteCount: getRandomInt(1, 800),
    });
  }

  return tweets;
};

const tweets = generateTweets();

export default tweets;