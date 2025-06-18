export function AboutSection() {
	return (
		<section className='relative py-24 bg-white overflow-hidden'>
			{/* Clean geometric accent */}
			<div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-48 translate-x-48'></div>
			
			<div className='max-w-7xl mx-auto px-6'>
				{/* Innovative diagonal split layout */}
				<div className='relative'>
					{/* Content side - diagonal positioning */}
					<div className='grid lg:grid-cols-5 gap-16 items-center'>
						<div className='lg:col-span-3 space-y-12'>
							{/* Minimal status indicator */}
							<div className='flex items-center gap-3'>
								<div className='w-2 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full'></div>
								<span className='text-gray-600 font-medium tracking-wider text-sm uppercase'>Cebu's Leading Auto Hub</span>
							</div>
							
							{/* Bold statement typography */}
							<div className='space-y-8'>
								<h2 className='text-6xl lg:text-8xl font-black leading-none tracking-tight'>
									<div className='text-gray-900'>Auto</div>
									<div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -mt-4'>
										Revolution
									</div>
									<div className='text-gray-400 text-2xl lg:text-4xl font-medium mt-2'>
										starts here
									</div>
								</h2>
								
								{/* Unique value proposition */}
								<div className='max-w-lg'>
									<p className='text-xl text-gray-700 leading-relaxed mb-6'>
										CebuAutoBlog isn't just another car blog. We're reshaping how automotive enthusiasts discover, learn, and connect in the Philippines.
									</p>
									<p className='text-lg text-gray-600 leading-relaxed'>
										From deep-dive technical reviews to exclusive industry insights, we deliver content that matters to serious car lovers.
									</p>
								</div>
							</div>
							
							{/* Clean action area */}
							<div className='flex items-center gap-8'>
								<a
									href='/about'
									className='bg-black text-white px-8 py-4 rounded-none font-semibold hover:bg-gray-800 transition-colors duration-200'
								>
									Explore Our Story
								</a>
								<div className='text-sm text-gray-500'>
									<div className='font-bold text-gray-900'>50,000+</div>
									Monthly readers
								</div>
							</div>
						</div>
						
						{/* Visual side - creative arrangement */}
						<div className='lg:col-span-2 relative'>
							{/* Main image with architectural framing */}
							<div className='relative'>
								{/* Background shape */}
								<div className='absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl transform rotate-3'></div>
								
								{/* Image container */}
								<div className='relative bg-white p-6 rounded-3xl shadow-2xl'>
									<img
										className='w-full h-80 object-cover rounded-2xl'
										src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt='CebuAutoBlog Premium Content'
									/>
									
									{/* Overlay badge */}
									<div className='absolute top-8 right-8 bg-black text-white px-4 py-2 rounded-full text-sm font-bold'>
										#1 in Cebu
									</div>
								</div>
								
								{/* Side accent */}
								<div className='absolute -right-6 top-1/2 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full -translate-y-1/2'></div>
							</div>
						</div>
					</div>
					
					{/* Bottom metrics bar */}
					<div className='mt-20 pt-12 border-t border-gray-200'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
							<div className='text-center md:text-left'>
								<div className='text-3xl font-black text-gray-900 mb-1'>500+</div>
								<div className='text-gray-600 text-sm uppercase tracking-wider'>Expert Reviews</div>
							</div>
							<div className='text-center md:text-left'>
								<div className='text-3xl font-black text-orange-500 mb-1'>24/7</div>
								<div className='text-gray-600 text-sm uppercase tracking-wider'>Fresh Content</div>
							</div>
							<div className='text-center md:text-left'>
								<div className='text-3xl font-black text-gray-900 mb-1'>5★</div>
								<div className='text-gray-600 text-sm uppercase tracking-wider'>Community Rating</div>
							</div>
							<div className='text-center md:text-left'>
								<div className='text-3xl font-black text-red-500 mb-1'>2019</div>
								<div className='text-gray-600 text-sm uppercase tracking-wider'>Since Launch</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Minimal bottom accent */}
			<div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
		</section>
	)
}