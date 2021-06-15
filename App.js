import * as React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { getSongs } from "./api";

import Backdrop from "./components/Backdrop";
import Frontdrop from "./components/Frontdrop";
import MusicPlayer from "./components/MusicPlayer";

const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.75;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text>Loading...</Text>
  </View>
);

export default function App() {
  const [songs, setSongs] = React.useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = React.useState(0);

  const slider = React.useRef(null);

  // button scroll - previous / next

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * ITEM_SIZE,
    });
  };

  const goPrev = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * ITEM_SIZE,
    });
  };

  // scroll select index

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / ITEM_SIZE);
      setSongIndex(index);
    });
  }, [scrollX, songIndex]);

  React.useEffect(() => {
    const tempSongs = getSongs;
    setSongs([{ key: "empty-left" }, ...tempSongs, { key: "empty-right" }]);
  }, []);

  if (songs.length === 0) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Backdrop
        songs={songs}
        scrollX={scrollX}
        width={width}
        height={height}
        backdrop_height={BACKDROP_HEIGHT}
        item_size={ITEM_SIZE}
      />
      <StatusBar auto />
      <Frontdrop
        songs={songs}
        item_size={ITEM_SIZE}
        empty_item_size={EMPTY_ITEM_SIZE}
        scrollX={scrollX}
        spacing={SPACING}
        slider={slider}
      />

      <View style={styles.musicPlayer}>
        <MusicPlayer onNext={goNext} onPrev={goPrev} songIndex={songIndex} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  musicPlayer: {
    position: "absolute",
    bottom: "8%",
    width: ITEM_SIZE * 0.8,
  },
});
