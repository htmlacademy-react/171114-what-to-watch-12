type ShowMoreProps = {
  handleClick: () => void;
};

function ShowMore({ handleClick }: ShowMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button" type="button"
        onClick={handleClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
