import styled from 'styled-components';

export const ImageStyle = styled.img`
    position: absolute;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: center;
    opacity:${({ opacity }) => opacity};
    transition: opacity var(--transition-theme);
    
`;  