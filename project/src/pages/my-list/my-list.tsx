import Header from '../../components/header/header';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

        </div>
      </section>
    </div>
  );
}

export default MyList;
