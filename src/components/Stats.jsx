export default function Stats() {
  const stats = [
    { number: "200+", title: "Students" },
    { number: "15+", title: "Professional Teachers" },
    { number: "50+", title: "AI Projects" },
    { number: "100+", title: "Achievements" },
  ];

  return (
    <section className="hidden lg:block py-12 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D6E4F5] rounded-3xl p-6 text-center shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-extrabold text-[#1B2A5C]">
                {item.number}
              </h2>

              <p className="mt-3 text-[#1F2937] text-base font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}