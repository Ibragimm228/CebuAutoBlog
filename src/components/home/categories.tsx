import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section className="relative py-24 bg-white overflow-hidden">
			{/* Geometric accents similar to AboutSection */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-50 to-transparent rounded-full translate-y-32 translate-x-32"></div>
			
			<div className="max-w-7xl mx-auto px-6">
				<div className="relative">
					{/* Header section with AboutSection styling */}
					<div className="text-center mb-20">
						{/* Status indicator */}
						<div className="flex justify-center items-center gap-3 mb-8">
							<div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
							<span className="text-gray-600 font-medium tracking-wider text-sm uppercase">
								Content Categories Hub
							</span>
						</div>
						
						{/* Bold typography similar to AboutSection */}
						<div className="space-y-8 mb-12">
							<h2 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
								<div className="text-gray-900">Discover</div>
								<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -mt-4">
									Excellence
								</div>
								<div className="text-gray-400 text-2xl lg:text-4xl font-medium mt-2">
									by category
								</div>
							</h2>
							
							<div className="max-w-3xl mx-auto">
								<p className="text-xl text-gray-700 leading-relaxed mb-6">
									Navigate through CebuAutoBlog's expertly curated automotive content. Each category represents years of industry expertise and passion.
								</p>
								<p className="text-lg text-gray-600 leading-relaxed">
									From cutting-edge reviews to exclusive insights, find exactly what drives your automotive passion.
								</p>
							</div>
						</div>
					</div>

					{/* Categories Grid - innovative layout */}
					<div className="relative">
						{isLoading ? (
							/* Loading state */
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
								{Array.from({ length: 8 }).map((_, index) => (
									<div key={index} className="relative group">
										<div className="bg-gray-100 rounded-3xl p-6 h-80 animate-pulse flex flex-col overflow-hidden">
											<div className="space-y-4 flex-grow">
												<div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
												<div className="w-3/4 h-5 bg-gray-200 rounded"></div>
												<div className="w-1/2 h-3 bg-gray-200 rounded"></div>
											</div>
											<div className="mt-4 w-full h-8 bg-gray-200 rounded-lg"></div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
								{categories.map((category) => (
									<div 
										key={category}
										className="relative group"
									>
										{/* Main card container - фиксированная высота для всех карточек */}
										<div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 h-80 group-hover:-translate-y-2 flex flex-col overflow-hidden">
											
											{/* Corner badge */}
											<div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												Hot
											</div>
											
											{/* Category icon area */}
											<div className="mb-4">
												<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
													<span className="text-white font-black text-lg">
														{category?.charAt(0)?.toUpperCase() || 'C'}
													</span>
												</div>
											</div>
											
											{/* Category info - flex-grow заставляет занимать доступное пространство */}
											<div className="space-y-2 flex-grow">
												<h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
													{category}
												</h3>
												<p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
													Explore premium automotive content in {category?.toLowerCase()} category with expert insights and detailed analysis.
												</p>
											</div>
											
											{/* Action button - всегда будет внизу благодаря flex */}
											<div className="mt-4">
												<a
													href={`/blog?type=${encodeURIComponent(category || '')}`}
													className="w-full bg-black text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 text-center block group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 text-xs"
												>
													<span className="group-hover:hidden">Explore {category}</span>
													<span className="hidden group-hover:inline">View Articles →</span>
												</a>
											</div>
											
											{/* Side accent similar to AboutSection */}
											<div className="absolute -right-3 top-1/2 w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Bottom metrics section similar to AboutSection */}
					<div className="mt-20 pt-12 border-t border-gray-200">
						<div className="text-center mb-12">
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Why Choose CebuAutoBlog Categories?
							</h3>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Each category is meticulously crafted to deliver the most relevant and high-quality automotive content.
							</p>
						</div>
						
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-4xl font-black text-gray-900 mb-2">1000+</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider">Quality Articles</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-black text-orange-500 mb-2">Expert</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider">Curated Content</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider">Fresh Updates</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-black text-red-500 mb-2">Premium</div>
								<div className="text-gray-600 text-sm uppercase tracking-wider">Quality Standard</div>
							</div>
						</div>
					</div>

					{/* Call to action section */}
					<div className="mt-20 text-center">
						<div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
							<h3 className="text-3xl font-bold text-gray-900 mb-4">
								Ready to Dive Deeper?
							</h3>
							<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
								Explore our complete article archive or discover what's trending in the automotive world right now.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="/blog"
									className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
								>
									Browse All Articles
								</a>
								<a
									href="/trending"
									className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
								>
									What's Trending
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Bottom accent line similar to AboutSection */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
		</section>
	)
}