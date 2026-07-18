import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Ali Raza",
    course: "AI Foundation",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "AI KISA School completely changed my learning experience. The practical AI projects helped me gain real skills.",
  },
  {
    id: 2,
    name: "Fatima Noor",
    course: "Content Creation",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The teachers explain everything clearly. I created my first AI content and gained confidence.",
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    course: "Shopify & E-Commerce",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "I built my own Shopify store with AI tools. The learning environment is modern and professional.",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    course: "AI Foundation",
    image: "https://i.pravatar.cc/150?img=48",
    review:
      "Every class is practical. The AI projects are amazing and easy to understand.",
  },
  {
    id: 5,
    name: "Hassan Ali",
    course: "Digital Marketing",
    image: "https://i.pravatar.cc/150?img=21",
    review:
      "I learned AI marketing tools that saved me hours of work every week.",
  },
  {
    id: 6,
    name: "Zainab Ahmed",
    course: "Content Creation",
    image: "https://i.pravatar.cc/150?img=41",
    review:
      "Professional teachers, beautiful campus and an excellent AI learning experience.",
  },
  {
    id: 7,
    name: "Usman Raza",
    course: "Shopify & E-Commerce",
    image: "https://i.pravatar.cc/150?img=67",
    review:
      "The projects helped me build confidence and prepare for freelancing.",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const nextReview = () => {
  setIndex((prev) => (prev + 1) % reviews.length);
};

const prevReview = () => {
  setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
    const visibleReviews = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="py-24 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F3D7C]">
            Satisfied Students
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            See what our students say about AI KISA School.
          </p>

          <div className="flex justify-center items-center gap-3 mt-5">
            <span className="text-yellow-500 text-2xl">★★★★★</span>
            <span className="font-semibold text-[#1F2937]">
              4.9 Rating
            </span>

            <span className="text-gray-400">|</span>

            <span className="text-[#1F2937] font-semibold">
              7 Reviews
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {visibleReviews.map((review) => (

           <div
  key={review.id}
  className="bg-white rounded-3xl shadow-xl p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
>
  <div className="mb-6">
    <h3 className="font-bold text-xl text-[#1F2937]">
      {review.name}
    </h3>

    <p className="text-[#4E82BE]">
      {review.course}
    </p>
  </div>

  <div className="text-yellow-500 text-xl mb-4">
    ★★★★★
  </div>

  <p className="text-gray-600 leading-8">
    {review.review}
  </p>
</div>
          ))}

        </div>

      </div>
    </section>
  );
}