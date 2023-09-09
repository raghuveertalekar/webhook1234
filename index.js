// Add Express
const express = require("express");
const readme = require('readmeio');

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel-2");
});

// Create GET request
app.get("/webhookget", (req, res) => {
  res.send("Express on Vercel-webhook");
});

// Your ReadMe secret
//const secret = 'CJjif4vSlIWpHLiDKRdH3NgBPEcFolNK';
// Your ReadMe secret
//const secret = 'CJjif4vSlIWpHLiDKRdH3NgBPEcFolNK';
const secret = 'CJjif4vSlIWpHLiDKRdH3NgBPEcFolNK';

app.post('/webhook', express.json({ type: 'application/json' }), async (req, res) => {
  // Verify the request is legitimate and came from ReadMe.
  const signature = req.headers['readme-signature'];

  try {
    console.log('try');
    console.log(req.headers);
    readme.verifyWebhook(req.body, signature, secret);
  } catch (e) {
    // Handle invalid requests
    return res.status(401).json({ error: e.message });
  }

  // Fetch the user from the database and return their data for use with OpenAPI variables.
  // const user = await db.find({ email: req.body.email })
  return res.json({
    // OAS Server variables
    'base-url': 'https://localhost:443',

    // OAS Security variables
    bearerAuth: 'bearerAuth',
    oauth2: 'oauth2',
    apiKey: { user: 'user', pass: 'pass' },
    APIToken: 'APIToken',
  });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
