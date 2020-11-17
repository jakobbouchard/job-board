import { firestore } from '../../firebase';

export function get(req, res, next) {
  // the `id` parameter is available because
  // this file is called [id].json.js
  const { id } = req.params;

  firestore.collection("jobs").doc(id)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        let id = doc.id;
        let data = doc.data();

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({ id, data }));

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

        res.writeHead(404, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
          message: `Emploi inexistant`
        }));
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}
