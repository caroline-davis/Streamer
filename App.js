import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { BLUE_COLOR, WHITE_COLOR, API_URL, PIC_POST_URL } from "./lib/constants";
import Post from "./components/Post";

export default class App extends React.Component {
  state = {
    posts: [ ],
    users: [ ],
    pics: [ ]
  }

  componentDidMount() {
    this.load()
  }

load = async() => {
  await this.loadUsers();
  await this.loadPics();
  await this.loadPosts();
}

loadUsers = async() => {
  const response = await fetch(API_URL+"users");
  const users = await response.json();
  this.setState({ users });

}

loadPosts = async() => {
  const response = await fetch(API_URL+"posts");
  const posts = await response.json();
  this.setState( { posts });
}
 loadPics = async() => {
   const response = await fetch(API_URL+"photos");
   const pics = await response.json();
   this.setState({ pics });
 }



  render() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Streamer</Text>
      </View>
      <ScrollView>
      {this.state.posts.map(post => {

        const user = this.state.users.find(user => (user.id === post.userId));

        const userPic = this.state.pics.find(pic => (pic.id === user.id));

        return (
         <Post key={post.id} postTitle={post.title} postId={post.id} username={user.username} profilePicURL={userPic.url}></Post>
        )
      })}
      </ScrollView>
      <View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header : {
    paddingTop: 20,
    backgroundColor: BLUE_COLOR,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 36,
    fontFamily: "Arial Rounded MT Bold",
    color: WHITE_COLOR
  }
});
