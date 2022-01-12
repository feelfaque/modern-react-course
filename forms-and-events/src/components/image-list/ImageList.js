import "./imageList.css";
import ImageCard from "../image-card/ImageCard";

const ImageList = ({images}) => {

    return (
        <div className="image-list">
            {images.map((image) => {
                return <ImageCard key={image.id} image={image} />
            })}
        </div>
    );
}

export default ImageList;