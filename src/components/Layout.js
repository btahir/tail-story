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

      <footer>
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
