import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function IndexPage() {

	return (
		<Layout>
			<SEO title="Home" />
			<main className="mx-auto mt-10 px-6 pb-12 bg-gradient-to-t from-indigo-200">
				<div className="text-center">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
						Data to enrich your
            <br />
						<span className="text-indigo-600">online business</span>
					</h2>
					<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
								Get started
              </button>
						</div>
						<div className="mt-3 sm:mt-0 sm:ml-3">
							<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-white hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
								Live demo
              </button>
						</div>
					</div>
				</div>
				<div className="mt-6 md:mt-10 pb-20">
					<img className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-120" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="main-img" />
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
				<div className="flex flex-wrap max-w-6xl mx-auto my-24">
					<div className="max-w-md mx-auto sm:w-1/2 p-6 self-center">
						<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
						<p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
					</div>
					<img className="w-full sm:w-1/2 sm:h-96 object-contain p-6" src="https://images.unsplash.com/photo-1599469803986-a6811c726ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="main-img" />
				</div>
				<div className="flex flex-wrap flex-col-reverse sm:flex-row max-w-6xl mx-auto my-24">
					<img className="w-full sm:w-1/2 sm:h-96 object-contain p-6" src="https://images.unsplash.com/photo-1599469803986-a6811c726ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="main-img" />
					<div className="max-w-md mx-auto sm:w-1/2 p-6 self-center">
						<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
						<p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-8">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p>
						<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							A better way to send money
            </h3>
						<p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
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
										<h4 className="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
										<h4 className="text-lg leading-6 font-medium text-gray-900">No hidden fees</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
										<h4 className="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
										<h4 className="text-lg leading-6 font-medium text-gray-900">Mobile notifications</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
						<span className="text-indigo-600">Start your free trial today.</span>
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
