import {useEffect, useRef, useState} from "react";

const ImageCard = ({image}) => {
    const imageRef = useRef();
    const [spans, setSpans] = useState();

    const showRef = () => {
        imageRef.current.addEventListener('load', setSpan)
    }

    const setSpan = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        setSpans(spans);
    }

    useEffect(showRef);
    return(
        <div className="image-card" style={{gridRowEnd: `span ${spans}`}}>
            <img
                ref={imageRef}
                alt={image.description}
                src={image.urls.regular}
            />
        </div>
    );
}

export default ImageCard;