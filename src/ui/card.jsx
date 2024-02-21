"use client";

export default function Card() {
  return (
    <div className="max-w-sm w-full lg:max-w-full flex rounded-4xl justify-center items-center">
      <div
        className="lg:h-[25vh] lg:w-48 flex-none bg-cover rounded-l text-center overflow-hidden bg-[url('/coach1.png')]"
        title="Woman holding a mug"
      ></div>
      <div className="lg:h-[25vh] border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}
