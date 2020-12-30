import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalStateContext } from '../context/GlobalContextProvider';

import Header from "./Header";

function Layout({ children }) {
  const themeState = useContext(GlobalStateContext);

  let style = themeState.theme === 'light' ? 'flex flex-col min-h-screen font-sans text-gray-900 bg-white' : 'flex flex-col min-h-screen font-sans text-gray-100 bg-gray-800';

  return (
    <div className={style}>
      <Header />

      <main className="">
        {children}
      </main>

      {/* <footer className="text-center pt-8 pb-6">
        <div className="font-semibold py-1">
          Built by {' '}
          <a
            href="https://twitter.com/deepwhitman"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 font-bold text-lg"
          >
            Bilal Tahir
        </a>
        </div>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
