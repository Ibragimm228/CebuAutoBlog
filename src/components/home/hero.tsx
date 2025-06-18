import { Container } from '@/components/shared/container'
import { useState, useEffect } from 'react'

export function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	const heroSlides = [
		{
			title: "Premium Auto",
			subtitle: "Reviews",
			description: "Experience the most comprehensive automotive reviews in the Philippines",
			image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2070&auto=format&fit=crop",
			accent: "from-orange-500 to-red-500"
		},
		{
			title: "Expert",
			subtitle: "Insights",
			description: "Deep dive into automotive technology and industry trends",
			image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
			accent: "from-orange-500 to-red-500"
		},
		{
			title: "Latest",
			subtitle: "News",
			description: "Stay updated with the freshest automotive news from Cebu and beyond",
			image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070&auto=format&fit=crop",
			accent: "from-orange-500 to-red-500"
		}
	]

	useEffect(() => {
		setIsVisible(true)
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	const currentHero = heroSlides[currentSlide]

	return (
		<div className='relative bg-white overflow-hidden'>
			{/* Animated background elements */}
			<div className='absolute inset-0'>
				{/* Floating geometric shapes */}
				<div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl rotate-45 animate-float'></div>
				<div className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full animate-float-delayed'></div>
				<div className='absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl rotate-45 animate-float-slow'></div>
				<div className='absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full animate-bounce'></div>
				
				{/* Dynamic gradient orbs */}
				<div className='absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
			</div>

			<Container className='py-20 lg:py-32'>
				<div className='relative z-10'>
					{/* Main hero grid */}
					<div className='grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]'>
						{/* Content Side */}
						<div className={`space-y-12 transform transition-all duration-1000 ${
							isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
						}`}>
							{/* Brand indicator */}
							<div className='flex items-center gap-4'>
								<div className={`w-3 h-16 bg-gradient-to-b ${currentHero.accent} rounded-full transition-all duration-500`}></div>
								<div className='space-y-1'>
									<div className='text-sm font-bold text-gray-900 tracking-widest uppercase'>
										Cebu's #1 Auto Hub
									</div>
									<div className='text-xs text-gray-500 tracking-wider'>
										Since 2019 • 50,000+ Readers
									</div>
								</div>
							</div>

							{/* Dynamic headline */}
							<div className='space-y-6'>
								<h1 className='text-6xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight'>
									<div className={`text-transparent bg-clip-text bg-gradient-to-r ${currentHero.accent} transition-all duration-500`}>
										{currentHero.title}
									</div>
									<div className='text-gray-900 -mt-4'>
										{currentHero.subtitle}
									</div>
									<div className='text-gray-400 text-lg lg:text-2xl font-medium mt-4 tracking-wide'>
										for automotive enthusiasts
									</div>
								</h1>
								
								<p className='text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl'>
									{currentHero.description}
								</p>
							</div>

							{/* Interactive CTA section */}
							<div className='space-y-8'>
								<div className='flex flex-col sm:flex-row gap-6'>
									<a
										href='/blog'
										className={`group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r ${currentHero.accent} text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform`}
									>
										<span className='mr-3'>Explore Articles</span>
										<svg className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
										</svg>
									</a>
									<a
										href='/about'
										className='group inline-flex items-center justify-center px-10 py-5 border-2 border-gray-900 text-gray-900 font-bold text-lg rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300'
									>
										<span className='mr-3'>About Us</span>
										<svg className='w-5 h-5 group-hover:rotate-45 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
										</svg>
									</a>
								</div>

								{/* Quick stats */}
								<div className='flex items-center gap-8 pt-6 border-t border-gray-200'>
									<div>
										<div className='text-2xl font-black text-gray-900'>500+</div>
										<div className='text-sm text-gray-500 uppercase tracking-wider'>Reviews</div>
									</div>
									<div>
										<div className={`text-2xl font-black bg-gradient-to-r ${currentHero.accent} bg-clip-text text-transparent`}>24/7</div>
										<div className='text-sm text-gray-500 uppercase tracking-wider'>Updates</div>
									</div>
									<div>
										<div className='text-2xl font-black text-gray-900'>5★</div>
										<div className='text-sm text-gray-500 uppercase tracking-wider'>Rating</div>
									</div>
								</div>
							</div>
						</div>

						{/* Visual Side */}
						<div className={`relative transform transition-all duration-1000 delay-300 ${
							isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
						}`}>
							{/* Main image container with advanced styling */}
							<div className='relative group'>
								{/* Background decoration */}
								<div className={`absolute inset-0 bg-gradient-to-br ${currentHero.accent} rounded-[3rem] transform rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-all duration-500`}></div>
								<div className='absolute inset-0 bg-white rounded-[3rem] transform rotate-3 scale-102 shadow-2xl group-hover:rotate-1 transition-all duration-500'></div>
								
								{/* Image frame */}
								<div className='relative bg-white p-6 rounded-[3rem] shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500'>
									<div className='relative overflow-hidden rounded-[2rem]'>
										<img
											src={currentHero.image}
											alt='CebuAutoBlog Featured Content'
											className='w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110'
										/>
										
										{/* Overlay elements */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
										<div className={`absolute top-6 right-6 bg-gradient-to-r ${currentHero.accent} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}>
											Featured
										</div>
										<div className='absolute bottom-6 left-6 text-white'>
											<div className='text-sm font-medium opacity-90'>Latest Review</div>
											<div className='text-lg font-bold'>Premium Content</div>
										</div>
									</div>
								</div>

								{/* Floating accent elements */}
								<div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg animate-pulse`}></div>
								<div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gray-900 rounded-full shadow-lg animate-pulse delay-500'></div>
							</div>

							{/* Side accent bar */}
							<div className={`absolute -right-6 top-1/2 w-2 h-40 bg-gradient-to-b from-orange-500 to-red-500 rounded-full -translate-y-1/2 opacity-80`}></div>
						</div>
					</div>

					{/* Slide indicators */}
					<div className='flex justify-center mt-12 space-x-3'>
						{heroSlides.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									currentSlide === index 
										? `bg-gradient-to-r ${currentHero.accent} scale-125` 
										: 'bg-gray-300 hover:bg-gray-400'
								}`}
							/>
						))}
					</div>

					
				</div>
			</Container>

			{/* Custom CSS for animations */}
			<style>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(45deg); }
					50% { transform: translateY(-20px) rotate(45deg); }
				}
				@keyframes float-delayed {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-15px); }
				}
				@keyframes float-slow {
					0%, 100% { transform: translateY(0px) rotate(45deg); }
					50% { transform: translateY(-10px) rotate(45deg); }
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-float-delayed {
					animation: float-delayed 4s ease-in-out infinite 2s;
				}
				.animate-float-slow {
					animation: float-slow 8s ease-in-out infinite 1s;
				}
			`}</style>
		</div>
	)
}