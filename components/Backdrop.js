import React from "react";
import { View, FlatList, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Backdrop = ({
  songs,
  scrollX,
  width,
  height,
  backdrop_height,
  item_size,
}) => {
  return (
    <View
      style={{
        height: backdrop_height,
        width: width,
        position: "absolute",
      }}
    >
      <FlatList
        data={songs}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{
          width: width,
          height: backdrop_height,
        }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * item_size, (index - 1) * item_size],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                width: translateX,
                height: height,
                overflow: "hidden",
              }}
            >
              <Image
                source={item.backdrop}
                style={{
                  width: width,
                  height: backdrop_height,
                  position: "absolute",
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={{
          height: backdrop_height,
          width: width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
};

export default Backdrop;
