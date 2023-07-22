import React from 'react';
import AboutHero from '../../assets/abouthero.jpeg'
const Feature = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img
                  className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto h-fit"
                  alt="hero"
                  src={AboutHero}
                />
              </div>
              <div className="flex flex-col mt-6 lg:mt-0">
                <div className="max-w-xl">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      Inspired by Trello and Kanban.
                    </p>
                  </div>
                </div>
                <div className="mx-auto mt-6 lg:max-w-7xl">
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3"
                  >
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Developer experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Our platform is tailored to meet the unique challenges of the construction industry, providing a seamless experience that empowers developers and construction teams.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Efficient Project Collaboration
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is continuously evolving to adapt to the ever-changing demands of the construction sector, ensuring you stay ahead in managing your projects effectively.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        With our user-friendly interface and intuitive features, onboarding to our construction management platform is a breeze, enabling your team to hit the ground running.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
