import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import SmallCard from './components/small-card/small-card';

const cards = [];
for(let i = 0; i < 20; i++) {
  cards[i] = <SmallCard/>;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App smallCard={<SmallCard/>} />
  </React.StrictMode>,
);
