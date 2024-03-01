import { Metadata } from "next";
import Footer from "@/src//ui/copyright-footer";

export const metadata: Metadata = {
  title: "Gallery",
};

const data = [
  {
    id: 1,
    src: "/schoolbus1.JPG",
    alt: "Image of a white school bus",
  },
  {
    id: 2,
    src: "/2coach2.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 3,
    src: "/2coach3.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 4,
    src: "/2coach4.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 5,
    src: "/2coach5.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 6,
    src: "/2coach2.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 2,
    src: "/2coaches.JPG",
    alt: "Image of two coaches",
  },
  {
    id: 7,
    src: "/2coachnightime.JPG",
    alt: "Image of two coaches at nightime",
  },
  {
    id: 8,
    src: "/bluecoach1.JPG",
    alt: "Image of a blue coach",
  },
  {
    id: 9,
    src: "/coach1.png",
    alt: "Image of a coach",
  },
  {
    id: 10,
    src: "/coach2.png",
    alt: "Image of a coach",
  },
  {
    id: 11,
    src: "/coach3.png",
    alt: "Image of a coach",
  },
  {
    id: 12,
    src: "/fleetlineup1.JPG",
    alt: "Lineup of the fleet",
  },
  {
    id: 13,
    src: "/greycoach.png",
    alt: "Image of a grey coach",
  },
  {
    id: 14,
    src: "/lineup.jpg",
    alt: "Lineup of the fleet",
  },
  {
    id: 15,
    src: "/schoolbus1.JPG",
    alt: "Image of a schoolbus",
  },
  {
    id: 16,
    src: "/whitecoach1.JPG",
    alt: "Image of a white coach",
  },
  {
    id: 17,
    src: "/whitecoach2.JPG",
    alt: "Image of a white coach",
  },
  {
    id: 18,
    src: "/whitecoach3.JPG",
    alt: "Image of a white coach",
  },
  {
    id: 19,
    src: "/whitecoach4.JPG",
    alt: "Image of a white coach",
  },
];

export default function GalleryPage() {
  return (
    <main className="flex-grow items-center justify-center md:h-svh mb-10 p-6">
      <div className="bg-white min-h-75svh w-full p-8 sm:p-10 lg:p-12">
        <div className="mx-auto max-w-screen-4xl md:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            {data.map((img) => {
              return (
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  key={img.id}
                >
                  <img
                    src={img.src}
                    loading="lazy"
                    alt={img.alt}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
