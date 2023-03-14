import React from 'react';
import { useState, ChangeEventHandler } from 'react';

function AddReviewForm(): JSX.Element {
  const items = [...Array(10).keys()];

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  const textChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, reviewText: event.target.value});
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            items.map((it) => (
              <React.Fragment key={it + 1}>
                <input className="rating__input" onChange={() => setFormData({...formData, rating: 10 - it})} value={formData.rating} id={`${it + 1}`} type="radio" name="rating" />
                <label className="rating__label" htmlFor={`${it + 1}`}>Rating {it + 1} </label>
              </React.Fragment>))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" onChange={textChangeHandler} value={formData.reviewText} name="review-text" id="review-text" placeholder="Review text">
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;


