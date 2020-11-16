import { firestore } from '../../firebase';

let contents

firestore.collection("jobs").get().then(function(querySnapshot) {
  contents = JSON.stringify(querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      data: doc.data()
    };
  }))
});

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
