// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // Only update the `/projects` page.
    if (page.path.match(/^\/projects/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/projects/*"
      // Update the page.
      createPage(page)
    }
    if (page.path.match(/^\/profile/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/profile/*"
      // Update the page.
      createPage(page)
    }    
  }