import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const faqs = [
  {
    question: "What technologies are you proficient in?",
    answer:
      "I am proficient in React, JavaScript, Tailwind CSS, Redux, Vanta.js, Rapid API, and various other modern web development tools and libraries.",
  },
  {
    question: "Can you describe your role and responsibilities at OyeLabs?",
    answer:
      "As a React Developer at OyeLabs since May 2023, I have been responsible for developing and maintaining web applications using React, enhancing user experience, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    question:
      "What is the most significant project you have worked on, and what was your contribution?",
    answer:
      "One of the most significant projects I worked on is the Carson&Bear Web App, where I developed a React-based customer web app with Redux and Tailwind. I integrated Stripe payment flow, implemented a dynamic discount system, and streamlined the subscription process, resulting in a 40% increase in loading speed, a 20% growth in premium plan subscriptions, and a 15% increase in user retention.",
  },
  {
    question:
      "How do you ensure code quality and reduce bugs in your projects?",
    answer:
      "I follow rigorous coding best practices, perform regular code reviews, write unit and integration tests, and collaborate closely with testing teams. For example, in The Excursionist project, I reduced bugs by 40% through these methods.",
  },
  {
    question:
      "What strategies do you use to improve the performance and loading speed of web applications?",
    answer:
      "I optimize performance by using techniques such as code splitting, lazy loading, and efficient state management. In the Carson&Bear Web App, these strategies helped achieve a 40% increase in loading speed.",
  },
  {
    question: "How do you manage state in your React applications?",
    answer:
      "I use Redux for state management in my React applications. Redux helps maintain a predictable state container, making it easier to manage complex states across the application.",
  },
  {
    question:
      "Can you explain your experience with integrating third-party APIs?",
    answer:
      "I have extensive experience integrating third-party APIs. For instance, in the Insta Service Project, I implemented 12 APIs into the frontend, broadening the platform's functionality and ensuring seamless integration.",
  },
  {
    question:
      "What are some of the innovative features you have introduced in your projects?",
    answer:
      "I have introduced several innovative features, such as component preview and code copying in the ReactBreeze component library, and Shimmer API for subtle loading animations in the Virtual Vogue e-commerce platform, which enhanced the development workflow and user experience.",
  },
  {
    question: "How do you handle project deadlines and ensure timely delivery?",
    answer:
      "I prioritize tasks, maintain clear communication with team members, and use project management tools to track progress. This approach has helped me achieve a 95% on-time delivery rate, as seen in The Excursionist project.",
  },
  {
    question: "What are your key achievements at OyeLabs?",
    answer:
      "Some key achievements include developing a versatile UI component library that reduced development time by 30%, increasing premium plan subscriptions by 20% through innovative features in the Carson&Bear Web App, and maintaining a stellar on-time delivery rate of 95% in multiple projects.",
  },
];

const FaqsSlide = () => {
  return (
    <div className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/20">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="pt-6 outline-none border-0"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white border-0 outline-none">
                      <span className="text-base font-semibold leading-7 border-0 outline-none">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <FaMinus className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <FaAngleDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>

                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqsSlide;
