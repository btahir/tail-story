import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProjectDetail from "../components/ProjectDetail";
import MainProject from "../components/MainProject";
import { Router } from "@reach/router";

function Projects() {

	return (
		<Layout>
			<SEO title="Projects" />
			<Router basepath="/projects">
				<MainProject path="/" />
				<ProjectDetail path=":projectId" />
			</Router>
		</Layout>
	);
}

export default Projects;
