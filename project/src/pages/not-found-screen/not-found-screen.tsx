import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="user-page">
      <Helmet>
        <title>What to watch. Not found</title>
      </Helmet>
      <header className="page-header user-page__head">
        <h1 className="page-title">404. Page not found</h1>
      </header>
      <Link to="/" className="page-title">Вернуться на главную</Link>
      <Footer />
    </section>
  );
}

export default NotFoundScreen;
