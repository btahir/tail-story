import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import { auth, useAuth } from "gatsby-theme-firebase";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { isLoggedIn } = useAuth();
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
              viewBox="0 0 2048.0 2048.0"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)">			
                <path d="M445.945,-674.314 L445.945,-102.478 C445.945,144.278 246.756,343.467 -7.92415e-05,343.467 C-246.756,343.467 -445.945,144.278 -445.945,-102.478 L-445.945,-102.478 L-148.648,-102.478 L-148.648,-102.478 C-148.648,-20.7213 -81.7565,46.1704 -3.96681e-05,46.1704 C81.7565,46.1704 148.648,-20.7213 148.648,-102.478 L148.648,-674.314 L445.945,-674.314 Z " fill="#5A67D8" fillOpacity="1.00" />			
                <path d="M-461.948,369.011 L-577.434,484.497 C-258.691,803.241 258.691,803.241 577.434,484.497 L461.948,369.01 C206.722,624.237 -206.722,624.237 -461.948,369.011 Z " fill="#5A67D8" fillOpacity="1.00" strokeWidth="81.73" stroke="#5A67D8" strokeLinecap="square" strokeLinejoin="miter" />		
              </g>	         
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
              route: `/projects`,
              title: `Projects`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
            {
              route: `/profile`,
              title: `Profile`,
            }            
          ].map((link) => (
            <Link
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          {isLoggedIn ?
            <button
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button> :
            <Link
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              to="/login"
            >
              Login
            </Link>
          }
        </nav>
      </div>
    </header>
  );
}

export default Header;
