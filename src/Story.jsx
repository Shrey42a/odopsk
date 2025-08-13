function Story() {
  return (
    <section className="h-max p-2 mt-2 w-full flex flex-col space-y-8 lg:space-x-4 justify-center items-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">The Story of Khurja Pottery</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Khurja, a small town in Bulandshahr district of Uttar Pradesh, is
          famously known as the “Ceramics City of India”. Its pottery tradition
          dates back over 600 years, blending Persian styles with Indian
          artistry. The unique designs, bright colors, and durability of Khurja
          pottery have made it a symbol of cultural pride and craftsmanship.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fun Fact
          </h3>
          <p className="text-gray-700">
            Khurja Pottery has earned a <strong>GI Tag</strong> (Geographical
            Indication) — meaning only pottery made here can officially be
            called "Khurja Pottery".
          </p>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Today, Khurja hosts more than <strong>500 factories</strong> and{" "}
          <strong>350 pottery units</strong>, producing everything from
          decorative plates and vases to kitchenware and tiles. It is also a
          major hub for sustainable craft, where artisans use locally sourced
          clay and natural colors to reduce environmental impact, keeping the
          tradition alive for future generations.
        </p>
      </div>
    </section>
  );
};

export default Story;
