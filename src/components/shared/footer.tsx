// New CebuAutoBlog Logo Component
type LogoSize = 'small' | 'default' | 'large';

function CebuAutoLogo({ size = 'default' }: { size?: LogoSize }) {
	const sizeClasses = {
		small: 'h-8',
		default: 'h-12',
		large: 'h-16'
	};

	return (
		<div className="flex items-center gap-3">
			{/* Logo Image */}
			<div className={`${sizeClasses[size]} relative`}>
				<img 
					src="https://cebuautoblog.com/wp-content/themes/cab/images/cebu-auto-blog.png" 
					alt="" 
					className={`${sizeClasses[size]} object-contain filter brightness-110 hover:brightness-125 transition-all duration-300`}
					onError={(e) => {
						// Fallback if image doesn't load
						(e.target as HTMLImageElement).style.display = 'none';
						((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex';
					}}
				/>
				{/* Fallback logo if image fails to load */}
				<div className={`${sizeClasses[size]} w-12 relative hidden`} style={{ display: 'none' }}>
					<div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl rotate-12 opacity-90"></div>
					<div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-purple-500 to-indigo-500 rounded-xl -rotate-12 opacity-80"></div>
					<div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center h-full">
						<span className={`font-black text-white ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-xl' : 'text-lg'}`}>
							CA
						</span>
					</div>
				</div>
			</div>
			
			
		</div>
	);
}

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
	return (
		<div className={`max-w-7xl mx-auto px-6 ${className}`}>
			{children}
		</div>
	);
}

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
		social: [
			{
				name: 'Facebook',
				href: '#',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
				)
			},
			{
				name: 'Instagram',
				href: '#',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.973 14.4c.555.555 1.275.832 2.15.832.832 0 1.593-.319 2.15-.895.555-.576.832-1.297.832-2.15 0-.832-.277-1.593-.832-2.15-.557-.555-1.318-.832-2.15-.832-.875 0-1.595.277-2.15.832L5.121 8.746c.88-.807 2.031-1.297 3.328-1.297 2.704 0 4.896 2.192 4.896 4.896s-2.192 4.896-4.896 4.896zm7.379 0c-1.297 0-2.448-.49-3.328-1.297l1.852-1.291c.555.555 1.275.832 2.15.832.832 0 1.593-.319 2.15-.895.555-.576.832-1.297.832-2.15 0-.832-.277-1.593-.832-2.15-.557-.555-1.318-.832-2.15-.832-.875 0-1.595.277-2.15.832L12.5 8.746c.88-.807 2.031-1.297 3.328-1.297 2.704 0 4.896 2.192 4.896 4.896s-2.192 4.896-4.896 4.896z"/>
					</svg>
				)
			},
			{
				name: 'YouTube',
				href: '#',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
					</svg>
				)
			},
			{
				name: 'Twitter',
				href: '#',
				icon: (
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
					</svg>
				)
			}
		],
		categories: [
			'Car Reviews',
			'Maintenance Tips',
			'Industry News',
			'Buying Guides',
			'Tech Features'
		],
		quickLinks: [
			'Latest Articles',
			'Popular Posts',
			'Editorial Team',
			'Advertise With Us',
			'Newsletter'
		]
	};

	return (
		<footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-t from-pink-500/3 to-yellow-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 opacity-5">
				<div className="w-full h-full" style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
					backgroundSize: '40px 40px'
				}}></div>
			</div>

			<Container className="relative">
				{/* Main footer content */}
				<div className="py-16">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
						{/* Brand section */}
						<div className="lg:col-span-2 space-y-8">
							<div className="space-y-6">
								<CebuAutoLogo size="large" />
								<div className="space-y-4">
									<h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
										Philippines' Premier Automotive Hub
									</h3>
									<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
										Driving automotive excellence in Cebu and beyond. We deliver cutting-edge reviews, 
										expert insights, and comprehensive coverage of the Philippine automotive landscape.
									</p>
								</div>
							</div>

							{/* Newsletter signup */}
							<div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
								<h4 className="text-xl font-bold mb-3 text-white">
									Stay in the Fast Lane
								</h4>
								<p className="text-gray-300 mb-4">
									Get the latest automotive news and exclusive content delivered to your inbox.
								</p>
								<div className="flex flex-col sm:flex-row gap-3">
									<input
										type="email"
										placeholder="Enter your email"
										className="flex-1 bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
									/>
									<button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
										Subscribe
									</button>
								</div>
							</div>
						</div>

						{/* Navigation sections */}
						<div className="space-y-8">
							<div>
								<h4 className="text-lg font-bold mb-4 text-white">
									Quick Navigation
								</h4>
								<ul className="space-y-3">
									{navigation.main.map((item) => (
										<li key={item.name}>
											<a 
												href={item.href} 
												className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>

						
						</div>

						<div className="space-y-8">
							<div>
								
							</div>

							{/* Contact info */}
							<div>
								<h4 className="text-lg font-bold mb-4 text-white">
									Connect With Us
								</h4>
								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-3 text-gray-300">
										<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										Cebu City, Philippines
									</div>
									<div className="flex items-center gap-3 text-gray-300">
										<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										hello@cebuautoblog.com
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-gray-800 py-8">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
						{/* Social media links */}
						<div className="flex items-center gap-4">
							<span className="text-gray-400 text-sm mr-2">Follow us:</span>
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
									aria-label={item.name}
								>
									{item.icon}
								</a>
							))}
						</div>

						{/* Copyright */}
						<div className="text-center lg:text-right">
							<p className="text-gray-400 text-sm">
								&copy; {new Date().getFullYear()} CebuAutoBlog. All rights reserved.
							</p>
							<p className="text-gray-500 text-xs mt-1">
								Crafted with ❤️ in the Philippines
							</p>
						</div>
					</div>
				</div>
			</Container>

			{/* Decorative bottom accent */}
			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
			
			{/* Floating particles */}
			<div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100 opacity-60"></div>
			<div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-300 opacity-60"></div>
			<div className="absolute bottom-20 left-1/3 w-1 h-1 bg-pink-500 rounded-full animate-bounce delay-500 opacity-60"></div>
			<div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-700 opacity-60"></div>
		</footer>
	);
}