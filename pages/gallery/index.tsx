import Footer from "@/components/copyright-footer";
import GalleryLayout from "./layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ImageData } from "../../common/types";

export default function GalleryPage() {
  const [imageData, setImageData] = useState<ImageData[] | []>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/s3`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keys: [
          "schoolbus1.JPG",
          "2coach2.JPG",
          "2coach3.JPG",
          "2coach4.JPG",
          "2coach5.JPG",
          "2coach2.JPG",
          "2coaches.JPG",
          "2coachnightime.JPG",
          "bluecoach1.JPG",
          "fleetlineup1.JPG",
          "greycoach.png",
          "lineup.jpg",
          "schoolbus1.JPG",
          "whitecoach1.JPG",
          "whitecoach2.JPG",
          "whitecoach3.JPG",
          "whitecoach4.JPG",
        ],
      }),
    })
      .then((response) => {
        console.log("Fetch response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Setting image data:", data);
        setImageData(
          data.map((item: ImageData) => ({
            url: item.url,
            metadata: item.metadata,
          }))
        );
      })
      .catch((error) => {
        console.error("Error in fetch call:", error);
      });
  }, []);

  return (
    <GalleryLayout className="flex-grow items-center justify-center md:h-svh mb-10 p-6">
      <Head>
        <title>Gallery Page</title>
        <meta
          name="description"
          content="You can see images of our fleet here"
        />
      </Head>
      <div className="bg-white min-h-75svh w-full p-8 sm:p-10 lg:p-12">
        <div className="mx-auto max-w-screen-4xl md:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            {imageData.map((img) => {
              return (
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  key={img.url}
                >
                  <img
                    src={img.url}
                    loading="lazy"
                    alt={img.metadata.alt}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </GalleryLayout>
  );
}
