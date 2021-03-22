import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { List, Avatar } from "react-native-paper";

const ChatListItem = ({ title, description, imageSrc, time }) => {
  return (
    <>
      <List.Item
        title={title}
        description={description}
        left={(props) => <Avatar.Image {...props} source={imageSrc} />}
        right={(props) => (
          <Text {...props} style={styles.timeTextStyle}>
            {time}
          </Text>
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  timeTextStyle: {
    color: "black",
    marginTop: 16,
  },
});
export default ChatListItem;
