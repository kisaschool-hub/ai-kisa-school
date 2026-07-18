export default function Stats() {
  const stats = [
    { number: "200+", title: "Students" },
    { number: "15+", title: "Professional Teachers" },
    { number: "50+", title: "AI Projects" },
    { number: "100+", title: "Achievements" },
  ];

  return (
    <section className="py-20 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#D6E4F5] rounded-3xl p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            <h2 className="text-5xl font-extrabold text-[#2F3D7C]">
              {item.number}
            </h2>

            <p className="mt-4 text-[#1F2937] text-lg font-semibold">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}