import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
});

const s3 = new AWS.S3();

export default async function handler(req, res) {
  const { keys = [] } = req.body; // Extract keys from request body, default to empty array if no keys are provided

  try {
    const data = await Promise.all(
      keys.map(async (key) => {
        try {
          const url = `https://mcnamee-coach-hire-gallery.s3.ca-central-1.amazonaws.com/${key}`;

          const metadata = await s3
            .headObject({
              Bucket: 'mcnamee-coach-hire-gallery',
              Key: key,
            })
            .promise();

          return { url, metadata };
        } catch (error) {
          console.error(`Error processing key ${key}:`, error);
          return null;
        }
      })
    );

    res.status(200).json({ data });
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ error: error.message });
  }
}