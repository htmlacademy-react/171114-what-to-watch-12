import React, { FormEvent, useState, ChangeEventHandler } from 'react';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';

type AddReviewFormProps = { id: number };

function AddReviewForm({id}: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const items = [...Array(10).keys()].reverse();

  const [formData, setFormData] = useState({
    id,
    rating: 0,
    comment: '',
  });

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, comment: event.target.value});
  };

  const onAnswer = (data: ReviewData) => {
    dispatch(addReviewAction(data));
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onAnswer(formData);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            items.map((it) => (
              <React.Fragment key={it + 1}>
                <input className="rating__input" onChange={() => setFormData({...formData, rating: it + 1})} value={formData.rating} id={`star-${it + 1}`} type="radio" name="rating" />
                <label className="rating__label" htmlFor={`star-${it + 1}`}>Rating {it + 1} </label>
              </React.Fragment>))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" onChange={handleTextChange} value={formData.comment} name="review-text" id="review-text" placeholder="Review text">
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;


