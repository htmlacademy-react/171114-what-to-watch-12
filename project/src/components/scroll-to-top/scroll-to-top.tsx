import {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const ScrollToTop = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (
      ['overview', 'details', 'reviews']
        .map((it) => location.pathname.includes(it))
        .filter((it) => it).length ||
        searchParams.has('genre')
    ) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location, searchParams]);

  return children;
};

export default ScrollToTop;
