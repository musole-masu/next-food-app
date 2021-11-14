import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const DATABASE_NAME = "FoodApp";
  const DATABASE_PASSWORD = "1234567H";

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://masu:${DATABASE_PASSWORD}@foodapp.0tpop.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const mealsCollection = db.collection("meals");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;
