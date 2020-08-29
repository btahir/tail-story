import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);  

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center no-underline">
            <svg
              className="w-8 h-8 fill-current"
              height="54"
              viewBox="0 0 86 100"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M58.7373 71.48H70.5933V77H51.1053V71.576L62.7213 55.928H51.1533V50.408H70.4493V55.832L58.7373 71.48Z" fill="#4FD1C5"/>
              <path d="M48.832 70.856C47.8933 74.0987 46.5493 76.5307 44.8 78.152C42.7093 80.072 39.8293 81.032 36.16 81.032C34.1973 81.032 32.2773 80.7333 30.4 80.136C28.5227 79.5387 26.1547 78.6 23.296 77.32C20.1387 75.9547 17.5573 74.9307 15.552 74.248L14.016 73.8C12.1813 74.44 10.4107 74.76 8.704 74.76C6.74133 74.76 5.76 74.3333 5.76 73.48C5.76 72.584 6.912 72.136 9.216 72.136C10.7093 72.136 12.3093 72.3067 14.016 72.648C15.3813 72.264 16.96 71.6667 18.752 70.856C19.8613 70.344 20.6933 69.9813 21.248 69.768C17.6213 69.4267 14.464 68.296 11.776 66.376C9.13067 64.456 7.06133 61.832 5.568 58.504C4.11733 55.1333 3.392 51.208 3.392 46.728C3.392 42.0347 4.24533 37.8747 5.952 34.248C7.70133 30.6213 10.112 27.8053 13.184 25.8C16.2987 23.7947 19.8187 22.792 23.744 22.792C27.7973 22.792 31.3387 23.7093 34.368 25.544C37.44 27.3787 39.808 30.0453 41.472 33.544C43.1787 37 44.032 41.1387 44.032 45.96C44.032 50.3973 43.264 54.3653 41.728 57.864C40.192 61.32 38.0373 64.0933 35.264 66.184C32.4907 68.232 29.312 69.4267 25.728 69.768V69.832C24.704 69.96 23.808 70.1307 23.04 70.344C22.3147 70.6 21.3333 70.984 20.096 71.496C18.56 72.1787 17.28 72.6693 16.256 72.968C20.992 73.9067 25.0027 74.6533 28.288 75.208C31.616 75.7627 34.368 76.04 36.544 76.04C39.5733 76.04 41.9627 75.592 43.712 74.696C45.504 73.8427 46.8907 72.4347 47.872 70.472L48.832 70.856ZM9.792 46.472C9.792 50.9093 10.4107 54.8133 11.648 58.184C12.928 61.5547 14.6347 64.1573 16.768 65.992C18.9013 67.8267 21.2907 68.744 23.936 68.744C26.6667 68.744 29.056 67.8053 31.104 65.928C33.1947 64.008 34.7947 61.3413 35.904 57.928C37.056 54.5147 37.632 50.6107 37.632 46.216C37.632 41.7787 36.992 37.8747 35.712 34.504C34.4747 31.1333 32.7893 28.5307 30.656 26.696C28.5227 24.8613 26.1333 23.944 23.488 23.944C20.7573 23.944 18.3467 24.904 16.256 26.824C14.208 28.7013 12.608 31.3467 11.456 34.76C10.3467 38.1733 9.792 42.0773 9.792 46.472Z" fill="#4FD1C5"/>         
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>        

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
            <a 
              href="https://gum.co/tIODA" 
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-teal-400 font-semibold"
              >
                Unlock 50 Quotes
            </a>          
        </nav>
      </div>
    </header>
  );
}

export default Header;
