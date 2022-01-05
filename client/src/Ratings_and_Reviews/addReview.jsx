import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RR.module.css';

const AddReview = ({product_id, review_meta, showModal, reloadAll}) => {

  const [newReview, setNewReview] = useState({
    rating: '',
    recommend: '',
    characteristics: {},
    summary: '',
    body: '',
    name: '',
    email: '',
    photos: [],
    product_id:product_id
  });

  const [allowSubmit, setAllowSubmit] = useState(false);


  const submitForm = () => {
    axios.post('/reviews', newReview)
    .then((res) => {
      if(res.data === 'Created') {
        console.log('posted review');
        showModal();
        reloadAll();
      }
    })
  }

  const updateForm = (e) => {
    let newObject = { ...newReview };
    newObject[e.target.name] = e.target.value;
    setNewReview(newObject);
  }

  const handleStarRatingSelect = (e) => {
    if(e.target.value !== 'Select Star Rating') {
      let newObject = { ...newReview };
      newObject.rating = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }

  const handleRecommendSelect = (e) => {
      let newObject = { ...newReview };
      let map = {
        true: true,
        false: false,
      };
      newObject.recommend = map[e.target.value];
      setNewReview(newObject);
  }

  const handleSizeSelect = (e) => {
    if(e.target.value !== 'Size') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Size.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }
  const handleWidthSelect = (e) => {
    if(e.target.value !== 'Width') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Width.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }
  const handleComfortSelect = (e) => {
    if(e.target.value !== 'Comfort') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Comfort.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }
  const handleQualitySelect = (e) => {
    if(e.target.value !== 'Quality') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Quality.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }
  const handleLengthSelect = (e) => {
    if(e.target.value !== 'Length') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Length.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }

  const handleFitSelect = (e) => {
    if(e.target.value !== 'Fit') {
      let newObject = { ...newReview};
      let characteristic_id = review_meta.characteristics.Fit.id;
      newObject.characteristics[characteristic_id] = parseInt(e.target.value);
      setNewReview(newObject);
    }
  }

  return (

    <div className={styles.addReview}>
      <div className={styles.addReviewHeader}>
        <h3> Write Your Review</h3>
        <span className={styles.closeReview} onClick={showModal}> X </span>
      </div>
      <div className={styles.reviewForm}>
        <div className={styles.starRatingSelect}>
          <div>
            <label> Overall Rating</label>
          </div>
          <select onChange={handleStarRatingSelect} required>
            <option value="Select Star Rating">Select Star Rating</option>
            <option value="1">1 star - Poor </option>
            <option value="2">2 stars - Fair</option>
            <option value="3">3 stars - Average</option>
            <option value="4">4 stars - Good</option>
            <option value="5">5 stars - Great</option>
          </select>
        </div>
        <div className={styles.recommendSelect}>
          <div>
            <label> Do you Recommend this product?</label>
          </div>
          <div>
            <input type="radio" name="recommendSelect" value="true" onChange={handleRecommendSelect} required></input>
            <label> I recommend this product </label>
            <input type="radio" name="recommendSelect" value="false" onChange={handleRecommendSelect} ></input>
            <label> I don't recommend this product</label>
          </div>
        </div>
        <div>
          <label> Characteristics</label>
        </div>
        <div className={styles.reviewFormCharacteristics}>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Size ? <select name="Size" onChange={handleSizeSelect} required>
            <option value="Size">Size</option>
            <option value="1">A size too small </option>
            <option value="2">Half a size too small</option>
            <option value="3">Perfect</option>
            <option value="4">Half a size too big</option>
            <option value="5">A size too wide</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Width ? <select name="width" onChange={handleWidthSelect} required>
            <option value="Width">Width</option>
            <option value="1">Too narrow </option>
            <option value="2">Slightly narrow</option>
            <option value="3">Perfect</option>
            <option value="4">Slightly wide</option>
            <option value="5">Too wide</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Comfort ? <select name="Comfort" onChange={handleComfortSelect} required>
            <option value="Comfort">Comfort</option>
            <option value="1">Uncomfortable </option>
            <option value="2">Slightly Uncomfortable</option>
            <option value="3">Ok</option>
            <option value="4">Comfortable</option>
            <option value="5">Perfect</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Quality ? <select name="Quality" onChange={handleQualitySelect} required>
            <option value="Quality">Quality</option>
            <option value="1">Below Average</option>
            <option value="3">What I expected</option>
            <option value="4">Pretty great</option>
            <option value="5">Perfect</option>
          </select> : <div></div> }
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Length ? <select name="Length" onChange={handleLengthSelect} required>
            <option value="Length">Length</option>
            <option value="1">Runs Short </option>
            <option value="2">Runs slightly short</option>
            <option value="3">Perfect</option>
            <option value="4">Runs Slightly long</option>
            <option value="5">Runs long</option>
          </select> : <div></div>}
          </div>
          <div>
            {review_meta !== 0 && review_meta.characteristics.Fit ? <select name="Fit" onChange={handleFitSelect} required>
            <option value="Fit">Fit</option>
            <option value="1">Runs Tight</option>
            <option value="2">Runs slightly tight</option>
            <option value="3">Perfect</option>
            <option value="4">Runs slightly long</option>
            <option value="5">Runs long</option>
          </select> : <div></div> }
          </div>
        </div>


        <label> Review Summary</label>
        <input name="summary" maxLength="60" onChange={updateForm}/>
        <label> Review Body</label>
        <input name="body" maxLength="1000" required onChange={updateForm}/>
        <label> Display Name</label>
        <label> For privacy reasons do not use your full name or email address</label>
        <input name="name"  maxLength="60" required onChange={updateForm}/>
        <label> Email </label>
        <label> For authentication reasons, you will not be emailed</label>
        <input name="email" type="email" maxLength="60" required onChange={updateForm}/>
        <button onClick={submitForm}> Submit Review</button>
      </div>
    </div>
  )

}




export default AddReview;