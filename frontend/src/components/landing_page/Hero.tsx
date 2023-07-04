import React from "react";
import { useState } from "react";
import { getCity } from "/src/utils/Api.jsx";

const Hero = () => {
  const [test, setTest] = useState({});

  const updateTest = async (city) => {
    console.log("hello");
    const data = await getCity(city);
    setTest(data);
    console.log(data);
  };

  return (
    <section className="w-full mx-auto bg-white" style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="mt-8 text-5xl font-medium tracking-tighter text-black">
              Travelling made easy.
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
              Discover serenity: Craft your ideal getaway collaboratively
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
            <a
              href="/"
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
            >
              Learn more
              <span aria-hidden="true"> → </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
