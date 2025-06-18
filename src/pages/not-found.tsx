export function NotFoundPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex items-center justify-center">
			{/* Dynamic animated background elements */}
			<div className="absolute inset-0">
				{/* Large animated gradient orbs */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-t from-pink-600/10 to-yellow-600/10 rounded-full blur-2xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2"></div>
				
				{/* Floating particles */}
				<div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
				<div className="absolute top-40 right-32 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
				<div className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-500 rounded-full animate-bounce delay-700"></div>
				<div className="absolute top-60 right-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-500"></div>
				
				{/* Grid pattern overlay */}
				<div className="absolute inset-0 opacity-5">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
						backgroundSize: '64px 64px'
					}}></div>
				</div>
				
				{/* Diagonal lines for extra visual interest */}
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform rotate-12"></div>
					<div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -rotate-12"></div>
				</div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
				{/* Status indicator */}
				<div className="flex justify-center items-center gap-4 mb-12">
					<div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
					<span className="text-gray-400 font-medium tracking-widest text-sm uppercase">
						CebuAutoBlog Error Handler
					</span>
					<div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
				</div>

				{/* Main 404 display with dramatic styling */}
				<div className="space-y-8 mb-16">
					{/* Massive 404 with gradient and effects */}
					<div className="relative">
						<h1 className="text-[20rem] sm:text-[25rem] lg:text-[30rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 drop-shadow-2xl">
							404
						</h1>
						{/* Glowing effect behind text */}
						<div className="absolute inset-0 text-[20rem] sm:text-[25rem] lg:text-[30rem] font-black leading-none tracking-tighter text-orange-500/20 blur-3xl -z-10">
							404
						</div>
					</div>

					{/* Modern error message */}
					<div className="space-y-6 max-w-4xl mx-auto">
						<h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
							<span className="text-gray-300">Oops!</span>
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
								Page Not Found
							</span>
						</h2>
						
						<div className="space-y-4">
							<p className="text-xl text-gray-300 leading-relaxed font-light">
								The automotive content you're looking for seems to have taken a detour. 
								Don't worry – our expert team at CebuAutoBlog has plenty more premium content waiting for you.
							</p>
							<p className="text-lg text-gray-400 leading-relaxed">
								Navigate back to discover the latest reviews, insights, and automotive excellence from Cebu's leading auto hub.
							</p>
						</div>
					</div>
				</div>

				{/* Enhanced action buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
					<a
						href="/"
						className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25"
					>
						<span className="relative z-10 flex items-center gap-3">
							<svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Return to Home
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
					</a>

					<a
						href="/blog"
						className="group border-2 border-gray-500 text-gray-300 px-12 py-6 rounded-2xl font-semibold text-xl hover:border-orange-500 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
					>
						<span className="flex items-center gap-3">
							Explore Articles
							<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>
					</a>
				</div>

				{/* Quick navigation cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					<a
						href="/blog"
						className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
							Latest Articles
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Discover premium automotive content and expert reviews from Cebu's top automotive professionals.
						</p>
					</a>

					<a
						href="/about"
						className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
							About Us
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Learn about CebuAutoBlog's mission to revolutionize automotive content in the Philippines.
						</p>
					</a>

					<a
						href="/contacts"
						className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
							Contact Us
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Get in touch with our expert team for inquiries, collaborations, or automotive discussions.
						</p>
					</a>
				</div>

				{/* Bottom stats/social proof */}
				<div className="mt-20 pt-12 border-t border-gray-700">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-3xl font-black text-white mb-2">50K+</div>
							<div className="text-gray-400 text-sm uppercase tracking-wider">Monthly Readers</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-black text-orange-500 mb-2">500+</div>
							<div className="text-gray-400 text-sm uppercase tracking-wider">Expert Reviews</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-black text-white mb-2">24/7</div>
							<div className="text-gray-400 text-sm uppercase tracking-wider">Fresh Content</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-black text-red-500 mb-2">#1</div>
							<div className="text-gray-400 text-sm uppercase tracking-wider">Auto Blog Cebu</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom gradient accent */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
		</div>
	)
}