import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className="relative py-32 bg-white overflow-hidden">
			{/* Dynamic background effects */}
			<div className="absolute inset-0">
				{/* Animated mesh gradient */}
				<div className="absolute top-0 left-0 w-full h-full opacity-10">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-t from-pink-500/20 to-yellow-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
				</div>
				
				{/* Geometric pattern overlay */}
				<div className="absolute inset-0 opacity-5">
					<div className="w-full h-full" style={{
						backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 50%, transparent 60%), linear-gradient(-45deg, transparent 40%, rgba(0,0,0,0.05) 50%, transparent 60%)`,
						backgroundSize: '60px 60px'
					}}></div>
				</div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section with Premium Styling */}
				<div className="text-center mb-20">
					{/* Status Badge */}
					<div className="flex justify-center items-center gap-4 mb-8">
						<div className="w-3 h-20 bg-gradient-to-b from-orange-400 via-red-500 to-pink-500 rounded-full animate-pulse"></div>
						<div className="bg-gray-100 border border-gray-200 rounded-full px-6 py-3">
							<span className="text-gray-800 font-semibold tracking-widest text-sm uppercase">
								Editor's Choice
							</span>
						</div>
						<div className="w-3 h-20 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-500 rounded-full animate-pulse delay-300"></div>
					</div>

					{/* Main Headline */}
					<div className="space-y-6 mb-12">
						<h2 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
							<div className="text-gray-900 mb-2">
								Premium
							</div>
							<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 -mt-4">
								Content
							</div>
							<div className="text-gray-600 text-2xl lg:text-4xl font-light mt-4">
								Handpicked Excellence
							</div>
						</h2>
						
						<div className="max-w-4xl mx-auto space-y-4">
							<p className="text-xl text-gray-700 leading-relaxed">
								Discover CebuAutoBlog's most compelling stories - meticulously curated automotive content that defines industry standards and drives passion.
							</p>
						</div>
					</div>
				</div>

				{/* Articles Grid with Enhanced Design */}
				<div className="relative">
					{isLoading ? (
						/* Premium Loading State */
						<div className="grid gap-8 lg:grid-cols-3">
							{Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className="group relative">
									{/* Glassmorphism Loading Card */}
									<div className="relative bg-gray-50 border border-gray-200 rounded-lg p-8 h-96 animate-pulse">
										{/* Floating Badge */}
										<div className="absolute top-6 right-6 w-20 h-8 bg-gray-200 rounded-full"></div>
										
										{/* Content Skeleton */}
										<div className="space-y-6 h-full flex flex-col">
											<div className="w-full h-48 bg-gray-200 rounded-lg"></div>
											<div className="flex-grow space-y-4">
												<div className="w-3/4 h-6 bg-gray-200 rounded-lg"></div>
												<div className="w-full h-4 bg-gray-100 rounded"></div>
												<div className="w-2/3 h-4 bg-gray-100 rounded"></div>
											</div>
											<div className="w-full h-12 bg-gray-200 rounded-lg"></div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="grid gap-8 lg:grid-cols-3">
							{articles?.slice(0, 3).map((article, index) => (
								<div 
									key={article.id}
									className="group relative transform hover:-translate-y-2 transition-all duration-300"
									style={{ animationDelay: `${index * 200}ms` }}
								>
									{/* Article Card Container */}
									<div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm h-full">
										{/* Floating Premium Badge */}
										<div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
											Featured
										</div>

										{/* ArticleCardSmall */}
										<div className="relative h-full p-6">
											<ArticleCardSmall article={article} />
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Call-to-Action Section */}
				<div className="mt-24 text-center">
					<div className="relative bg-gray-50 border border-gray-200 rounded-lg p-12 overflow-hidden">
						{/* Background Pattern */}
						<div className="absolute inset-0 opacity-10">
							<div className="w-full h-full" style={{
								backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.1) 0%, transparent 50%)`,
								backgroundSize: '100px 100px'
							}}></div>
						</div>
						
						<div className="relative space-y-8">
							<div className="space-y-4">
								<h3 className="text-4xl font-bold text-gray-900">
									Craving More Premium Content?
								</h3>
								<p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
									Dive deeper into CebuAutoBlog's extensive collection of expert automotive content and discover what's driving the industry forward.
								</p>
							</div>
							
							<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
								<a
									href="/blog"
									className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
								>
									<span className="relative z-10 flex items-center gap-3">
										Explore All Articles
										<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</span>
								</a>

								<a
									href="/categories"
									className="group border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-lg font-semibold text-lg hover:border-orange-500 hover:bg-gray-50 transition-all duration-300"
								>
									<span className="flex items-center gap-3">
										Browse Categories
										<svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Statistics Bar */}
				<div className="mt-20 pt-12 border-t border-gray-200">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center group">
							<div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-orange-400 transition-colors duration-300">500+</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Premium Articles</div>
						</div>
						<div className="text-center group">
							<div className="text-4xl font-black text-orange-400 mb-2 group-hover:text-gray-900 transition-colors duration-300">Expert</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Curated Content</div>
						</div>
						<div className="text-center group">
							<div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-red-400 transition-colors duration-300">Daily</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Fresh Updates</div>
						</div>
						<div className="text-center group">
							<div className="text-4xl font-black text-red-400 mb-2 group-hover:text-gray-900 transition-colors duration-300">24/7</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Quality Assurance</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Accent Effects */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
			
			{/* Floating Animated Elements */}
			<div className="absolute top-32 left-12 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-100 opacity-60"></div>
			<div className="absolute top-48 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300 opacity-40"></div>
			<div className="absolute bottom-32 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-500 opacity-50"></div>
			<div className="absolute top-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700 opacity-30"></div>
		</section>
	)
}