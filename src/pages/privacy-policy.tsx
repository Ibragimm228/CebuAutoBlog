import React, { useState, useEffect } from 'react'

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

export const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const privacySections = [
    {
      title: 'Information Collection',
      icon: '🔍',
      content: 'Your privacy is paramount to us at CebuAutoBlog. We collect information through direct interactions, automated technologies, and third-party sources to enhance your automotive content experience. This includes personal data you voluntarily provide and technical data collected through cookies and analytics.',
      highlight: 'We prioritize transparency in every data collection process'
    },
    {
      title: 'Data Usage & Purpose',
      icon: '⚙️',
      content: 'We utilize collected information to personalize your automotive content experience, improve our platform functionality, deliver targeted automotive insights, and provide exceptional customer service. Your data helps us curate relevant car reviews, industry news, and expert analysis tailored to your interests.',
      highlight: 'Every data point serves to enhance your automotive journey'
    },
    {
      title: 'Information Protection',
      icon: '🛡️',
      content: 'CebuAutoBlog implements industry-leading security measures including SSL encryption, secure server infrastructure, and regular security audits. We never sell, rent, or share your personal information with unauthorized third parties. Your trust drives our commitment to data protection.',
      highlight: 'Bank-level security protects your automotive preferences'
    },
    {
      title: 'Third-Party Services',
      icon: '🔗',
      content: 'Our platform may integrate with trusted automotive industry partners, analytics providers, and content delivery networks. Each third-party service is carefully vetted and must comply with our strict privacy standards. We maintain full transparency about these partnerships.',
      highlight: 'Strategic partnerships enhance your experience without compromising privacy'
    },
    {
      title: 'Data Accuracy & Control',
      icon: '✏️',
      content: 'You maintain complete control over your personal information. Update your preferences, correct inaccuracies, or request data deletion at any time. We provide user-friendly tools to manage your privacy settings and ensure your automotive content preferences remain current.',
      highlight: 'Your data, your control - complete transparency guaranteed'
    },
    {
      title: 'Policy Updates',
      icon: '🔄',
      content: 'This Privacy Policy evolves with industry standards and regulatory requirements. We notify users of significant changes through email notifications and prominent website announcements. Continued use of CebuAutoBlog constitutes acceptance of updated terms.',
      highlight: 'Stay informed with proactive update notifications'
    },
    {
      title: 'Child Safety',
      icon: '👶',
      content: 'CebuAutoBlog is committed to protecting minors online. Our services target automotive enthusiasts aged 13 and above. We do not knowingly collect personal information from children under 13 and immediately delete any accidentally collected data from minors.',
      highlight: 'Dedicated to creating a safe digital automotive community'
    },
    {
      title: 'Legal Compliance',
      icon: '⚖️',
      content: 'We adhere to international privacy regulations including GDPR, CCPA, and local Philippine data protection laws. Our legal team continuously monitors compliance requirements and updates our practices to exceed regulatory standards.',
      highlight: 'Full compliance with global privacy legislation'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-t from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-200" />
        <div className="absolute top-40 right-1/5 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-32 left-1/6 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-1200" />
      </div>

      <Container className="relative z-10 py-16 lg:py-24">
        {/* Hero section */}
        <div className="text-center mb-20">
          {/* Status indicator */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-2 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse" />
            <span className="text-gray-600 font-semibold tracking-widest text-sm uppercase">
              Privacy & Data Protection
            </span>
            <div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse delay-500" />
          </div>

          {/* Main headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
              <div className="text-gray-900 mb-2">Your</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 -mt-4">
                Privacy
              </div>
              <div className="text-gray-600 text-2xl lg:text-4xl font-medium mt-4">
                matters most
              </div>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                At CebuAutoBlog, we've built our privacy framework around one core principle: 
                <span className="font-semibold text-orange-600"> your trust is everything</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover how we protect, respect, and empower your digital automotive journey with industry-leading privacy practices.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">256-bit</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">SSL Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-orange-500 mb-2">GDPR</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">Zero</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Data Sales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-blue-500 mb-2">24/7</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Protection</div>
            </div>
          </div>
        </div>

        {/* Privacy sections */}
        <div className="space-y-8 mb-20">
          {privacySections.map((section, index) => (
            <div 
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-12 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 ${
                activeSection === index ? 'ring-2 ring-orange-500/20' : ''
              }`}
              onMouseEnter={() => setActiveSection(index)}
            >
              {/* Section number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Accent line */}
              <div className="absolute -right-3 top-1/2 w-1 h-20 bg-gradient-to-b from-orange-500 to-red-500 rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Icon and title */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 mb-6 lg:mb-0">
                    <p className="text-sm font-semibold text-orange-700 leading-relaxed">
                      💡 {section.highlight}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Questions About Your Privacy?
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our privacy team is here to help. Reach out with any questions, concerns, or requests about your data protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contacts"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25"
              >
                <span className="flex items-center gap-3">
                  Contact Privacy Team
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              
              <div className="text-gray-400">
                <p className="text-sm">
                  <span className="font-semibold text-white">Response time:</span> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer notice */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-center text-gray-600">
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            By accessing and using CebuAutoBlog, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. 
            Last updated: <span className="font-semibold text-gray-900">June 2025</span>
          </p>
        </div>
      </Container>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </div>
  )
}