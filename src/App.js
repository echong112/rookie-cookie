import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classList from './classes'
import NavBar from './NavBar'

const App = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses(classList)
  }, [])

  return (
    <Wrapper>
      <NavBar />
      <h1>Welcome to RookieCookie!</h1>
      {classes.map(klass => <ClassCard content={klass}/>)}
    </Wrapper>
  )
}

export default App

// NOTE: Obviously, the easy / cheat answer is to update the classes.js
// Assuming the data object has something that has something
// along the lines of 'featuredImage' or 'featureImage', it will parse the keys and find
// the correct object param to populate the imageUrl

const processImageKey = (content) => {
  let keys = Object.keys(content);
  let imageUrl = '';
  keys.forEach((key, i) => {
    let featureRegEx = /^featureImage/;
    let featuredRegEx = /^featuredImage/;
    if (featureRegEx.test(key) || featuredRegEx.test(key)) {
      imageUrl = content[key];
    }
  });
  return imageUrl;
}

const ClassCard = ({content}) => (
  <ClassCardWrapper>
    <img height="50%" width="100%"
      src={processImageKey(content)}
      alt=''
    />
    <h4>{content.title}</h4>
    <h5>{content.instructor}</h5>
    <h5>{content.description}</h5>
    <h5>{content.duration} min</h5>
  </ClassCardWrapper>
)

const Wrapper = styled.div `
  margin-top: 45px;
  text-align: center;
`

const ClassCardWrapper = styled.div`
  width: 175px;
  border-radius: 5px;
  border: solid 1px black;
  overflow: hidden;
`
