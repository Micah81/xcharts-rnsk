import React, { Component } from 'react';
//import firebase from 'react-native-firebase';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import moment from 'moment';

export default class VotingButtons extends Component {
  state = { currentUser: null }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
      }}>
          <Button
            title='Up'
            color='lightgreen'
            onPress={() => recordUpVote(currentUser, this.props.instrument)}
          />

          <Button
            title='Down'
            color='#dc143c'
            onPress={() => recordDownVote(currentUser, this.props.instrument)}
          />

          <Button
            title='Sideways'
            color='#483d8b'
            onPress={() => recordSidewaysVote(currentUser, this.props.instrument)}
          />

          <Button
            title='Unsure'
            color='#00ced1'
            onPress={() => recordUnsureVote(currentUser, this.props.instrument)}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
});
/////////////// EXAMPLE CODE ///////////////////////////////
export function getFavourites(dispatch) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const ref = FirebaseRef.child(`favourites/${UID}`);

  return ref.on('value', (snapshot) => {
    const favs = snapshot.val() || [];

    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: favs,
    });
  });
}
////////////////////////////////////////////////////////////////

function recordUpVote(user, instr){
  if (Firebase === null) return () => new Promise(resolve => resolve());
  var today = moment().format('MMDDYYYY');

  // Find out if user already voted on this chart on this day
  var rootRef = firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
  rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
      console.log(snapshot.val());

      if(snapshot.val()==null){
        // Record the vote
        firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
          user: user.uid
            }).then(()=>{
             firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
               instrument: instr,
               vote: 'up'
             }).then(()=>{
               firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
                 return upVotes + 1
               });
             });
        });
      }

      snapshot.forEach(function(data) {
          if(data.key==null){

            // Record the vote
            firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
              user: user.uid
                }).then(()=>{
                 firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                   instrument: instr,
                   vote: 'up'
                 }).then(()=>{
                   firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
                     return upVotes + 1
                   });
                 });
            });
          } else {
            console.log("This user already voted on this instrument on this day. Change chart state.")
          }
      });
  });

} // end recordUpVote

function recordDownVote(user, instr){
  var today = moment().format('MMDDYYYY');

  // Find out if user already voted on this chart on this day
  var rootRef = firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
  rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
      console.log(snapshot.val());

      if(snapshot.val()==null){
        // Record the vote
        firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
          user: user.uid
            }).then(()=>{
             firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
               instrument: instr,
               vote: 'down'
             }).then(()=>{
               firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
                 return downVotes + 1
               });
             });
        });
      }

      snapshot.forEach(function(data) {
          if(data.key==null){

            // Record the vote
            firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
              user: user.uid
                }).then(()=>{
                 firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                   instrument: instr,
                   vote: 'down'
                 }).then(()=>{
                   firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
                     return downVotes + 1
                   });
                 });
            });
          } else {
            console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
          }
      });
  });

} // end recordUpVote

function recordSidewaysVote(user, instr){
  var today = moment().format('MMDDYYYY');

  // Find out if user already voted on this chart on this day
  var rootRef = firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
  rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
      console.log(snapshot.val());

      if(snapshot.val()==null){
        // Record the vote
        firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
          user: user.uid
            }).then(()=>{
             firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
               instrument: instr,
               vote: 'sideways'
             }).then(()=>{
               firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
                 return sidewaysVotes + 1
               });
             });
        });
      }

      snapshot.forEach(function(data) {
          if(data.key==null){

            // Record the vote
            firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
              user: user.uid
                }).then(()=>{
                 firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                   instrument: instr,
                   vote: 'sideways'
                 }).then(()=>{
                   firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
                     return sidewaysVotes + 1
                   });
                 });
            });
          } else {
            console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
          }
      });
  });

} // end recordUpVote

function recordUnsureVote(user, instr){
  var today = moment().format('MMDDYYYY');

  // Find out if user already voted on this chart on this day
  var rootRef = firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
  rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
      console.log(snapshot.val());

      if(snapshot.val()==null){
        // Record the vote
        firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
          user: user.uid
            }).then(()=>{
             firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
               instrument: instr,
               vote: 'unsure'
             }).then(()=>{
               firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
                 return unsureVotes + 1
               });
             });
        });
      }

      snapshot.forEach(function(data) {
          if(data.key==null){

            // Record the vote
            firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
              user: user.uid
                }).then(()=>{
                 firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                   instrument: instr,
                   vote: 'unsure'
                 }).then(()=>{
                   firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
                     return unsureVotes + 1
                   });
                 });
            });
          } else {
            console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
          }
      });
  });

} // end recordUpVote


//Simple query
//firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').on('value', function(snapshot) {});

/*
yourFunction(){
 Actions.ideaOnClick();
 this.setState({views: ++this.state.views});
 1. recordVote
 2.
}

<Button onPress={this.yourFunction.bind(this)}}>
*/

//export default VotingButtons;
