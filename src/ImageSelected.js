import React from 'react';
import styled from 'styled-components'

const ImageSelected = ({showImageList, classFeaturedImage}) => {
  return (
    <ImageSelectedContainer>
      {!showImageList && classFeaturedImage && (
        <FeaturedImageContainer>
          <FeaturedImage src={classFeaturedImage} />
        </FeaturedImageContainer>
      )}
    </ImageSelectedContainer>
  )
}
export default ImageSelected

const ImageSelectedContainer = styled.div`
  width: 100%;

`
const FeaturedImageContainer = styled.div`
  padding: 15px;
  width: 100%;
`
const FeaturedImage = styled.img`
  width: 250px;
  height: auto;
`
