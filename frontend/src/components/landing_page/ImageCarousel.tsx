import { Carousel } from "@material-tailwind/react";
import Image1 from "../../assets/carousel1.jpeg";
import Image2 from "../../assets/carousel2.jpeg"
import Image3 from "../../assets/carousel3.jpeg"

export default function ImageCarousel() {
  return (
    <Carousel loop autoplay>
      <img
        src={Image1}
        alt="image 1"
        className="h-72 w-full object-cover"
      />
      <img
        src={Image2}
        alt="image 2"
        className="h-72 w-full object-cover"
      />
      <img
        src={Image3}
        alt="image 3"
        className="h-72 w-full object-cover"
      />
    </Carousel>
  );
}
