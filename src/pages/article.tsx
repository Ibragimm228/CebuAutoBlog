import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
	const { slug } = useParams()

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	if (isArticleLoading || isArticlesLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
				{/* Advanced Loading Animation */}
				<div className="absolute inset-0">
					{/* Animated geometric shapes */}
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
					<div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-l from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
					<div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-t from-pink-400/20 to-purple-500/20 rounded-full blur-lg animate-pulse delay-300"></div>
				</div>
				
				<Container>
					<div className="flex items-center justify-center min-h-screen">
						<div className="text-center space-y-8">
							{/* Loading spinner with glow effect */}
							<div className="relative mx-auto w-20 h-20">
								<div className="absolute inset-0 rounded-full border-4 border-orange-500/30"></div>
								<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 animate-spin"></div>
								<div className="absolute inset-2 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin animate-reverse"></div>
							</div>
							
							{/* Loading text */}
							<div className="space-y-4">
								<h2 className="text-3xl font-bold text-white">Loading Article</h2>
								<p className="text-gray-400">Preparing premium automotive content...</p>
								
								{/* Progress indicators */}
								<div className="flex justify-center space-x-2 mt-6">
									<div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
									<div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100"></div>
									<div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}

	if (!article) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
				<Container>
					<div className="text-center space-y-6">
						<div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
							<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.313 16.5c-.77.833.192 2.5 1.732 2.5z" />
							</svg>
						</div>
						<h2 className="text-4xl font-bold text-white">Article Not Found</h2>
						<p className="text-gray-400 text-lg">The requested automotive content could not be located.</p>
						<a 
							href="/blog" 
							className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
						>
							Browse Articles
						</a>
					</div>
				</Container>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
			{/* Dynamic background elements */}
			<div className="fixed inset-0 pointer-events-none">
				{/* Floating geometric shapes */}
				<div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
				<div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-1000"></div>
				<div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-500"></div>
				<div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float delay-700"></div>
				
				{/* Gradient orbs */}
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-l from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-transparent rounded-full blur-3xl"></div>
			</div>

			{/* Main content wrapper */}
			<div className="relative">
				{/* Hero section with article header */}
				<div className="relative py-12 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
					{/* Background pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute inset-0" style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						}}></div>
					</div>
					
					{/* Animated accent lines */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
					<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
					
					<Container>
						<div className="relative z-10">
							<ArticleHeader article={article} />
						</div>
					</Container>
				</div>

				{/* Main article content */}
				<Container>
					<div className="relative py-16">
						{/* Advanced grid layout */}
						<div className="grid grid-cols-1 xl:grid-cols-12 2xl:grid-cols-16 gap-8 lg:gap-12">
							{/* Primary content column */}
							<div className="xl:col-span-8 2xl:col-span-10 space-y-8">
								{/* Navigation with enhanced styling */}
								<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
									<ArticleNavigation currentArticle={article} articles={articles} />
								</div>

								{/* Main article content with sophisticated styling */}
								<div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
									{/* Content wrapper with inner glow */}
									<div className="relative">
										{/* Subtle gradient overlay */}
										<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
										
										{/* Article content */}
										<div className="relative p-8 lg:p-12">
											<ArticleContent article={article} />
										</div>
										
										{/* Bottom accent */}
										<div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
									</div>
								</div>

								{/* Related content teaser */}
								<div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-200/50">
									<div className="text-center space-y-4">
										<h3 className="text-2xl font-bold text-gray-900">Explore More Automotive Excellence</h3>
										<p className="text-gray-600">Discover more premium content from CebuAutoBlog's expert team.</p>
										<a 
											href="/blog" 
											className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
										>
											Browse Articles 
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</a>
									</div>
								</div>
							</div>

							{/* Secondary content sidebar */}
							<div className="xl:col-span-4 2xl:col-span-6 space-y-8">
								{/* Sidebar wrapper with glass effect */}
								<div className="sticky top-8 space-y-8">
									{/* Comments section with modern styling */}
									<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
										<div className="bg-gradient-to-r from-gray-900 to-slate-800 p-6">
											<h3 className="text-xl font-bold text-white flex items-center gap-2">
												<svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
												</svg>
												Comments & Discussion
											</h3>
										</div>
										<div className="p-6">
											<ArticleComments article={article} />
										</div>
									</div>

									{/* Latest articles with card design */}
									<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
										<div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
											<h3 className="text-xl font-bold text-white flex items-center gap-2">
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												Latest Articles
											</h3>
										</div>
										<div className="p-6">
											<ArticleLatest articles={articles} />
										</div>
									</div>

									{/* Popular articles */}
									<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
										<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
											<h3 className="text-xl font-bold text-white flex items-center gap-2">
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
												</svg>
												Popular This Week
											</h3>
										</div>
										<div className="p-6">
											<ArticlePopular articles={articles} />
										</div>
									</div>

									{/* Featured articles */}
									<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
										<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
											<h3 className="text-xl font-bold text-white flex items-center gap-2">
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
												</svg>
												Editor's Choice
											</h3>
										</div>
										<div className="p-6">
											<ArticleFeatured articles={articles} />
										</div>
									</div>

									{/* Newsletter signup */}
									<div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
										{/* Background pattern */}
										<div className="absolute inset-0 opacity-10">
											<div className="absolute inset-0" style={{
												backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30'/%3E%3C/g%3E%3C/svg%3E")`,
											}}></div>
										</div>
										
										<div className="relative space-y-4">
											<h3 className="text-xl font-bold">Stay Updated</h3>
											<p className="text-gray-300 text-sm">Get the latest automotive insights delivered to your inbox.</p>
											<a 
												href="/contacts" 
												className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-center py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
											>
												Subscribe Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>

			{/* Custom animations */}
			<style >{`
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					33% { transform: translateY(-10px) rotate(120deg); }
					66% { transform: translateY(5px) rotate(240deg); }
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-reverse {
					animation-direction: reverse;
				}
			`}</style>
		</div>
	)
}