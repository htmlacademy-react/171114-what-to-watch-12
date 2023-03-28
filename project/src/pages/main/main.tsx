import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import Footer from '../../components/footer/footer';
import { renderedFilmsInc } from '../../store/action';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const renderedFilmsCount = useAppSelector((state) => state.renderedFilmsCount);
  const [isShowMore, setIsShowMore] = useState(true);
  const handleClick = () => {
    dispatch(renderedFilmsInc());
  };

  useEffect(() => {
    if (filmsCount > renderedFilmsCount) {
      setIsShowMore(true);
      return;
    }
    setIsShowMore(false);

  }, [renderedFilmsCount, filmsCount]);

  return (
    <div className="page-content">
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <FilmsList />

        {isShowMore && <ShowMore handleClick={handleClick}/>}
      </section>

      <Footer />
    </div>
  );
}

export default Main;
