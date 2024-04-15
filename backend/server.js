const express = require("express");
const app = express();
var port = normalizePort(process.env.PORT);
const { MongoClient } = require("mongodb");

const url = URL;
const client = new MongoClient(url);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const dbName = "myProject";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const deleteResult = await collection.deleteMany({ a: 3 });
  console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.listen(port, () => {
  console.log(`Écoute du server sur le port: ${port}`);
});
