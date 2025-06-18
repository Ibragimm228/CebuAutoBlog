import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import { Container } from './container'
import { useState, useEffect } from 'react'

const LINKS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
]

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Top announcement bar */}
			<div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 text-center text-sm font-medium overflow-hidden">
				<div className="animate-pulse">
					🔥 Latest automotive insights from Cebu's #1 auto blog - Fresh content daily!
				</div>
			</div>

			<header className={`sticky top-0 z-50 transition-all duration-500 ${
				isScrolled 
					? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10' 
					: 'bg-gradient-to-br from-gray-50 via-white to-blue-50/30'
			}`}>
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-orange-100/20 to-transparent rounded-full animate-pulse"></div>
					<div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full animate-pulse delay-1000"></div>
				</div>

				<Container>
					<div className="relative">
						{/* Main header content */}
						<div className="flex items-center justify-between py-6">
							{/* Logo section with enhanced styling */}
							<div className="flex items-center space-x-4">
								<div className="relative group">
									{/* Logo background glow */}
									<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
									
									{/* Logo container */}
									<div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-gray-200/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
										{/* Placeholder for logo - replace with actual Logo component */}
										<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
											<span className="text-white font-black text-xl">CA</span>
										</div>
									</div>
								</div>
								
								{/* Brand text */}
								<div className="hidden sm:block">
									<div className="text-2xl font-black text-gray-900 tracking-tight">
										CebuAuto<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Blog</span>
									</div>
									<div className="text-xs text-gray-500 font-medium tracking-wider uppercase">
										Cebu's Premier Auto Hub
									</div>
								</div>
							</div>

							{/* Desktop navigation */}
							<nav className="hidden lg:flex items-center space-x-8">
								{LINKS.map((item) => (
									<Link key={item.label} to={item.href}>
										<div className="group relative px-4 py-2">
											<span className="relative z-10 text-gray-700 font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
												{item.label}
											</span>
											{/* Hover background */}
											<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
											{/* Active indicator */}
											<div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
										</div>
									</Link>
								))}
								
							
							</nav>

							{/* Mobile menu button */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="lg:hidden relative w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
							>
								<div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
									<div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
									<div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
									<div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
								</div>
							</button>
						</div>

						{/* Categories bar - Desktop */}
						<div className="hidden lg:block border-t border-gray-200/50 pt-4 pb-2">
							{isLoading ? (
								<div className="flex justify-center space-x-6">
									{Array.from({ length: 6 }).map((_, index) => (
										<div
											key={index}
											className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"
										/>
									))}
								</div>
							) : (
								<div className="flex justify-center flex-wrap gap-4">
									{types.slice(0, 6).map((type) => (
										<Link
											key={type}
											to={`/blog?type=${encodeURIComponent(type || '')}`}
										>
											<div className="group relative px-4 py-2 bg-gray-100/70 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
												<span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
													{type}
												</span>
												{/* Hover accent */}
												<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											</div>
										</Link>
									))}
									{types.length > 6 && (
										<Link to="/blog">
											<div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-0.5">
												View All
											</div>
										</Link>
									)}
								</div>
							)}
						</div>
					</div>
				</Container>

				{/* Mobile menu overlay */}
				<div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
					isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}>
					<div className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transform transition-transform duration-300 ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
						{/* Mobile menu content */}
						<div className="p-6 h-full overflow-y-auto">
							{/* Mobile header */}
							<div className="flex items-center justify-between mb-8">
								<div className="text-xl font-black text-gray-900">
									Menu
								</div>
								<button
									onClick={() => setIsMenuOpen(false)}
									className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
								>
									<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>

							{/* Mobile navigation links */}
							<div className="space-y-4 mb-8">
								{LINKS.map((item) => (
									<Link
										key={item.label}
										to={item.href}
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="group p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300">
											<span className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">
												{item.label}
											</span>
										</div>
									</Link>
								))}
							</div>

							{/* Mobile categories */}
							<div className="mb-8">
								<h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
								{isLoading ? (
									<div className="space-y-2">
										{Array.from({ length: 4 }).map((_, index) => (
											<div
												key={index}
												className="h-10 bg-gray-200 rounded-lg animate-pulse"
											/>
										))}
									</div>
								) : (
									<div className="space-y-2">
										{types.slice(0, 8).map((type) => (
											<Link
												key={type}
												to={`/blog?type=${encodeURIComponent(type || '')}`}
												onClick={() => setIsMenuOpen(false)}
											>
												<div className="p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all duration-200">
													<span className="text-gray-700 font-medium">
														{type}
													</span>
												</div>
											</Link>
										))}
									</div>
								)}
							</div>

							{/* Mobile CTA */}
							<Link
								to="/contacts"
								onClick={() => setIsMenuOpen(false)}
							>
								<button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
									Subscribe Now
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom gradient line */}
				<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
			</header>
		</>
	)
}