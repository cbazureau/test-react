import { getRandomImage } from "../utils";

const Image = () => <img src={getRandomImage()} className="Image" />

export default Image;