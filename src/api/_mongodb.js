// api/_mongodb.js (CommonJS)
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI; // e.g. mongodb+srv://user:pass@cluster/db
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

let client;
let clientPromise;

// cache the connection across invocations
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, { maxPoolSize: 5 });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

module.exports = clientPromise;
