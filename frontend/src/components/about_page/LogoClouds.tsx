import React from "react";
import ReactLogo from "../../assets/react_logocloud.png";
import TailwindLogo from "../../assets/tailwind_logocloud.png";
import PostgresLogo from "../../assets/postgres_logocloud.png";

const LogoClouds = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h1 className="text-lg font-medium leading-6 text-black ">
            Built with
          </h1>
        </div>
        <div className="grid mt-8 grid-cols-2 gap-0.5 md:grid-cols-6 pt-6">
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoClouds;
