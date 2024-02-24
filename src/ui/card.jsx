"use client";

export default function Card(props) {

  const {id, title, details, src, key, alt} = props

  return (
    <div className="max-w-sm w-full lg:max-w-full flex rounded-4xl justify-center items-center" key={id}>
      <div
        className="lg:h-[25vh] lg:w-48 flex-none bg-cover rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${src})` }}
        title={alt}
        alt={alt}
      ></div>
      <div className="lg:h-[25vh] border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div className="m-4">
          <div className="text-gray-900 font-bold text-xl mt-12">
            {title}
          </div>
          <p className="text-gray-700 text-base mt-6">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}
