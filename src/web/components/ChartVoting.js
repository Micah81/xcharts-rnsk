import React, { Component } from 'react';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { Button, ButtonGroup } from 'reactstrap';
import moment from 'moment';

class VotingButtons extends Component  {
  constructor (props) {
    super(props);

    this.state = {
      cSelected: []
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
        <div>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Up</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Down</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Sideways</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Unsure</Button>
          </ButtonGroup>
          <p>Selected: {this.state.rSelected}</p>
        </div>
    );
  }
}

export default VotingButtons;



//
// //-----------------------------------------------------------
//
// <Button color="primary">Up</Button>{
//     onPress={() => recordUpVote(currentUser, this.props.instrument)}
//   }
//
//
//   <Button
//     title='Down'
//     color='#dc143c'
//     onPress={() => recordDownVote(currentUser, this.props.instrument)}
//   />
//
//   <Button
//     title='Sideways'
//     color='#483d8b'
//     onPress={() => recordSidewaysVote(currentUser, this.props.instrument)}
//   />
//
//   <Button
//     title='Unsure'
//     color='#00ced1'
//     onPress={() => recordUnsureVote(currentUser, this.props.instrument)}
//   />
// </ButtonGroup>
//
//
//
//   function recordUpVote(user, instr){
//     if (Firebase === null) return () => new Promise(resolve => resolve());
//     var today = moment().format('MMDDYYYY');
//
//     // Find out if user already voted on this chart on this day
//     var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
//     rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
//         console.log(snapshot.val());
//
//         if(snapshot.val()==null){
//           // Record the vote
//           Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//             user: user.uid
//               }).then(()=>{
//                Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                  instrument: instr,
//                  vote: 'up'
//                }).then(()=>{
//                  Firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
//                    return upVotes + 1
//                  });
//                });
//           });
//         }
//
//         snapshot.forEach(function(data) {
//             if(data.key==null){
//
//               // Record the vote
//               Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//                 user: user.uid
//                   }).then(()=>{
//                    Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                      instrument: instr,
//                      vote: 'up'
//                    }).then(()=>{
//                      Firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
//                        return upVotes + 1
//                      });
//                    });
//               });
//             } else {
//               console.log("This user already voted on this instrument on this day. Change chart state.")
//             }
//         });
//     });
//
//   } // end recordUpVote
//
//   function recordDownVote(user, instr){
//     var today = moment().format('MMDDYYYY');
//
//     // Find out if user already voted on this chart on this day
//     var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
//     rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
//         console.log(snapshot.val());
//
//         if(snapshot.val()==null){
//           // Record the vote
//           Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//             user: user.uid
//               }).then(()=>{
//                Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                  instrument: instr,
//                  vote: 'down'
//                }).then(()=>{
//                  Firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
//                    return downVotes + 1
//                  });
//                });
//           });
//         }
//
//         snapshot.forEach(function(data) {
//             if(data.key==null){
//
//               // Record the vote
//               Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//                 user: user.uid
//                   }).then(()=>{
//                    Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                      instrument: instr,
//                      vote: 'down'
//                    }).then(()=>{
//                      Firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
//                        return downVotes + 1
//                      });
//                    });
//               });
//             } else {
//               console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
//             }
//         });
//     });
//
//   } // end recordUpVote
//
//   function recordSidewaysVote(user, instr){
//     var today = moment().format('MMDDYYYY');
//
//     // Find out if user already voted on this chart on this day
//     var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
//     rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
//         console.log(snapshot.val());
//
//         if(snapshot.val()==null){
//           // Record the vote
//           Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//             user: user.uid
//               }).then(()=>{
//                Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                  instrument: instr,
//                  vote: 'sideways'
//                }).then(()=>{
//                  Firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
//                    return sidewaysVotes + 1
//                  });
//                });
//           });
//         }
//
//         snapshot.forEach(function(data) {
//             if(data.key==null){
//
//               // Record the vote
//               Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//                 user: user.uid
//                   }).then(()=>{
//                    Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                      instrument: instr,
//                      vote: 'sideways'
//                    }).then(()=>{
//                      Firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
//                        return sidewaysVotes + 1
//                      });
//                    });
//               });
//             } else {
//               console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
//             }
//         });
//     });
//
//   } // end recordUpVote
//
//   function recordUnsureVote(user, instr){
//     var today = moment().format('MMDDYYYY');
//
//     // Find out if user already voted on this chart on this day
//     var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
//     rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
//         console.log(snapshot.val());
//
//         if(snapshot.val()==null){
//           // Record the vote
//           Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//             user: user.uid
//               }).then(()=>{
//                Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                  instrument: instr,
//                  vote: 'unsure'
//                }).then(()=>{
//                  Firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
//                    return unsureVotes + 1
//                  });
//                });
//           });
//         }
//
//         snapshot.forEach(function(data) {
//             if(data.key==null){
//
//               // Record the vote
//               Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
//                 user: user.uid
//                   }).then(()=>{
//                    Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
//                      instrument: instr,
//                      vote: 'unsure'
//                    }).then(()=>{
//                      Firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
//                        return unsureVotes + 1
//                      });
//                    });
//               });
//             } else {
//               console.log("This user already voted on this instrument on this day. A new chart should be shown and set as state.")
//             }
//         });
//     });
//
//   } // end recordUpVote
