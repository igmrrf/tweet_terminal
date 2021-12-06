require("dotenv").config();
const got = require("got");
const crypto = require("crypto");
const OAuth = require("oauth-1.0a");

// Get these from your app on your developer account
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;
const access_token = process.env.ACCESS_TOKEN;
const token_secret = process.env.TOKEN_SECRET;
const endpointURL = process.env.END_POINT;
// NOTE: If you keep getting errors while trying to tweet
// plainly input the values for the variables above.

const data = {
  text: process.argv[2],
};

const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret,
  },
  signature_method: "HMAC-SHA1",
  hash_function: (baseString, key) => crypto.createHmac("sha1", key).update(baseString).digest("base64"),
});

async function getRequest() {
  const authHeader = oauth.toHeader(
    oauth.authorize(
      {
        url: endpointURL,
        method: "POST",
      },
      {
        key: access_token,
        secret: token_secret,
      },
    ),
  );

  const req = await got.post(endpointURL, {
    json: data,
    responseType: "json",
    headers: {
      Authorization: authHeader["Authorization"],
      "user-agent": "v2CreateTweetJS",
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  if (!req.body) throw new Error("Unsuccessful request");

  return req.body;
}

(async () => {
  try {
    const response = await getRequest();
    console.dir(response, {
      depth: null,
    });
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();
