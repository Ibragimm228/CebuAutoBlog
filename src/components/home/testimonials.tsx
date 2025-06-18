const TESTIMONIALS = [
	{
		quote:
			'CebuAutoBlog has completely transformed how I approach car buying. Their in-depth reviews and expert insights helped me make the best decision for my family.',
		author: 'Miguel Santos',
		title: 'Automotive Enthusiast',
		image: 'https://media.istockphoto.com/id/1289143731/photo/happy-black-auto-mechanic-working-at-car-workshop-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=cc27VbVEuPaQXvsYkbJgkA8_Fg3ujO77naKloXJ6pcY=',
		rating: 5,
		location: 'Cebu City'
	},
	{
		quote:
			"The technical depth and real-world testing in every review is incredible. As a mechanic, I trust CebuAutoBlog's expertise completely.",
		author: 'Maria Rodriguez',
		title: 'Professional Mechanic',
		image: 'https://media.istockphoto.com/id/1911998428/photo/beautiful-business-woman-working-with-laptop-while-looking-at-camera-in-living-room-at-home.jpg?s=612x612&w=0&k=20&c=mdtaANRj5CMo_uyfAml6jya2q5iuKYDxwYw-G99xCac=',
		rating: 5,
		location: 'Mandaue City'
	},
	{
		quote:
			'From luxury cars to practical daily drivers, CebuAutoBlog covers everything with unmatched quality. Their content is simply the best in the Philippines.',
		author: 'Carlos Dela Cruz',
		title: 'Car Dealer',
		image: 'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=',
		rating: 5,
		location: 'Lapu-Lapu City'
	}
]

export function TestimonialsSection() {
	return (
		<section className="relative py-32 bg-white overflow-hidden">
			{/* Revolutionary background design */}
			<div className="absolute inset-0">
				{/* Flowing gradient mesh */}
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/5 via-red-500/8 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/6 via-purple-500/4 to-indigo-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-t from-yellow-500/4 to-orange-500/6 rounded-full blur-2xl animate-pulse delay-500"></div>
				</div>

				{/* Subtle pattern overlay */}
				<div className="absolute inset-0 opacity-3">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
						backgroundSize: '32px 32px'
					}}></div>
				</div>
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Header section with dramatic styling */}
				<div className="text-center mb-20">
					{/* Status indicator */}
					<div className="flex justify-center items-center gap-4 mb-12">
						<div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
						<span className="text-gray-600 font-semibold tracking-widest text-sm uppercase">
							Community Voices
						</span>
						<div className="flex gap-1">
							{[...Array(5)].map((_, i) => (
								<svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>
					</div>

					{/* Main headline */}
					<div className="space-y-8 mb-16">
						<h2 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
							<div className="text-gray-900">Real Stories</div>
							<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -mt-4">
								Real Results
							</div>
							<div className="text-gray-400 text-2xl lg:text-4xl font-medium mt-2">
								from our community
							</div>
						</h2>
						
						<div className="max-w-4xl mx-auto">
							<p className="text-xl text-gray-600 leading-relaxed mb-6">
								Discover why thousands of automotive enthusiasts across the Philippines choose CebuAutoBlog as their trusted source for car reviews, insights, and expert advice.
							</p>
							<p className="text-lg text-gray-500 leading-relaxed">
								Join a community that values quality content, honest reviews, and automotive excellence.
							</p>
						</div>
					</div>
				</div>

				{/* Testimonials grid with innovative design */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
					{TESTIMONIALS.map((testimonial, index) => (
						<div 
							key={testimonial.author}
							className={`group relative ${
								index === 1 ? 'lg:scale-105 lg:-translate-y-4' : ''
							}`}
						>
							{/* Card container with premium styling */}
							<div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group-hover:-translate-y-2 overflow-hidden">
								
								{/* Premium badge for middle testimonial */}
								{index === 1 && (
									<div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-xs font-bold">
										Featured Review
									</div>
								)}

								{/* Quote section */}
								<div className="mb-8">
									{/* Large quote mark */}
									<div className="text-6xl text-orange-500/20 font-serif leading-none mb-4">"</div>
									
									{/* Quote text */}
									<blockquote className="text-gray-700 text-lg leading-relaxed font-medium">
										{testimonial.quote}
									</blockquote>
									
									{/* Rating stars */}
									<div className="flex items-center gap-1 mt-6">
										{[...Array(testimonial.rating)].map((_, i) => (
											<svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>

								{/* Author section with enhanced design */}
								<div className="flex items-center gap-4 pt-6 border-t border-gray-100">
									{/* Profile image with gradient border */}
									<div className="relative w-16 h-16">
										<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
										<div className="absolute inset-0.5 bg-white rounded-full"></div>
										<img
											className="absolute inset-1 w-14 h-14 rounded-full object-cover"
											src={testimonial.image}
											alt={testimonial.author}
											onError={(e) => {
												(e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=f97316&color=ffffff&size=56&bold=true`;
											}}
										/>
									</div>
									
									{/* Author info */}
									<div className="flex-1">
										<h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors duration-300">
											{testimonial.author}
										</h4>
										<p className="text-gray-600 text-sm font-medium">
											{testimonial.title}
										</p>
										<div className="flex items-center gap-1 mt-1">
											<svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
											</svg>
											<span className="text-xs text-gray-500">{testimonial.location}</span>
										</div>
									</div>
								</div>

								{/* Hover effect accent */}
								<div className="absolute -right-2 top-1/2 w-1 h-24 bg-gradient-to-b from-orange-500 to-red-500 rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								
								{/* Background decoration */}
								<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-orange-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom stats section */}
				<div className="mt-20 pt-12 border-t border-gray-200">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">
							Trusted by Automotive Enthusiasts Nationwide
						</h3>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Join thousands who rely on CebuAutoBlog for expert automotive content and honest reviews.
						</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl font-black text-gray-900 mb-2">50K+</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Monthly Readers</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-orange-500 mb-2">98%</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Satisfaction Rate</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-gray-900 mb-2">1000+</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Expert Reviews</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-red-500 mb-2">5★</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Average Rating</div>
						</div>
					</div>
				</div>

				{/* Call to action */}
				<div className="mt-20 text-center">
					<div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-12 border border-gray-100">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">
							Ready to Join Our Community?
						</h3>
						<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
							Discover why CebuAutoBlog is the Philippines' most trusted automotive content platform.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/blog"
								className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
							>
								Explore Our Reviews
							</a>
							<a
								href="/contacts"
								className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
							>
								Get In Touch
							</a>
						</div>
					</div>
				</div>
			</div>
			
			{/* Bottom accent line */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
		</section>
	)
}