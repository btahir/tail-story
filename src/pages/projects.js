import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProjectDetail from "../components/ProjectDetail";
import Main from "../components/Main";
import { Router } from "@reach/router";

function Projects() {

	return (
		<Layout>
			<SEO title="Projects" />
			<Router basepath="/projects">
				<Main path="/" />
				<ProjectDetail path=":projectID" />
			</Router>
		</Layout>
	);
}

export default Projects;
