import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

import { getSongs } from "../api";

const MusicPlayer = ({ onNext, onPrev, songIndex }) => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const songs = getSongs;
  const [playbackPosition, setPlaybackPosition] = React.useState(0);
  const [playbackDuration, setPlaybackDuration] = React.useState(0);

  // calculate slider position
  const calculateSliderPos = () => {
    if (playbackPosition && playbackDuration) {
      return playbackPosition / playbackDuration;
    }
  };

  // on slider user value change
  const onSliderSetPosition = (value) => {
    const sliderPos = value * playbackDuration;
    sound.setPositionAsync(sliderPos);
    // console.log(sliderPos);
  };

  // playback Status for slider
  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      setPlaybackPosition(playbackStatus.positionMillis);
      setPlaybackDuration(playbackStatus.durationMillis);
    }
  };

  async function playSound(songInd) {
    // console.log("Loading Sound");
    const { sound, status } = await Audio.Sound.createAsync(
      songs[songInd].songPath
    );
    setSound(sound);

    // console.log("Playing Sound");
    setIsPlaying(true);
    await sound.playAsync();
    sound.setIsLoopingAsync(true);

    // playback Status for slider
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  }

  const pauseSound = () => {
    // console.log("Paused Sound");
    setIsPlaying(false);
    sound.pauseAsync();
  };

  const resumeSound = () => {
    // console.log("Resumed Sound");
    setIsPlaying(true);
    sound.playAsync();
  };

  React.useEffect(() => {
    if (sound) {
      playSound(songIndex);
    }
  }, [songIndex]);

  React.useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : () => {};
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={calculateSliderPos()}
          onValueChange={onSliderSetPosition}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#888"
          thumbTintColor="#000"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onPrev}>
          <MaterialIcons name="skip-previous" size={45} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!sound) {
              playSound(songIndex);
            } else if (isPlaying) {
              pauseSound();
            } else if (!isPlaying) {
              resumeSound();
            }
          }}
        >
          <MaterialIcons name={isPlaying ? "pause" : "play-arrow"} size={45} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <MaterialIcons name="skip-next" size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  sliderContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  slider: { width: "115%", height: 30 },
  buttonsContainer: {
    flexDirection: "row",
    width: "110%",
    justifyContent: "space-between",
  },
});

export default MusicPlayer;
