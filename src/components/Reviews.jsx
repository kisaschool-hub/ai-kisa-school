const testimonials = [
  {
    category: "Parents",
    quote:
      "The school creates a calm, supportive environment where children feel encouraged to learn, express themselves, and grow with confidence.",
  },
  {
    category: "Students",
    quote:
      "I enjoy learning in a school that balances academics, creativity, and digital skills. It helps me feel prepared for the future.",
  },
  {
    category: "Teachers",
    quote:
      "The school values practical learning, student wellbeing, and future focused education, which helps every child build confidence and curiosity.",
  },
];

export default function Reviews() {
  return (
    <section className="py-12 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.18em] text-[#DFB863] font-semibold text-sm">
            Student Success Stories
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#1B2A5C]">
            Learning experiences families trust
          </h2>
          <p className="mt-4 text-gray-600 text-base max-w-3xl mx-auto">
            Families value the warmth, structure and future focused learning environment that help children grow with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.category}
              className="bg-white rounded-[18px] shadow p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-slate-100"
            >
              <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
              <p className="text-gray-700 leading-7 text-base">“{item.quote}”</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="font-bold text-[#1B2A5C] text-lg">{item.category}</h3>
                <p className="text-sm text-slate-500 mt-1">Trusted school community feedback</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}