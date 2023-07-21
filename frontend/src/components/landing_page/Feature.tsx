import React from 'react';

const Feature = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img
                  className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto"
                  alt="hero"
                  src="https://d33wubrfki0l68.cloudfront.net/5c3717929ffba80beaa3af41a006cea525c8d504/ae764/images/placeholders/square4.svg"
                />
              </div>
              <div className="flex flex-col mt-6 lg:mt-0">
                <div className="max-w-xl">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      I am a short heading
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
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Designers go-to app
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Customer support
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="py-12 mx-auto lg:py-16">
                  <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/b44e3c53a7ffe89bb6ca9e49ff652e53222d5b31/4aefd/images/logos/1.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/aae3d6dfaee9138c485f5305dd33b7f80379edb4/64dd2/images/logos/2.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/4dc5df63255f9f0c1f54c804dd3149cf11308507/b7a70/images/logos/3.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/be7130b04bb6b932ed9222877a5e9146d80c0eba/6511d/images/logos/4.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/456c999508e76cd199714cfa4fad3826ebb02216/9147b/images/logos/5.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="flex justify-center col-span-1 px-8">
                      <img
                        className="max-h-12"
                        src="https://d33wubrfki0l68.cloudfront.net/b5d09ea7476a226d10dd1235e071288761e51da7/e68ac/images/logos/6.svg"
                        alt="logo"
                      />
                    </div>
                  </div>
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
