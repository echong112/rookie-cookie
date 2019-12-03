import React, { useState } from 'react';
import styled from 'styled-components'
import Unsplash from 'unsplash-js';

const AddClass = ({onSubmit, onCloseModal}) => {
  // eslint-disable-next-line
  const [classId, setClassId] = useState(Math.ceil(Math.random() * 1000));
  const [classTitle, setClassTitle] = useState('');
  const [classIns, setClassIns] = useState('');
  const [classDesc, setClassDesc] = useState('');
  const [classDur, setClassDur] = useState(0);
  const [classFeaturedImage, setClassFeaturedImage] = useState('');
  const [classType, setClassType] = useState('on-demand');
  const [featuredimageList, setFeaturedImageList] = useState([]);
  const [showImageList, setShowImageList] = useState(false);

  const unsplash = new Unsplash({ accessKey: "acd2360674987d49441122b54bd1e005c167b01c68e1dccae5da54d6ab174725" });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      id: classId,
      title: classTitle,
      instructor: classIns,
      description: classDesc,
      duration: classDur,
      featuredImage: classFeaturedImage,
      type: classType
    });
  }

  const featuredImageSearch = (term) => {
    unsplash.search.photos(term, 1, 10, { orientation: "portrait" })
    .then(res => res.json())
    .then(json => {
      setFeaturedImageList(json.results);
      setShowImageList(true);
    });
  }

  const selectFeaturedImage = (urls) => {
    setClassFeaturedImage(urls);
    setShowImageList(false);
  }

  return (
    <NewClassForm onSubmit={handleSubmit}>
      <h1>Add a new Class</h1>
      <button onClick={onCloseModal}>Cancel</button>
      <FormWrapper>
        <Formlabel>Title:</Formlabel>
        <FormFieldWrapper
          type="text"
          value={classTitle}
          required
          onChange={e => setClassTitle(e.target.value)}
        />
        <Formlabel>Instructor:</Formlabel>
        <FormFieldWrapper
          type="text"
          placeholder="e.g. (Gordon Ramsey, Ratatouille, Julia Child)"
          value={classIns}
          required
          onChange={e => setClassIns(e.target.value)}
        />
        <Formlabel>Description:</Formlabel>
        <FormTextArea
          maxlength="100"
          type="text"
          placeholder="Please enter class description"
          value={classDesc}
          required
          onChange={e => setClassDesc(e.target.value)}
        />
        <Formlabel>Duration:</Formlabel>
        <FormFieldWrapper
          type="number"
          placeholder="Please enter duration in hours"
          value={classDur}
          required
          onChange={e => setClassDur(e.target.value)}
        />
        <Formlabel>Search and Select Image:</Formlabel>
        <FormFieldWrapper
          type="text"
          placeholder="Start Typing...."
          required
          onChange={e => featuredImageSearch(e.target.value)}
        />

        <ImageListContainer>
          {showImageList && featuredimageList.map((image, i) => {
            return (
              <ImageListThumbnail
                key={i}
                onClick={e => selectFeaturedImage(image.urls.regular)}
                src={image.urls.thumb}/>
            );
          })}
        </ImageListContainer>

        {!showImageList && classFeaturedImage && (
          <FeaturedImageContainer>
            <FeaturedImage src={classFeaturedImage} />
          </FeaturedImageContainer>
        )}

        <Formlabel>Class Type:</Formlabel>
        <FormSelect
          placeholder="Please select "
          value={classType}
          onChange={e => setClassType(e.target.value)}
        >
          <option value="on-demand">On Demand</option>
          <option value="live">Live</option>
        </FormSelect>
        <FormSubmit type="submit" value="Add" />
      </FormWrapper>
    </NewClassForm>
  )
}

export default AddClass

const NewClassForm = styled.form`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 99999;
  background: white;
`

const FormWrapper = styled.div`
  max-width: 991px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
`
const FormFieldWrapper = styled.input`
  width: 100%;
`
const Formlabel = styled.label`
  padding-top: 15px;
`
const FormSubmit = styled.input`
  background: black;
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin: 25px 0;
  padding: 10px;
  width: 100%;
`
const FormTextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  min-height: 100px;
`
const FormSelect = styled.select`
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
const ImageListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`
const ImageListThumbnail = styled.img`
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
`
