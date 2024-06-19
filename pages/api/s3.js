import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: 'ca-central-1',
});

console.log(process.env.NEXT_PUBLIC_ACCESS_KEY_ID);
console.log(process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY);
console.log(process.env.NEXT_PUBLIC_REGION);

const s3 = new AWS.S3();

export default async function handler(req, res) {
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
          const url = s3.getSignedUrl('getObject', {
            Bucket: "mcnamee-coach-hire-gallery",
            Key: key,
            Expires: 60 * 60, // URL expires after 1 hour
          });
          console.log(`Got signed URL for object with key ${key}:`, url);
    
          // Get metadata
          const head = await s3.headObject({
            Bucket: "mcnamee-coach-hire-gallery",
            Key: key,
          }).promise();
    
          const metadata = head.Metadata;
    
          return { url, metadata };
        } catch (error) {
          console.error(`Error processing key ${key}:`, error);
          return null;
        }
      })
    );

    res.json(data);
  } catch (error) {
    console.error(`Error in handler function:`, error);
    res.status(500).json({ error: 'An error occurred' });
  }
}