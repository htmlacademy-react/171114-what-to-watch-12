import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="user-page">
      <Helmet>
        <title>What to watch. Not found</title>
      </Helmet>
      <header className="page-header user-page__head">
        <h1 className="page-title user-page__title">404. Page not found</h1>
      </header>
      <Footer />
    </section>
  );
}

export default NotFoundScreen;
