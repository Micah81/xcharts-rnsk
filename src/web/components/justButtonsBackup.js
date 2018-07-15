

  <Button color="primary">Up</Button>{
    onPress={() => recordUpVote(currentUser, this.props.instrument)}
  }


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
</ButtonGroup>



  function recordUpVote(user, instr){
    if (Firebase === null) return () => new Promise(resolve => resolve());
    var today = moment().format('MMDDYYYY');

    // Find out if user already voted on this chart on this day
    var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
    rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
        console.log(snapshot.val());

        if(snapshot.val()==null){
          // Record the vote
          Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
            user: user.uid
              }).then(()=>{
               Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                 instrument: instr,
                 vote: 'up'
               }).then(()=>{
                 Firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
                   return upVotes + 1
                 });
               });
          });
        }

        snapshot.forEach(function(data) {
            if(data.key==null){

              // Record the vote
              Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
                user: user.uid
                  }).then(()=>{
                   Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                     instrument: instr,
                     vote: 'up'
                   }).then(()=>{
                     Firebase.database().ref('/votes/' +today+ '/' +instr+ '/upVotes').transaction(function(upVotes) {
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
    var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
    rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
        console.log(snapshot.val());

        if(snapshot.val()==null){
          // Record the vote
          Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
            user: user.uid
              }).then(()=>{
               Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                 instrument: instr,
                 vote: 'down'
               }).then(()=>{
                 Firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
                   return downVotes + 1
                 });
               });
          });
        }

        snapshot.forEach(function(data) {
            if(data.key==null){

              // Record the vote
              Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
                user: user.uid
                  }).then(()=>{
                   Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                     instrument: instr,
                     vote: 'down'
                   }).then(()=>{
                     Firebase.database().ref('/votes/' +today+ '/' +instr+ '/downVotes').transaction(function(downVotes) {
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
    var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
    rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
        console.log(snapshot.val());

        if(snapshot.val()==null){
          // Record the vote
          Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
            user: user.uid
              }).then(()=>{
               Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                 instrument: instr,
                 vote: 'sideways'
               }).then(()=>{
                 Firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
                   return sidewaysVotes + 1
                 });
               });
          });
        }

        snapshot.forEach(function(data) {
            if(data.key==null){

              // Record the vote
              Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
                user: user.uid
                  }).then(()=>{
                   Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                     instrument: instr,
                     vote: 'sideways'
                   }).then(()=>{
                     Firebase.database().ref('/votes/' +today+ '/' +instr+ '/sidewaysVotes').transaction(function(sidewaysVotes) {
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
    var rootRef = Firebase.database().ref('/votes/' +today+ '/' +instr+ '/');
    rootRef.child('voters').orderByChild('user').equalTo(user.uid).on("value", function(snapshot) {
        console.log(snapshot.val());

        if(snapshot.val()==null){
          // Record the vote
          Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
            user: user.uid
              }).then(()=>{
               Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                 instrument: instr,
                 vote: 'unsure'
               }).then(()=>{
                 Firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
                   return unsureVotes + 1
                 });
               });
          });
        }

        snapshot.forEach(function(data) {
            if(data.key==null){

              // Record the vote
              Firebase.database().ref('/votes/' +today+ '/' +instr+ '/voters/').push({
                user: user.uid
                  }).then(()=>{
                   Firebase.database().ref('/users/'+user.uid+ '/votes/' + today+ '/').push({
                     instrument: instr,
                     vote: 'unsure'
                   }).then(()=>{
                     Firebase.database().ref('/votes/' +today+ '/' +instr+ '/unsureVotes').transaction(function(unsureVotes) {
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
