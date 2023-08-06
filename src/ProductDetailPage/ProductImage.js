import Img1 from "../images/image-product-1.jpg";
import Img2 from "../images/image-product-2.jpg";
import Img3 from "../images/image-product-3.jpg";
import Img4 from "../images/image-product-4.jpg";

import Img1th from "../images/image-product-1-thumbnail.jpg";
import Img2th from "../images/image-product-2-thumbnail.jpg";
import Img3th from "../images/image-product-3-thumbnail.jpg";
import Img4th from "../images/image-product-4-thumbnail.jpg";
import { useState } from "react";
import Image from "./Image";
import { Image2 } from "./Image2";

export default function ProductImage() {
  const [image, setImage] = useState(Img1);
  return (
    <>
      <section>
        {/* thumnail images */}
        <Image2 name={image}></Image2>

        {/* <Crousal /> */}

        {/* images  */}

        <div className="hidden md:flex md:justify-between md:items-center md:my-5">
          <Image src={Img1th} change={setImage} img={Img1}></Image>
          <Image src={Img2th} change={setImage} img={Img2}></Image>
          <Image src={Img3th} change={setImage} img={Img3} />
          <Image src={Img4th} change={setImage} img={Img4} />
        </div>
      </section>
    </>
  );
}
