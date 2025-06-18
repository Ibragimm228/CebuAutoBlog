import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
			{/* Advanced Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Dynamic gradient orbs */}
				<div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-t from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
				
				{/* Geometric patterns */}
				<div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-200/30 rotate-45 animate-spin-slow"></div>
				<div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-blue-200/40 rounded-full animate-bounce delay-300"></div>
				<div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-ping delay-700"></div>
			</div>

			<Container className="relative py-16 lg:py-24">
				{/* Hero Section */}
				<section className="mb-32">
					<div className="text-center mb-16">
						{/* Status indicator */}
						<div className="flex justify-center items-center gap-4 mb-8">
							<div className="w-3 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
							<span className="text-gray-600 font-bold tracking-widest text-sm uppercase">
								About CebuAutoBlog
							</span>
							<div className="w-3 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse delay-500"></div>
						</div>

						{/* Dramatic headline */}
						<h1 className="text-6xl lg:text-9xl font-black leading-none tracking-tight mb-8">
							<div className="text-gray-900 mb-2">
								Driving
							</div>
							<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -mt-6">
								Innovation
							</div>
							<div className="text-gray-500 text-2xl lg:text-4xl font-medium mt-4">
								in automotive journalism
							</div>
						</h1>
					</div>

					{/* Main content with innovative layout */}
					<div className="grid lg:grid-cols-12 gap-16 items-center">
						<div className="lg:col-span-7 space-y-8">
							<div className="relative">
								{/* Main text with enhanced typography */}
								<div className="space-y-6 relative z-10">
									<p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed font-light">
										Welcome to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">CebuAutoBlog</span>, 
										the Philippines' premier destination for cutting-edge automotive insights, comprehensive reviews, and industry expertise.
									</p>
									<p className="text-xl text-gray-600 leading-relaxed">
										Since our inception, we've been revolutionizing how automotive enthusiasts discover, learn, and connect across the archipelago. 
										Our mission transcends traditional automotive journalism—we're building a movement that celebrates the passion for exceptional vehicles.
									</p>
								</div>
								
								{/* Decorative accent */}
								<div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full opacity-50"></div>
							</div>

							{/* Enhanced statistics */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
								<div className="text-center group">
									<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
										50K+
									</div>
									<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">Monthly Readers</div>
								</div>
								<div className="text-center group">
									<div className="text-4xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
										500+
									</div>
									<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">Expert Reviews</div>
								</div>
								<div className="text-center group">
									<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">
										2019
									</div>
									<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">Since Launch</div>
								</div>
								<div className="text-center group">
									<div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
										#1
									</div>
									<div className="text-gray-600 text-sm uppercase tracking-wider font-medium">In Cebu</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-5">
							{/* Innovative image presentation */}
							<div className="relative">
								{/* Background shape */}
								<div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-[2rem] transform rotate-6 scale-105"></div>
								
								{/* Main image container */}
								<div className="relative bg-white p-8 rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
									<img
										src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="CebuAutoBlog - Premier Automotive Content"
										className="w-full h-80 lg:h-96 object-cover rounded-[1.5rem]"
									/>
									
									{/* Dynamic overlay badge */}
									<div className="absolute top-12 right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg animate-pulse">
										Premium Content
									</div>
								</div>
								
								{/* Accent elements */}
								<div className="absolute -bottom-4 -right-4 w-2 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
								<div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
							</div>
						</div>
					</div>
				</section>

				{/* Mission Section - Completely Redesigned */}
				<section className="mb-32">
					<div className="relative">
						{/* Section header */}
						<div className="text-center mb-20">
							<div className="inline-flex items-center gap-3 mb-6">
								<div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
								<span className="text-gray-600 font-semibold tracking-wider text-sm uppercase">Our Mission</span>
								<div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
							</div>
							
							<h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-none">
								Empowering
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 -mt-2">
									Excellence
								</span>
							</h2>
						</div>

						{/* Mission content with alternating layout */}
						<div className="grid lg:grid-cols-12 gap-16 items-center">
							<div className="lg:col-span-5 order-2 lg:order-1">
								<div className="relative">
									{/* Enhanced background */}
									<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-[2rem] transform -rotate-3"></div>
									
									<div className="relative bg-white p-8 rounded-[2rem] shadow-xl">
										<img
											src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt="Our Mission - Automotive Excellence"
											className="w-full h-80 lg:h-96 object-cover rounded-[1.5rem]"
										/>
										
										{/* Floating badge */}
										<div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm">
											Innovation
										</div>
									</div>
								</div>
							</div>

							<div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
								<div className="relative">
									<div className="space-y-6">
										<p className="text-2xl text-gray-800 leading-relaxed">
											At <span className="font-bold text-orange-600">CebuAutoBlog</span>, we believe that exceptional automotive content 
											should inspire, educate, and elevate the entire community of car enthusiasts.
										</p>
										<p className="text-xl text-gray-600 leading-relaxed">
											Our mission extends beyond traditional reviews—we're creating a comprehensive ecosystem where 
											automotive passion meets professional expertise, delivering insights that matter to both 
											casual enthusiasts and industry professionals.
										</p>
										<p className="text-lg text-gray-600 leading-relaxed">
											From in-depth technical analyses to exclusive industry access, we ensure every piece of content 
											adds genuine value to your automotive journey.
										</p>
									</div>

									{/* Mission highlights */}
									<div className="grid md:grid-cols-2 gap-6 mt-12">
										<div className="flex items-start gap-4 group">
											<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</div>
											<div>
												<h3 className="font-bold text-gray-900 mb-2">Expert Analysis</h3>
												<p className="text-gray-600 text-sm">Deep technical insights from industry professionals</p>
											</div>
										</div>

										<div className="flex items-start gap-4 group">
											<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
												</svg>
											</div>
											<div>
												<h3 className="font-bold text-gray-900 mb-2">Latest Trends</h3>
												<p className="text-gray-600 text-sm">Stay ahead with cutting-edge automotive developments</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section - Revolutionary Design */}
				<section className="mb-24">
					<div className="text-center mb-20">
						<div className="inline-flex items-center gap-3 mb-6">
							<div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full"></div>
							<span className="text-gray-600 font-semibold tracking-wider text-sm uppercase">Meet Our Team</span>
							<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full"></div>
						</div>
						
						<h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
							Automotive
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 -mt-2">
								Experts
							</span>
						</h2>
						
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Our diverse team of automotive professionals brings decades of combined experience, 
							ensuring every piece of content meets the highest standards of accuracy and insight.
						</p>
					</div>

					{/* Team grid with enhanced cards */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Team Member 1 */}
						<div className="group relative">
							<div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
							
							<div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
								<div className="text-center">
									<div className="relative inline-block mb-6">
										<img
											src="/authors/1.avif"
											alt="Marcus Rodriguez - Senior Automotive Journalist"
											className="w-32 h-32 rounded-2xl object-cover mx-auto border-4 border-white shadow-lg"
										/>
										<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
										</div>
									</div>
									
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
									<div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
										Senior Automotive Journalist
									</div>
									<p className="text-gray-600 leading-relaxed">
										With over 15 years covering the automotive industry, Marcus specializes in performance vehicles 
										and cutting-edge automotive technology, bringing unparalleled expertise to every review.
									</p>
								</div>
							</div>
						</div>

						{/* Team Member 2 */}
						<div className="group relative">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
							
							<div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
								<div className="text-center">
									<div className="relative inline-block mb-6">
										<img
											src="/authors/3.avif"
											alt="Isabella Chen - Luxury Car Specialist"
											className="w-32 h-32 rounded-2xl object-cover mx-auto border-4 border-white shadow-lg"
										/>
										<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
										</div>
									</div>
									
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Isabella Chen</h3>
									<div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
										Luxury Car Specialist
									</div>
									<p className="text-gray-600 leading-relaxed">
										Isabella's expertise in luxury automotive markets and her background in automotive engineering 
										provides readers with sophisticated insights into premium vehicle segments.
									</p>
								</div>
							</div>
						</div>

						{/* Team Member 3 */}
						<div className="group relative md:col-span-2 lg:col-span-1">
							<div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
							
							<div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
								<div className="text-center">
									<div className="relative inline-block mb-6">
										<img
											src="/authors/2.avif"
											alt="James Thompson - Automotive Culture Expert"
											className="w-32 h-32 rounded-2xl object-cover mx-auto border-4 border-white shadow-lg"
										/>
										<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
										</div>
									</div>
									
									<h3 className="text-2xl font-bold text-gray-900 mb-2">James Thompson</h3>
									<div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
										Automotive Culture Expert
									</div>
									<p className="text-gray-600 leading-relaxed">
										James explores the intersection of automotive culture and lifestyle, covering everything from 
										classic car restoration to emerging automotive trends across the Philippines.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>

			{/* Bottom accent elements */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
			<div className="absolute bottom-10 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
		</div>
	)
}