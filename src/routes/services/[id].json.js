import { firestore } from '../../firebase';

export function get(req, res, next) {
  // the `id` parameter is available because
  // this file is called [id].json.js
  const { id } = req.params;

  // Eventually, we would've created a services collection which would've been
  // similar to the jobs collection

  // Gets the document from the "jobs" collection if Firestore, which has the id
  // of the URL (e.g. /services/IZxeAfXU6avqyfwM7XaW )
  firestore.collection("jobs").doc(id)
    .get()
    .then(function(doc) {
      // If the document exists, puts the data in a JSON format and outputs it
      // using a status code of 200.
      if (doc.exists) {
        console.log("Document data:", doc.data());
        let id = doc.id;
        let data = doc.data();

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({ id, data }));

      } else {
        // Outputs a JSON with the message parameter for the _error.svelte page,
        // using a 404 status code
        // doc.data() will be undefined in this case
        console.log("No such document!");

        res.writeHead(404, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
          message: `Service inexistant`
        }));
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}
