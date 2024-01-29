import React from "react";
import nitish from "../../images/WhatsApp Image 2024-01-29 at 15.17.49_0f80a367.jpg";
import shubham from "../../images/WhatsApp Image 2024-01-29 at 15.28.28_1aa4817f.jpg";
const featuredTestimonial = {
  body: "I had an amazing experience working with Abhishek on my personal portfolio. He demonstrated exceptional skill and creativity in bringing my vision to life. The attention to detail and commitment to delivering a top-notch product were truly impressive. I highly recommend him for anyone looking to elevate their online presence.",
  author: {
    name: "Ambuj Dubey",
    handle: "dambuj007@gmail.com",
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEHUYQTsYIbrg/profile-displayphoto-shrink_400_400/0/1706200491986?e=1712188800&v=beta&t=TFplMeTJ-EGh5E4ruePIj8pTq654TqZ2ZFpQVDofvzQ",
    logoUrl:
      "https://media.licdn.com/dms/image/C4E0BAQGeTysKpW-H4w/company-logo_200_200/0/1630640648960?e=1714608000&v=beta&t=h3R4zeezSKaY8HsKqXVo9RlqeuoerfbzMQB-YSeA1kc",
  },
};
const testimonials = [
  [
    [
      {
        body: "Abhishek created an amazing gym website that has significantly enhanced my fitness business.",
        author: {
          name: "Nitesh",
          handle: "kumarnitesh891@gmail.com",
          imageUrl: nitish,
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Worked with Abhishek as an intern at oyelabs , he is a great co-worker, learned a lot from him , wish him very best for the future.",
        author: {
          name: "Soham Ganmote",
          handle: "sohamganmote@gmail.com",
          imageUrl:
            "https://media.licdn.com/dms/image/D4D03AQGL0-FheUJsbw/profile-displayphoto-shrink_400_400/0/1688141957959?e=1712188800&v=beta&t=4ghhwhtTDMxAwiPYLGb1RebQdHqJsGhRMN1GzqNlkHk",
        },
      },
    ],
  ],
  [
    [
      {
        body: "learning frontend development from last 3 months and i must say your ReactBreeze component library made my learning easy.",
        author: {
          name: "Shubham Singh Kushwaha",
          handle: "Shu91Kushwaha@gmail.com",
          imageUrl: shubham,
        },
      },
    ],
    [
      {
        body: "Abhishek made an awesome portfolio template for me , that dark more feature is something i am looking for , thank you ",
        author: {
          name: "Vivek Khare",
          handle: "vivekkhare130@gmail.com",
          imageUrl:
            "https://media.licdn.com/dms/image/C5603AQEvMADGPrHHCg/profile-displayphoto-shrink_400_400/0/1657803141165?e=1712188800&v=beta&t=0t3dWr9rWUX9icIll0DvCYZ6gXoKcs_iIy94iT2t-pE",
        },
      },
    ],
  ],
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Testemonials = () => {
  return (
    <div className="relative isolate bg-neutral-950 pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl  font-bold leading-8 tracking-tight text-green-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            I worked with lots of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-green-600 sm:bg-opacity-50 sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-70"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-900">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-green-600 bg-opacity-50 p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-950 font-semibold">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-300">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
