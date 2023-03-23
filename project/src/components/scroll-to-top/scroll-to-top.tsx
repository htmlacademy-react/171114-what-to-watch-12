import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = ({ children }: { children: JSX.Element }): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    if (
      ['overview', 'details', 'reviews']
        .map((it) => location.pathname.includes(it))
        .filter((it) => it).length
    ) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default ScrollToTop;
