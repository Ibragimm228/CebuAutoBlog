import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className="relative py-32 bg-white overflow-hidden">
			{/* Dynamic animated background elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Floating geometric shapes */}
				<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-3xl rotate-45 animate-pulse"></div>
				<div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-bl from-blue-200/15 to-purple-200/15 rounded-full animate-bounce delay-1000"></div>
				<div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-tr from-pink-200/10 to-yellow-200/10 rounded-2xl rotate-12 animate-pulse delay-500"></div>
				<div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-tl from-green-200/15 to-teal-200/15 rounded-full animate-bounce delay-300"></div>
				
				{/* Gradient orbs */}
				<div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-orange-100/30 to-red-100/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-l from-blue-100/25 to-purple-100/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
				
				{/* Grid pattern overlay */}
				<div className="absolute inset-0 opacity-[0.02]">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
						backgroundSize: '60px 60px'
					}}></div>
				</div>
			</div>

			<div className="relative max-w-8xl mx-auto px-6 lg:px-8">
				{/* Revolutionary header design */}
				<div className="text-center mb-24">
					{/* Status indicator with enhanced styling */}
					<div className="flex justify-center items-center gap-4 mb-12">
						<div className="w-3 h-20 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full animate-pulse"></div>
						<span className="text-gray-600 font-bold tracking-[0.2em] text-sm uppercase bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
							Fresh From The Press
						</span>
						<div className="w-3 h-20 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-pulse delay-300"></div>
					</div>

					{/* Dramatic typography with multi-layered design */}
					<div className="space-y-8">
						<div className="relative">
							<h2 className="text-7xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-tight">
								<div className="text-gray-900 mb-2">Latest</div>
								<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-500 -mt-8 relative">
									Stories
									{/* Decorative accent behind text */}
									<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 blur-3xl -z-10 scale-150"></div>
								</div>
								<div className="text-gray-300 text-3xl lg:text-5xl xl:text-6xl font-light mt-4 tracking-wide">
									That Drive Innovation
								</div>
							</h2>
							
							{/* Floating accent elements */}
							<div className="absolute -top-8 -right-8 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
							<div className="absolute top-1/2 -left-6 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-500"></div>
						</div>

						{/* Enhanced description with better spacing */}
						<div className="max-w-4xl mx-auto space-y-6 px-4">
							<p className="text-2xl text-gray-600 leading-relaxed font-light">
								Discover the cutting-edge automotive content that's reshaping the industry landscape across the Philippines and beyond.
							</p>
							<p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
								From groundbreaking reviews to exclusive insider perspectives, dive into the stories that matter most to serious automotive enthusiasts.
							</p>
						</div>
					</div>

					{/* Interactive elements */}
					<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
						<div className="group flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-100 transition-all duration-300">
							<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
							<span className="text-sm font-medium text-gray-700">Live Updates</span>
						</div>
						<div className="group flex items-center gap-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full px-6 py-3 hover:from-orange-100 hover:to-red-100 transition-all duration-300">
							<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							<span className="text-sm font-medium text-orange-700">Premium Content</span>
						</div>
					</div>
				</div>

				{/* Revolutionary articles grid */}
				<div className="relative">
					{/* Decorative elements around grid */}
					<div className="absolute -top-12 left-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
					<div className="absolute -bottom-12 right-0 w-32 h-1 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full"></div>

					{isLoading ? (
						<div className="grid gap-12 lg:grid-cols-2 xl:gap-16">
							{Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="group relative">
									{/* Enhanced skeleton with modern styling */}
									<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 h-96 border border-gray-200 overflow-hidden">
										{/* Animated skeleton background */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-pulse duration-1000"></div>
										
										<div className="space-y-6 relative z-10">
											{/* Image skeleton */}
											<div className="w-full h-48 bg-gray-200 rounded-2xl animate-pulse"></div>
											
											{/* Content skeleton */}
											<div className="space-y-4">
												<div className="flex gap-3">
													<div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
													<div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse delay-100"></div>
												</div>
												<div className="w-3/4 h-8 bg-gray-200 rounded-lg animate-pulse delay-200"></div>
												<div className="w-full h-4 bg-gray-200 rounded animate-pulse delay-300"></div>
												<div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse delay-400"></div>
											</div>
										</div>

										{/* Decorative corner accent */}
										<div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-200 to-red-200 rounded-full animate-pulse"></div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="grid gap-12 lg:grid-cols-2 xl:gap-16">
							{articles?.slice(3, 9).map((article, index) => (
								<div key={article.id} className="group relative">
									{/* Enhanced article card wrapper */}
									<div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-3 hover:scale-[1.02]">
										{/* Gradient overlay on hover */}
										<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
										
										{/* Corner decoration */}
										<div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
											<span className="text-white font-bold text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
												{index + 4}
											</span>
										</div>

										{/* Side accent line */}
										<div className="absolute left-0 top-1/2 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
										
										{/* Original article card with enhanced positioning */}
										<div className="relative z-10 p-2">
											<ArticleCardMedium article={article} />
										</div>

										{/* Bottom accent line */}
										<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									</div>

									{/* Floating number indicator */}
									<div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
										{String(index + 4).padStart(2, '0')}
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Enhanced bottom section */}
				<div className="mt-24 pt-16 border-t border-gray-200 relative">
					{/* Decorative elements */}
					<div className="absolute top-0 left-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
					
					<div className="text-center space-y-12">
						{/* Stats section with modern design */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="group text-center space-y-2">
								<div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
									1000+
								</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
									Quality Articles
								</div>
							</div>
							<div className="group text-center space-y-2">
								<div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
									Daily
								</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
									Fresh Updates
								</div>
							</div>
							<div className="group text-center space-y-2">
								<div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
									50K+
								</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
									Active Readers
								</div>
							</div>
							<div className="group text-center space-y-2">
								<div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 group-hover:scale-110 transition-transform duration-300">
									Expert
								</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
									Curated Content
								</div>
							</div>
						</div>

						{/* Call to action */}
						<div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-12 border border-gray-200">
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Craving More Automotive Excellence?
							</h3>
							<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
								Explore our complete archive of premium automotive content and discover why we're Cebu's #1 automotive authority.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="/blog"
									className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/25"
								>
									<span className="flex items-center gap-3">
										View All Articles
										<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</span>
								</a>
								<a
									href="/categories"
									className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300 hover:bg-orange-50"
								>
									<span className="flex items-center gap-3">
										Browse Categories
										<svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom accent line with enhanced gradient */}
			<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 via-red-500 via-pink-500 to-transparent"></div>
			
			{/* Additional floating decorative elements */}
			<div className="absolute top-1/4 left-8 w-2 h-2 bg-orange-500 rounded-full animate-ping delay-700"></div>
			<div className="absolute top-3/4 right-12 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-1000"></div>
			<div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-pink-500 rounded-full animate-ping delay-1300"></div>
		</section>
	)
}