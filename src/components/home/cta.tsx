export function CallToActionSection() {
	return (
		<section className="relative py-32 bg-white overflow-hidden">
			{/* Dynamic background elements */}
			<div className="absolute inset-0">
				{/* Animated gradient orbs */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-t from-pink-500/5 to-yellow-500/5 rounded-full blur-2xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2"></div>
				
				{/* Grid pattern overlay */}
				<div className="absolute inset-0 opacity-5">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
						backgroundSize: '48px 48px'
					}}></div>
				</div>
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				<div className="text-center">
					{/* Status indicator */}
					<div className="flex justify-center items-center gap-3 mb-12">
						<div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
						<span className="text-gray-600 font-medium tracking-widest text-sm uppercase">
							Join The Revolution
						</span>
						<div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
					</div>

					{/* Main headline with dramatic typography */}
					<div className="space-y-8 mb-16">
						<h2 className="text-7xl lg:text-9xl font-black leading-none tracking-tight">
							<div className="text-gray-900 mb-4">
								Never Miss
							</div>
							<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 -mt-6">
								The Action
							</div>
						</h2>
						
						<div className="max-w-4xl mx-auto space-y-6">
							<p className="text-2xl text-gray-600 leading-relaxed font-light">
								Get exclusive access to the latest automotive insights, reviews, and industry secrets straight from Cebu's premier auto experts.
							</p>
							<p className="text-lg text-gray-500 leading-relaxed">
								Join thousands of automotive enthusiasts who trust CebuAutoBlog for cutting-edge content and unparalleled expertise.
							</p>
						</div>
					</div>

					{/* Interactive CTA area */}
					<div className="space-y-12">
						{/* Primary action with enhanced styling */}
						<div className="flex flex-col lg:flex-row items-center justify-center gap-8">
							<a
								href="/contacts"
								className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25"
							>
								<span className="relative z-10 flex items-center gap-3">
									Subscribe Now
									<svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</span>
								
								{/* Animated background effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
							</a>

							{/* Secondary action */}
							<a
								href="/blog"
								className="group border-2 border-gray-600 text-gray-300 px-12 py-6 rounded-2xl font-semibold text-xl hover:border-orange-500 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
							>
								<span className="flex items-center gap-3">
									Explore Articles
									<svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</span>
							</a>
						</div>

						{/* Benefits showcase */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
							<div className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2">
								<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
									Instant Updates
								</h3>
								<p className="text-gray-600 leading-relaxed">
									Get the latest automotive news and reviews delivered straight to your inbox within minutes of publication.
								</p>
							</div>

							<div className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
									Expert Insights
								</h3>
								<p className="text-gray-600 leading-relaxed">
									Access exclusive content from Cebu's top automotive experts and industry professionals.
								</p>
							</div>

							<div className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2">
								<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors duration-300">
									Community Access
								</h3>
								<p className="text-gray-600 leading-relaxed">
									Join an exclusive community of automotive enthusiasts and connect with like-minded individuals.
								</p>
							</div>
						</div>

						{/* Social proof */}
						<div className="mt-20 pt-12 border-t border-gray-200">
							<div className="text-center mb-8">
								<p className="text-gray-600 text-lg mb-6">
									Trusted by automotive enthusiasts across the Philippines
								</p>
							</div>
							
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								<div className="text-center">
									<div className="text-4xl font-black text-gray-900 mb-2">50K+</div>
									<div className="text-gray-500 text-sm uppercase tracking-wider">Active Subscribers</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-black text-orange-500 mb-2">99%</div>
									<div className="text-gray-500 text-sm uppercase tracking-wider">Satisfaction Rate</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-black text-gray-900 mb-2">Daily</div>
									<div className="text-gray-500 text-sm uppercase tracking-wider">Fresh Content</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-black text-red-500 mb-2">24/7</div>
									<div className="text-gray-500 text-sm uppercase tracking-wider">Support</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom accent line */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
			
			{/* Floating elements for extra visual interest */}
			<div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100"></div>
			<div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
			<div className="absolute bottom-20 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-500"></div>
		</section>
	)
}