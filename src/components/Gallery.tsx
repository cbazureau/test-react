import AddImage from "./AddImage";
import Image from "./Image";

import "./Gallery.css";

/**
 * Rules to implement
 * RG-01 : Gallery should display at the start 5 random images (use getRandomImage() to get random url)
 * RG-02 : Display should respect the linked mockups
 * RG-03 : the "+" button should add a random image at the end (without altering the others)
 * RG-04 (bonus) : When i clicked on an image, the image should be removed
 */

const Gallery = () => {
  return (
    <div className="Gallery">
      <Image />
      <Image />
      <Image />
      <Image />
      <AddImage />
    </div>
  );
};

export default Gallery;
