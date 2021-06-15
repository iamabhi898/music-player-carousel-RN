import React, { useEffect } from "react";
import { Text, View, Image, Animated, Platform } from "react-native";

const Frontdrop = ({
  songs,
  item_size,
  scrollX,
  empty_item_size,
  spacing,
  slider,
}) => {
  return (
    <Animated.FlatList
      ref={slider}
      showsHorizontalScrollIndicator={false}
      data={songs}
      keyExtractor={(item) => item.key}
      horizontal
      bounces={false}
      decelerationRate={Platform.OS === "ios" ? 0 : 0}
      renderToHardwareTextureAndroid
      contentContainerStyle={{ alignItems: "center" }}
      snapToInterval={item_size}
      // pagingEnabled
      snapToAlignment="start"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={30}
      renderItem={({ item, index }) => {
        if (!item.poster) {
          return <View style={{ width: empty_item_size }} />;
        }

        const inputRange = [
          (index - 2) * item_size,
          (index - 1) * item_size,
          index * item_size,
        ];

        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [100, 50, 100],
          extrapolate: "clamp",
        });

        return (
          <View style={{ width: item_size }}>
            <Animated.View
              style={{
                marginHorizontal: spacing,
                padding: spacing * 1.5,
                alignItems: "center",
                transform: [{ translateY }],
                backgroundColor: "white",
                borderRadius: 34,
              }}
            >
              <Image
                source={item.poster}
                style={{
                  width: "100%",
                  height: item_size * 0.9,
                  resizeMode: "cover",
                  borderRadius: 24,
                  margin: 0,
                  marginBottom: 10,
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold" }}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: "grey" }} numberOfLines={1}>
                  {item.artist}
                </Text>
              </View>
            </Animated.View>
          </View>
        );
      }}
    />
  );
};

export default Frontdrop;
