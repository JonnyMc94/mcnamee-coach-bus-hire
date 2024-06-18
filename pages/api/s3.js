import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
});

console.log(process.env.NEXT_PUBLIC_ACCESS_KEY_ID);
console.log(process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY);
console.log(process.env.NEXT_PUBLIC_REGION);

const s3 = new AWS.S3();

export default async function handler(req, res) {
  console.log("Handler function called");
  console.log(process.env.NEXT_PUBLIC_ACCESS_KEY_ID);
  console.log(process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY);
  console.log(process.env.NEXT_PUBLIC_REGION);
  let keys = [];
  if (req.method === "POST") {
    keys = req.body.keys || [];
  } else if (req.method === "GET") {
    keys = req.query.keys ? req.query.keys.split(",") : [];
  }

  try {
    const data = await Promise.all(
      keys.map(async (key) => {
        try {
          console.log(`Getting object with key ${key}`);
          const metadata = await s3
            .getObject({
              Bucket: "mcnamee-coach-hire-gallery",
              Key: key,
            })
            .promise();
          console.log(`Got object with key ${key}:`, metadata);
          return { url, metadata };
        } catch (error) {
          console.error(`Error processing key ${key}:`, error);
          return null;
        }
      })
    );

    res.status(200).json({ data });
    console.log("Handler function completed", { data });
  } catch (error) {
    console.error("Error in handler:", error);
  }
}
