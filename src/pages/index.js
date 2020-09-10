import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import mainImg from "../images/main-img.svg";
import howItWorks1 from "../images/how-it-works-1.svg";
import howItWorks2 from "../images/how-it-works-2.svg";
import howItWorks3 from "../images/how-it-works-3.svg";

function IndexPage() {

	return (
		<Layout>
			<SEO title="Home" />
			<main className="mx-auto mt-10 px-6 pb-12 bg-gradient-to-t from-indigo-200">
				<div className="text-center">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
						Find the perfect developer
            <br />
						<span className="text-indigo-600">through projects</span>
					</h2>
					<p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
						Hire people based on the work they've actually done rather than irrelevant and outdated credentials.
          </p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
								Get started
              </button>
						</div>
						<div className="mt-3 sm:mt-0 sm:ml-3">
							<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-white hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
								Learn more
              </button>
						</div>
					</div>
				</div>
				<div className="mt-6 md:mt-10 pb-20 md:mt-12">
					<img className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-120" src={mainImg} alt="main-img" />
				</div>
			</main>

			{/* divider */}
			<div className="relative">
				<div className="custom-shape-divider-bottom">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
					</svg>
				</div>
			</div>

			<div className="">
				<div className="flex flex-wrap max-w-6xl mx-auto md:my-12 lg:my-24">
					<div className="max-w-md mx-auto sm:w-1/2 p-6 self-center">
						<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Search for projects</h3>
						<p className="text-gray-500 mb-8">Find projects that match what you want to do.</p>
					</div>
					<img className="w-full sm:w-1/2 sm:h-96 object-contain p-6" src={howItWorks1} alt="how-it-works-1" />
				</div>
				<div className="flex flex-wrap flex-col-reverse sm:flex-row max-w-6xl mx-auto md:my-12 lg:my-24">
					<img className="w-full sm:w-1/2 sm:h-96 object-contain p-6"  src={howItWorks2} alt="how-it-works-2" />
					<div className="max-w-md mx-auto sm:w-1/2 p-6 self-center">
						<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Get more details</h3>
						<p className="text-gray-500 mb-8">Find out more about the project and its creator.</p>
					</div>
				</div>
				<div className="flex flex-wrap max-w-6xl mx-auto md:my-12 lg:my-24">
					<div className="max-w-md mx-auto sm:w-1/2 p-6 self-center">
						<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Connect with the developer</h3>
						<p className="text-gray-500 mb-8">Contact the project creator with opportunities if you feel like it is a good fit.</p>
					</div>
					<img className="w-full sm:w-1/2 sm:h-96 object-contain p-6"  src={howItWorks3} alt="how-it-works-3" />
				</div>
			</div>

			<div className="bg-gray-100 py-8">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							A better way to hire
            </h3>
						<p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 lg:mx-auto">
							Find awesome developers by focusing on the work they have done.
						</p>
					</div>

					<div className="mt-10">
						<ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							<li>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Better matches</h4>
										<p className="mt-2 text-base leading-6 text-gray-600">
											Find developers who are well versed in the technology stack you want to use and who have built projects that are close to what you want to build.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Find hidden gems</h4>
										<p className="mt-2 text-base leading-6 text-gray-600">
											Discover talented developers who are being ignored because of outdated hiring practices and biases.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Great value</h4>
										<p className="mt-2 text-base leading-6 text-gray-600">
											Get rising stars on your team for reasonable rates before they become super stars.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Faster onboarding</h4>
										<p className="mt-2 text-base leading-6 text-gray-600">
											Hire developers who can hit the ground running since they have already built something you want.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="">
				<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Ready to dive in?
						<br />
						<span className="text-indigo-600">Start exploring projects.</span>
					</h2>
					<div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
						<div className="inline-flex rounded-md shadow">
							<button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
								Get started
								</button>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
								Learn more
								</button>
						</div>
					</div>
				</div>
			</div>

		</Layout>
	);
}

export default IndexPage;
