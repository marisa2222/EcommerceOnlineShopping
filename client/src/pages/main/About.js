import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            About Us
          </h2>
        </div>

        <div className="container mx-auto mt-8 flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900">
          <div className="">
            <h2 className=" text-3xl md:text-4xl font-semibold">
            Swift Ecommerce With Cortado
            </h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500">
              {" "}
              Revolutionize your online shopping experience with our platform. Generate your personalized online store with two dynamic templates, offering speed, flexibility, and stunning design. Start selling and engaging customers with ease.
  </span>
          </div>
        </div>
 
      </div>
    </>
  );
};

export default About;
