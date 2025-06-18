import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
	return (
		<>
			{/* Hero Section with Dynamic Background */}
			<section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex items-center">
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					{/* Moving gradient orbs */}
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-t from-pink-500/15 to-yellow-500/15 rounded-full blur-2xl animate-pulse delay-500 -translate-x-1/2 -translate-y-1/2"></div>
					
					{/* Grid pattern overlay */}
					<div className="absolute inset-0 opacity-10">
						<div className="w-full h-full" style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
							backgroundSize: '60px 60px'
						}}></div>
					</div>
					
					{/* Floating geometric shapes */}
					<div className="absolute top-20 left-20 w-8 h-8 bg-orange-500/30 rotate-45 animate-bounce delay-200"></div>
					<div className="absolute top-1/3 right-16 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce delay-700"></div>
					<div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-500/30 rotate-12 animate-bounce delay-1200"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-6 py-20">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Content Side */}
						<div className="space-y-12 text-white">
							{/* Status indicator */}
							<div className="flex items-center gap-4">
								<div className="w-3 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
								<span className="text-gray-300 font-medium tracking-widest text-sm uppercase">
									Connect With CebuAutoBlog
								</span>
							</div>
							
							{/* Main headline */}
							<div className="space-y-8">
								<h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
									<div className="text-white mb-2">Let's</div>
									<div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 -mt-4">
										Connect
									</div>
									<div className="text-gray-400 text-2xl lg:text-4xl font-medium mt-4">
										& Create Magic
									</div>
								</h1>
								
								<div className="max-w-2xl space-y-6">
									<p className="text-xl text-gray-300 leading-relaxed">
										Ready to share your automotive passion or collaborate with Cebu's premier auto experts? We're here to listen, engage, and create something extraordinary together.
									</p>
									<p className="text-lg text-gray-400 leading-relaxed">
										Whether it's feedback, partnerships, or just automotive talk – every message matters to us.
									</p>
								</div>
							</div>
							
							{/* Quick contact info */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
								<div className="group">
									<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
										<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div>
											<div className="font-semibold text-white">Quick Response</div>
											<div className="text-sm text-gray-400">Within 24 hours</div>
										</div>
									</div>
								</div>
								
								<div className="group">
									<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg>
										</div>
										<div>
											<div className="font-semibold text-white">Expert Team</div>
											<div className="text-sm text-gray-400">Always available</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* Visual Side */}
						<div className="relative">
							{/* Background shapes */}
							<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform rotate-6 blur-2xl"></div>
							<div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-3 blur-xl"></div>
							
							{/* Main image container */}
							<div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
								<img
									src='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400'
									alt='CebuAutoBlog Contact'
									className='w-full h-80 object-cover rounded-2xl shadow-2xl'
								/>
								
								{/* Floating badge */}
								<div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm animate-bounce">
									Ready to Talk!
								</div>
							</div>
							
							{/* Side accent */}
							<div className="absolute -right-8 top-1/2 w-2 h-32 bg-gradient-to-b from-pink-500 to-yellow-500 rounded-full -translate-y-1/2"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="relative py-32 bg-white overflow-hidden">
				{/* Background elements */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
				<div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-50 to-transparent rounded-full translate-y-32 translate-x-32"></div>
				
				<div className="relative max-w-7xl mx-auto px-6">
					{/* Section header */}
					<div className="text-center mb-20">
						<div className="flex justify-center items-center gap-3 mb-8">
							<div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
							<span className="text-gray-600 font-medium tracking-wider text-sm uppercase">
								Start The Conversation
							</span>
						</div>
						
						<h2 className="text-5xl lg:text-7xl font-black leading-none tracking-tight text-gray-900 mb-8">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
								Your Message
							</span>
							<div className="text-gray-400 text-xl lg:text-3xl font-medium mt-2">
								Our Priority
							</div>
						</h2>
						
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Fill out the form below and join thousands of automotive enthusiasts who trust CebuAutoBlog for premium content and expert insights.
						</p>
					</div>

					{/* Form container with enhanced design */}
					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl transform rotate-1"></div>
							
							{/* Main form container */}
							<div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
								{/* Form header */}
								<div className="text-center mb-12">
									<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
										<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
									<p className="text-gray-600">We'll get back to you within 24 hours</p>
								</div>
								
								<ContactForm />
								
								{/* Additional contact methods */}
								<div className="mt-12 pt-8 border-t border-gray-200">
									<div className="text-center mb-8">
										<h4 className="text-lg font-semibold text-gray-900 mb-2">Other Ways to Reach Us</h4>
										<p className="text-gray-600">Choose your preferred method of communication</p>
									</div>
									
									<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
										<div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:-translate-y-1">
											<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
											</div>
											<h5 className="font-semibold text-gray-900 mb-2">Email Us</h5>
											<p className="text-sm text-gray-600">Quick responses guaranteed</p>
										</div>
										
										<div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:-translate-y-1">
											<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</div>
											<h5 className="font-semibold text-gray-900 mb-2">Live Chat</h5>
											<p className="text-sm text-gray-600">Instant support available</p>
										</div>
										
										<div className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-pink-50 hover:to-yellow-50 transition-all duration-300 hover:-translate-y-1">
											<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
												<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v12a2 2 0 002 2h6a2 2 0 002-2V7m-8 0V5a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8" />
												</svg>
											</div>
											<h5 className="font-semibold text-gray-900 mb-2">Schedule Call</h5>
											<p className="text-sm text-gray-600">Personal consultation</p>
										</div>
									</div>
								</div>
							</div>
							
							{/* Side accent */}
							<div className="absolute -right-6 top-1/2 w-2 h-32 bg-gradient-to-b from-orange-500 to-red-500 rounded-full -translate-y-1/2"></div>
						</div>
					</div>
				</div>
				
				{/* Bottom accent line */}
				<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
			</section>

			{/* Why Contact Us Section */}
			<section className="relative py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h3 className="text-4xl font-bold text-gray-900 mb-4">
							Why Connect with CebuAutoBlog?
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Join a community that's passionate about automotive excellence and innovation
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl font-black text-gray-900 mb-2">50K+</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Active Community</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-orange-500 mb-2">Expert</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Content Team</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Support Available</div>
						</div>
						<div className="text-center">
							<div className="text-4xl font-black text-red-500 mb-2">Premium</div>
							<div className="text-gray-600 text-sm uppercase tracking-wider">Quality Standard</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}