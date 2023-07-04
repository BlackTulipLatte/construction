import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function ImageCarousel() {
  return (
    <section className="w-full mx-auto bg-white border-b 2xl:max-w-7xl" style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <figure className="mx-auto">
          <img
            className="object-center w-full h-auto bg-gray-200"
            src="https://d33wubrfki0l68.cloudfront.net/7c2dda6eab52a4b95dc6c3503d5a09c4e314f756/4d7a5/images/placeholders/square1.svg"
            alt=""
            width="1310"
            height="873"
          />
        </figure>
      </div>
    </section>
  );
}
