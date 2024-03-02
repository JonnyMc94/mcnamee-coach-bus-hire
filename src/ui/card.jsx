"use client";

export default function Card(props) {

  const {id, title, details, src, key, alt} = props

  return (
    <div className="max-w-sm w-full lg:max-w-full m-4 lg:m-10 shadow-2xl rounded-lg transition-all duration-700 hover:scale-105 flex flex-col lg:flex-row rounded-4xl justify-center items-center">
      <div
        className="w-full lg:w-48 lg:h-[35vh] flex-none bg-cover rounded-l lg:rounded-l-none lg:rounded-t text-center overflow-hidden"
        style={{ backgroundImage: `url(${src})` }}
        title={alt}
        alt={alt}
      ></div>
      <div className="w-full lg:w-auto lg:h-[35vh] border-r border-b border-l lg:border-l-0 lg:border-t lg:border-gray-400 bg-blue-300 rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div className="m-4">
          <div className="text-gray-900 font-bold text-xl lg:mt-12">
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
