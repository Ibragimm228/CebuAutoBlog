import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon, Filter, Grid, List, Sparkles, TrendingUp } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import { useState } from 'react'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()
	const [viewMode, setViewMode] = useState('grid')

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
				{/* Enhanced Loading State */}
				<div className="relative py-32 overflow-hidden">
					{/* Animated background elements */}
					<div className="absolute inset-0">
						<div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
					</div>

					<Container>
						<div className="text-center space-y-8">
							{/* Loading header */}
							<div className="space-y-6">
								<div className="flex justify-center items-center gap-3 mb-8">
									<div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
									<span className="text-gray-400 font-medium tracking-wider text-sm uppercase">
										Loading Premium Content
									</span>
								</div>
								
								<div className="w-96 h-16 bg-gray-200 rounded-2xl animate-pulse mx-auto"></div>
								<div className="w-64 h-8 bg-gray-100 rounded-xl animate-pulse mx-auto"></div>
							</div>

							{/* Loading grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
								{Array.from({ length: 6 }).map((_, index) => (
									<div key={index} className="relative group">
										<div className="bg-white rounded-3xl shadow-xl p-6 h-96 animate-pulse">
											<div className="w-full h-48 bg-gray-200 rounded-2xl mb-4"></div>
											<div className="space-y-3">
												<div className="w-20 h-6 bg-gray-200 rounded-full"></div>
												<div className="w-full h-6 bg-gray-200 rounded"></div>
												<div className="w-3/4 h-6 bg-gray-200 rounded"></div>
												<div className="w-1/2 h-4 bg-gray-100 rounded mt-4"></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</Container>
				</div>
			</div>
		)
	}

	if (isError) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
				<div className="relative py-32 overflow-hidden">
					<Container>
						<div className="text-center space-y-8">
							{/* Error state with better design */}
							<div className="max-w-2xl mx-auto">
								<div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
									<XIcon className="w-12 h-12 text-white" />
								</div>
								
								<h1 className="text-4xl font-black text-gray-900 mb-4">
									Oops! Something went wrong
								</h1>
								<p className="text-lg text-gray-600 mb-8">
									We're having trouble loading our premium automotive content. Please try again in a moment.
								</p>
								
								<div className="flex justify-center gap-4">
									<button 
										onClick={() => window.location.reload()}
										className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
									>
										Try Again
									</button>
									<Link 
										to="/"
										className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-red-500 hover:text-red-600 transition-all duration-300"
									>
										Go Home
									</Link>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
			{/* Hero Section */}
			<div className="relative py-24 overflow-hidden">
				{/* Dynamic background elements */}
				<div className="absolute inset-0">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
					
					{/* Grid pattern */}
					<div className="absolute inset-0 opacity-5">
						<div className="w-full h-full" style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
							backgroundSize: '48px 48px'
						}}></div>
					</div>
				</div>

				<Container>
					<div className="relative text-center">
						{/* Status indicator */}
						<div className="flex justify-center items-center gap-3 mb-12">
							<div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
							<span className="text-gray-600 font-medium tracking-widest text-sm uppercase">
								Premium Automotive Content
							</span>
							<div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse delay-300"></div>
						</div>

						{/* Main headline */}
						<div className="space-y-8 mb-16">
							<h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
								<div className="text-gray-900 mb-2">
									Discover
								</div>
								<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 -mt-4">
									Automotive
								</div>
								<div className="text-gray-400 text-2xl lg:text-4xl font-medium mt-2">
									Excellence
								</div>
							</h1>
							
							<div className="max-w-3xl mx-auto">
								<p className="text-xl text-gray-600 leading-relaxed">
									Explore CebuAutoBlog's comprehensive collection of expert automotive content, reviews, and industry insights.
								</p>
							</div>
						</div>

						{/* Filter indicator */}
						{type && (
							<div className="flex justify-center mb-8">
								<div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 shadow-xl">
									<Filter className="w-5 h-5 text-orange-500" />
									<span className="text-gray-600 font-medium">Filtered by:</span>
									<div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-semibold">
										<span className="truncate max-w-48">{type}</span>
										<Link to='/blog' className="hover:bg-white/20 rounded-full p-1 transition-colors duration-200">
											<XIcon className="w-4 h-4" />
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				</Container>
			</div>

			{/* Control Bar */}
			<div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
				<Container>
					<div className="py-6">
						<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
							{/* View controls */}
							<div className="flex items-center gap-4 ml-auto">
								<div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
									<button
										onClick={() => setViewMode('grid')}
										className={`p-2 rounded-lg transition-all duration-200 ${
											viewMode === 'grid' 
												? 'bg-white shadow-sm text-orange-500' 
												: 'text-gray-500 hover:text-gray-700'
										}`}
									>
										<Grid className="w-5 h-5" />
									</button>
									<button
										onClick={() => setViewMode('list')}
										className={`p-2 rounded-lg transition-all duration-200 ${
											viewMode === 'list' 
												? 'bg-white shadow-sm text-orange-500' 
												: 'text-gray-500 hover:text-gray-700'
										}`}
									>
										<List className="w-5 h-5" />
									</button>
								</div>

								{/* Results count */}
								<div className="flex items-center gap-2 text-sm text-gray-600">
									<Sparkles className="w-4 h-4 text-orange-500" />
									<span className="font-medium">
										{filteredArticles?.length || 0} Articles
									</span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>

			{/* Articles Section */}
			<div className="relative py-16">
				<Container>
					{filteredArticles && filteredArticles.length > 0 ? (
						<div className={`
							${viewMode === 'grid' 
								? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
								: 'space-y-6'
							}
						`}>
							{filteredArticles.map((article, index) => (
								<div 
									key={article.id}
									className={`
										group relative transform transition-all duration-500 hover:scale-105
										${viewMode === 'list' ? 'bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl' : ''}
									`}
									style={{
										animationDelay: `${index * 100}ms`,
										animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
									}}
								>
									{/* Enhanced article card wrapper */}
									<div className="relative">
										<ArticleCardMedium article={article} />
										
										{/* Trending indicator for popular articles */}
										{index < 3 && (
											<div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
												<TrendingUp className="w-3 h-3" />
												Hot
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					) : (
						/* Enhanced empty state */
						<div className="text-center py-20">
							<div className="max-w-2xl mx-auto">
								
								
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									No Articles Found
								</h3>
								<p className="text-lg text-gray-600 mb-8">
									{type 
										? `No articles found for category "${type}".`
										: 'No articles available at the moment.'
									}
								</p>
								
								<div className="flex justify-center gap-4">
									{type && (
										<Link
											to="/blog"
											className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
										>
											View All Articles
										</Link>
									)}
								</div>
							</div>
						</div>
					)}
				</Container>
			</div>

			{/* Bottom accent */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
			
			{/* Add keyframes for animations */}
			<style >{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	)
}