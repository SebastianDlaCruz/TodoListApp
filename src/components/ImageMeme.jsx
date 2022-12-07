import React from 'react';
import { ImageMemeStyle } from '../styled-components';
const ImageMeme = ({ stateMessage }) => {
    return (
        <ImageMemeStyle
            src='/images/meme.png'
            alt='meme'
            stateMessage={stateMessage}
        >
        </ImageMemeStyle>
    );
}

export default ImageMeme;
