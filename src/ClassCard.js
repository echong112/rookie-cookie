import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { processImageKey, truncateDesc } from './utils'

const ClassCard = ({content, onDelete}) => {
  const [currClass, setCurrClass] = useState(content);

  useEffect(() => {
    setCurrClass(content);
  }, [content]);

  const cancelClass = () => {
    let tempClass = Object.assign({}, currClass);
    tempClass.isCancelled = !tempClass.isCancelled;
    setCurrClass(tempClass);
  }

  return (
    <ClassCardWrapper>
      <ClassCardImage
        style={{ backgroundImage: `url(${processImageKey(content)})` }}
        src={processImageKey(content)}
      />
      {currClass.isCancelled && (
        <CancelledBadge>Cancelled</CancelledBadge>
      )}
      <h4>{content.title}</h4>
      <h5>{content.instructor}</h5>
      <h5>{truncateDesc(content.description)}</h5>

      <ClassCardDuration>{content.duration} min</ClassCardDuration>
      <ClassButtonContainer>
      <button onClick={onDelete}>Delete</button>
      <button onClick={cancelClass}>{currClass.isCancelled ? 'Activate' : 'Cancel'}</button>
      </ClassButtonContainer>
    </ClassCardWrapper>
    );
}

export default ClassCard

const ClassCardWrapper = styled.div`
  height: 480px;
  width: 175px;
  border-radius: 5px;
  border: solid 1px black;
  overflow: hidden;
  flex-basis: 19%;
  margin: .25%;
  position: relative;
`
const ClassCardImage = styled.div`
  width: 100%;
  height: 50%;
  background-size: cover;
`

const ClassCardDuration = styled.h5`
  width: 100%;
  position: absolute;
  bottom: 15px;
`

const ClassButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
`

const CancelledBadge = styled.div`
  position: absolute;
  width: 99%;
  top: 50%;
  opacity: 0.65;
  left: 0;
  padding: 15px 0;
  font-size: 25px;
  font-weight: bold;
  transform: rotate(-35deg);
  color: red;
`
