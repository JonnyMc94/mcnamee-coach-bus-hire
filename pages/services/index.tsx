import Head from "next/head";
import ServicesLayout from "./layout";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { ServiceImageData } from "../../common/types";

export default function Services() {

  const [imageData, setImageData] = useState<ServiceImageData[] | null>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/s3`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keys: [
          "2coaches.JPG",
          "2coach2.JPG",
          "weddingday.png",
          "whitecoach4.JPG",
          "concertimage.png",
          "stag.jpeg",
          "crokepark.png",
        ],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageData(
          data.map((item: ServiceImageData) => ({
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
    <ServicesLayout className="p-5 sm:p-10">
      <Head>
        <title>Services Page</title>
        <meta
          name="description"
          content="Details of the services we currently offer"
        />
      </Head>
      <div className="h-[15vh] mt-10 sm:mt-16 mb-8 sm:mb-10 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
        <h1 className="mt-4 sm:mt-10 text-4xl sm:text-7xl text-slate-600 text-center">
          Services
        </h1>
        <p className="w-full sm:w-1/2 mb-4 sm:mb-10 mt-4 sm:mt-10 p-4 sm:p-10 text-base sm:text-xl text-center text-slate-600">
          We offer a wide range of services and cater to any group size. Scroll
          down to check them out and don&apos;t hesitate to contact us for more
          details!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 m-4 sm:m-10 justify-items-center">
        {imageData?.map((service, idx) => {
          return (
            <Card
              key={service.url}
              id={service.url}
              title={service.metadata.title}
              details={service.metadata.details}
              src={service.url}
              alt={service.metadata.alt}
            />
          );
        })}
      </div>
    </ServicesLayout>
  );
}
