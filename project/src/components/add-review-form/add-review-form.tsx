import React, { FormEvent, useState, ChangeEventHandler } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';
import { getFormStatus, getFormError } from '../../store/film-process/selectors';
import { MIN_TEXT_LENGHT, MAX_TEXT_LENGHT } from '../../const';

type AddReviewFormProps = { id: number };

function AddReviewForm({id}: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const items = [...Array(10).keys()].reverse();
  const isFormDisabled = useAppSelector(getFormStatus);
  const formError = useAppSelector(getFormError);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    id,
    rating: 0,
    comment: '',
  });

  if(formError){
    toast.error('We can’t recognize this review. Please try again.');
  }

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, comment: event.target.value});
    if(MIN_TEXT_LENGHT <= event.target.value.length && formData.rating !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onSendReview = (data: ReviewData) => {
    if(formData.comment.length >= MAX_TEXT_LENGHT) {
      toast.error('The length of the review should not be more than 400 characters');
    } else {
      dispatch(addReviewAction(data));
    }

  };

  return (
    <form
      action="#"
      method="post"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSendReview(formData);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            items.map((it) => (
              <React.Fragment key={it + 1}>
                <input className="rating__input"
                  onChange={() => setFormData({...formData, rating: it + 1})}
                  value={formData.rating}
                  id={`star-${it + 1}`}
                  type="radio"
                  name="rating"
                  disabled={isFormDisabled && true}
                />
                <label className="rating__label" htmlFor={`star-${it + 1}`}>Rating {it + 1} </label>
              </React.Fragment>))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          onChange={handleTextChange}
          value={formData.comment}
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isFormDisabled && true}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn"
            type="submit"
            disabled={(isDisabled || isFormDisabled) && true}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;


