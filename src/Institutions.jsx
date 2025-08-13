import React from "react";

const institutions = [
  {
    name: "Pottery Development Centre (Khurja)",
    description:
      "A government-supported center providing training, modern techniques, and resources to artisans for improving pottery quality and sustainability.",
    img: "/i1.jpg",
    url: "https://www.cgcri.res.in/hindi/campus/khurja/",
  },
  {
    name: "ODOP – One District One Product Scheme",
    description:
      "Uttar Pradesh's ODOP program offers financial aid, marketing support, and skill development to preserve Khurja's traditional pottery craft.",
    img: "/i2.jpg",
    url: "https://odopup.in/",
  },
  {
    name: "Khurja Industrial Park",
    description:
      "A modern industrial zone with dedicated spaces for ceramic businesses, encouraging eco-friendly manufacturing and export growth.",
    img: "/i3.jpg",
    url: "https://bkdaup.com/",
  },
];

const Institutions = () => {
  return (
    <section className="h-max p-2 mt-2 w-full flex flex-col space-y-8 lg:space-x-4 justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Institutions & Sustainability
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center overflow-hidden pb-2 hover:shadow-xl transition-shadow"
            >
              <img
                src={inst.img}
                alt={inst.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {inst.name}
                </h3>
                <p className="text-gray-600 text-sm">{inst.description}</p>
              </div>
              <a href={inst.url} className="cursor-pointer px-8 py-2 rounded-sm bg-emerald-100 hover:bg-emerald-200">More Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutions;
