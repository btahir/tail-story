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
                <path d="M314.335,3.84515 L314.335,-376.053 C314.335,-585.996 144.381,-755.95 -65.563,-755.95 C-275.506,-755.95 -445.461,-585.996 -445.461,-376.053 C-445.461,-166.109 -275.506,3.84513 -65.563,3.84513 L314.335,3.84515 Z M144.216,-339.699 C124.126,-223.768 14.0139,-146.183 -101.917,-166.273 C-217.848,-186.364 -295.433,-296.476 -275.342,-412.406 C-255.252,-528.337 -145.14,-605.922 -29.2091,-585.832 C86.7216,-565.742 164.307,-455.629 144.216,-339.699 Z " fill="#4FD1C5" fillOpacity="1.00" />			
                <path d="M-62.4869,758.335 C145.919,758.335 314.335,589.919 314.335,381.513 L314.335,-1.46056 L-68.6391,-1.46058 C-277.045,-1.46058 -445.461,166.956 -445.461,375.361 L-445.461,758.335 L-62.4869,758.335 Z " fill="#4FD1C5" fillOpacity="1.00" />		
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
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
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
