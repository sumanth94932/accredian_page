"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    author: "Sarah Mitchell",
    role: "VP of Learning & Development",
    company: "ADP",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=0D8ABC&color=fff&size=128",
    logo: "https://static.vecteezy.com/system/resources/previews/020/149/249/non_2x/adp-abstract-business-growth-logo-design-on-white-background-adp-creative-initials-letter-logo-concept-vector.jpg",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    author: "Dr. Klaus Hartmann",
    role: "Global Head of Talent",
    company: "Bayer",
    avatar: "https://ui-avatars.com/api/?name=Klaus+Hartmann&background=0066CC&color=fff&size=128",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Logo_Bayer.jpg",
  },
  {
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    author: "Rajesh Iyer",
    role: "Chief HR Officer",
    company: "Reliance",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Iyer&background=0078D4&color=fff&size=128",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLrCsLvq_UpW0sRdEOkB6Ck-pWCXoD7988w&s",
  },
  {
    quote:
      "The Gen-AI and Data Science programs from Accredian have significantly upskilled our engineering teams. We've seen measurable productivity gains and faster innovation cycles since the rollout.",
    author: "Emily Chen",
    role: "Director of Engineering",
    company: "Google",
    avatar: "https://ui-avatars.com/api/?name=Emily+Chen&background=EA4335&color=fff&size=128",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  },
  {
    quote:
      "Accredian's custom enterprise curriculum aligned perfectly with our cloud-first strategy. The hands-on labs and real-world case studies made the learning stick for our technical staff.",
    author: "Marcus Johnson",
    role: "Sr. Manager, Tech Academy",
    company: "Amazon",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=FF9900&color=fff&size=128",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    quote:
      "Partnering with Accredian for our leadership pipeline program was transformative. The blended learning approach and executive coaching modules received outstanding feedback from our high-potentials.",
    author: "Priya Nandakumar",
    role: "Global L&D Lead",
    company: "Microsoft",
    avatar: "https://ui-avatars.com/api/?name=Priya+Nandakumar&background=00A4EF&color=fff&size=128",
    logo: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg",
  },
  {
    quote:
      "The product management bootcamp designed by Accredian for Meta helped our PMs think more strategically about user growth and monetization. A truly ROI-positive engagement.",
    author: "David Park",
    role: "Head of Product Growth",
    company: "Meta",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=0668E1&color=fff&size=128",
    logo: "https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png",
  },
  {
    quote:
      "Accredian delivered a world-class data analytics program for our content strategy team. The practical frameworks and tools they provided are now embedded in our daily workflows.",
    author: "Laura Schmidt",
    role: "VP, Content Strategy",
    company: "Netflix",
    avatar: "https://ui-avatars.com/api/?name=Laura+Schmidt&background=E50914&color=fff&size=128",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3840px-Netflix_2015_logo.svg.png",
  },
  {
    quote:
      "The creative leadership program from Accredian empowered our design directors with modern product thinking and AI-assisted creative workflows. Exceptional quality and delivery.",
    author: "James O'Brien",
    role: "Creative Director",
    company: "Adobe",
    avatar: "https://ui-avatars.com/api/?name=James+OBrien&background=FF0000&color=fff&size=128",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/3840px-Adobe_Corporate_logo.svg.png",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => [prev + newDirection, newDirection]);
    },
    []
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const goTo = (index: number) => {
    const newDirection = index > testimonialIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  const current = testimonials[testimonialIndex];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonials from Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What Our Clients Are Saying
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative min-h-[420px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed italic mb-8 text-lg md:text-xl text-center">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="text-center">
                      <div className="font-bold text-xl text-gray-900">
                        {current.author}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {current.role}
                      </div>
                    </div>
                    <img
                      src={current.logo}
                      alt={current.company}
                      className="h-8 w-auto object-contain mt-2 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === testimonialIndex
                    ? "w-8 bg-gray-900"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

