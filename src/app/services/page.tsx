import { Metadata } from "next";
import Card from "@/src/ui/card";

export const metadata: Metadata = {
  title: "Services",
};

const data = [
  {
    id: 1,
    title: "School Transport",
    details:
      "We service many routes, to schools in the North West Meath/Cavan area. Get in touch to find out more",
    src: "/schoolbus1.JPG",
    alt: "Image of a white school bus"
  },
  {
    id: 2,
    title: "School Trips",
    details:
      "From sports trips to educational trips, we cater for all class sizes!",
    src: "/2coach2.JPG",
    alt: "Image of two coaches"
  },
  {
    id: 3,
    title: "Wedding Transport",
    details:
      "We provide a full range of transport for guests to and from accomodation and venue",
    src: "/weddingday.png",
    alt: "Image of a bride on her wedding day"

  },
  {
    id: 4,
    title: "Day Tours",
    details:
      "We cater for all ggroup sizes so conatact us with details on your next day trip",
    src: "/whitecoach4.JPG",
    alt: "Image of a white coach"
  },
  {
    id: 5,
    title: "Concerts",
    details:
      "All main concert venues in the coutry are catered for including festivals",
    src: "/concertimage.png",
    alt: "Generic image of a concert"
  },
  {
    id: 6,
    title: "Hens & Stags",
    details:
      "Whether you're heading to a premier destination or [pub crawling, we cater for all types of events. Get in touch!",
    src: "/henparty.png",
    alt: "Hen Party image"
  },
  {
    id: 7,
    title: "Sports trips",
    details:
      "We cater for trips in Ireland or the UK and for groups of verying sizes. Don't hesitate to get in touch!",
    src: "/crokepark.png",
    alt: "Image of Croke Park during a game"
  },
];

export default function Services() {
  return (
    <main className="p-14">
      <div className="h-[15vh] w-full m-10 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
        <h1 className="mt-10 text-7xl text-slate-600">SERVICES</h1>
        <div className="h-2 border-t-0 bg-black"></div>
        <p className="mb-10 mt-10 p-10 text-xl text-slate-600">We offer a wide range of services and cater to any group size. Scroll down to check them out and don't hesitate to contact us for more details! </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-10 justify-items-center">
        {data.map((service) => {
          return (
            <Card
              id={service.id}
              title={service.title}
              details={service.details}
              src={service.src}
              alt={service.alt}
            />
          );
        })}
      </div>
    </main>
  );
}
