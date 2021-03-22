import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar, Divider } from "react-native-paper";
import ChatListItem from "./ChatListItem.js";
import person from "./PersonData.js";
import icon from "./AppbarIcon.js";
const Whatsapp = () => {
  return (
    <>
      <Appbar.Header style={styles.AppbarHeaderStyle}>
        <Appbar.Content title="Whatsapp" />
        {icon.map((icon, index) => {
          return <Appbar.Action key={index} icon={icon.icon} />;
        })}
      </Appbar.Header>

      {person.map((person, index) => {
        return (
          <>
            <ChatListItem
              key={index}
              title={person.title}
              description={person.description}
              imageSrc={person.imageSrc}
              time={person.time}
            />
            <Divider />
          </>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  AppbarHeaderStyle: {
    backgroundColor: "green",
  },
});

export default Whatsapp;
