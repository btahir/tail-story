import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainProfile from "../components/MainProfile";
import PublicProfile from "../components/PublicProfile";
import { Router } from "@reach/router";

function Profile() {

  return (
    <Layout>
      <SEO title="Profile" />
      <Router basepath="/profile">
        <MainProfile path="/" />
        <PublicProfile path=":profileId" />
      </Router>
    </Layout>
  );
}

export default Profile;
