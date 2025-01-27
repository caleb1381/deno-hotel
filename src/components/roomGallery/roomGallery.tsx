import { RoomImage } from "@/types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const RoomGallery = ({ images }: { images: RoomImage[] }) => {
  return (
    <div>
      <ImageGallery
        items={images}
        useBrowserFullscreen={false}
        showThumbnails={true}
        thumbnailPosition="right"
      />
    </div>
  );
};

export default RoomGallery;
