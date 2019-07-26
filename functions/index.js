const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();
exports.webhook = functions.https.onRequest((request, response) => {
  let params = request.body.queryResult.parameters;
  switch (request.body.queryResult.action) {
    case 'Addition':
        response.send({

          fulfillmentText: `The Addition of ${parseFloat(params.num1)} and ${parseFloat(params.num2)}
           is ${parseFloat(params.num1) + parseFloat(params.num2)} ` //for adding two numbers

      })
      break;   
  }
});
