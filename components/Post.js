import React from "react";
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ProfilePic from "./ProfilePic";
import { PIC_POST_URL } from "../lib/constants";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
      <ProfilePic profilePicURL={props.profilePicURL} />
      <Text style={styles.bigUsername}>{props.username}</Text>
      </View>
    <Image style={styles.picture} source={{uri: PIC_POST_URL + props.postId + "/400/400"}}/>
      <View>
        <Text style={styles.smallUsername}>
         {props.username + " "}
         <Text style={styles.postTitleAndComments}>{props.postTitle}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: "15%",
    paddingRight: "15%"
  },
  headerView: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingBottom: 5,
    alignItems: "center"
  },
  bigUsername: {
    fontSize: 24,
    fontFamily: "Arial Rounded MT Bold",
    paddingLeft: 10
  },
  smallUsername: {
    fontSize: 14,
    fontFamily: "Arial Rounded MT Bold",
  },
  picture: {
    width: 300,
    height: 300
  },
  postTitleAndComments: {
    fontSize: 12,
    fontFamily: "Arial"
  }
});
