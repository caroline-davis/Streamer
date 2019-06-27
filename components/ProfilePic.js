import React from "react";
import { StyleSheet, Image, View } from "react-native";


export default function ProfilePic(props) {
  return (
  <Image style={styles.container} source={{uri: props.profilePicURL}}/>
);
}


const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: "silver"
  }
});
