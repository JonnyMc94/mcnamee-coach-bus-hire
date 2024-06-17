import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
});

AWS.config.logger = console; 

export default async function handler(req, res) {
    console.log('Handler function called');
  const s3 = new AWS.S3({
    endpoint: "https://s3.ca-central-1.amazonaws.com",
  });
  const { keys } = req.body || []; // Extract keys from request body, default to empty array if no keys are provided
  console.log('Keys:', keys);
  try {
    let data;
    if (keys.length > 0) {
      // If keys are provided, generate signed URLs and get metadata for the corresponding images
      data = await Promise.all(
        keys.map(async (key) => {
          const url = s3.getSignedUrl("getObject", {
            Bucket: "mcnamee-coach-hire-gallery",
            Key: key,
            Expires: 60 * 60, // URL will be valid for 1 hour
          });

          console.log('URL:', url);

          const metadata = await s3
            .headObject({
              Bucket: "mcnamee-coach-hire-gallery",
              Key: key,
            })
            .promise();

          return { url, metadata };
        })
      );
    } else {
      // If no keys are provided, generate signed URLs and get metadata for all images
      const { Contents: keys } = await s3
        .listObjectsV2({
          Bucket: "mcnamee-coach-hire-gallery",
        })
        .promise();

      data = await Promise.all(
        keys.map(async ({ Key: key }) => {
          const url = s3.getSignedUrl("getObject", {
            Bucket: "mcnamee-coach-hire-gallery",
            Key: key,
            Expires: 60 * 60, // URL will be valid for 1 hour
          });

          const metadata = await s3
            .headObject({
              Bucket: "mcnamee-coach-hire-gallery",
              Key: key,
            })
            .promise();

          return { url, metadata };
        })
      );
    }

    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
