import React from "react";
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ProfilePic from "./ProfilePic";
import Comments from "./Comments";
import { PIC_POST_URL } from "../lib/constants";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
      <ProfilePic />
      <Text style={styles.bigUsername}> fakename {props.username}</Text>
      </View>
    <Image style={styles.picture} source={{uri: PIC_POST_URL + props.postId + "/400/400"}}/>
      <View>
        <Text style={styles.smallUsername}>
         username {props.username}
         <Text style={styles.postTitleAndComments}>{props.postTitle}</Text>
        </Text>

      <Text style={styles.postTitleAndComments}> comments {props.comments} </Text>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    // flex: 1,
    paddingLeft: "15%",
    paddingRight: "15%"
    //alignItems: "center",
    //justifyContent: "center",

  },
  headerView: {
    flexDirection: "row",
    paddingLeft: 10
  },
  bigUsername: {
    fontSize: 24,
    fontFamily: "Arial Rounded MT Bold"
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
