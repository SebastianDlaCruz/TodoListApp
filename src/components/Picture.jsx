import { ImageStyle } from "../styled-components";

const Picture = ({ src, alt, srcSet, media, opacity }) => {

    return (
        <picture>
            <source media={media} srcSet={srcSet} />
            <ImageStyle
                src={src} alt={alt}
                opacity={opacity} />
        </picture>
    );
}

export default Picture;
