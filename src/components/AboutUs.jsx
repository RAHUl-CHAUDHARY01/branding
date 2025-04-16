import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import r4 from '../assets/r4.jpg';
const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('services');
  const servicesRef = useRef(null);
  const awardsRef = useRef(null);
  const partnersRef = useRef(null);
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      if (partnersRef.current && scrollPosition >= partnersRef.current.offsetTop) {
        setActiveSection('partners');
      } else if (awardsRef.current && scrollPosition >= awardsRef.current.offsetTop) {
        setActiveSection('awards');
      } else if (servicesRef.current && scrollPosition >= servicesRef.current.offsetTop) {
        setActiveSection('services');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Award logos
  const awards = [
    { id: 1, name: 'W3 Awards', logo: r4 },
    { id: 2, name: 'The Netty Awards', logo: r4 },
    { id: 3, name: 'LA Weekly', logo: r4},
    { id: 4, name: 'Yotpo', logo: r4 },
  ];

  // Partner logos
  const partners = [
    { id: 1, name: 'Shopify', logo: r4 },
    { id: 2, name: 'TikTok', logo: r4 },
    { id: 3, name: 'Yotpo', logo: r4 },
    { id: 4, name: 'Iterable', logo: r4 },
    { id: 5, name: 'Klaviyo', logo: r4 },
    { id: 6, name: 'Pinterest Business', logo: r4 },
    { id: 7, name: 'Recharge', logo: r4 },
    { id: 8, name: 'Okendo', logo: r4 },
    { id: 9, name: 'Gorgias', logo: r4 },
    { id: 10, name: 'Retention', logo: r4 },
    { id: 11, name: 'Meta', logo: r4 },
    { id: 12, name: 'Attentive', logo: r4 },
    { id: 13, name: 'Octane AI', logo: r4 },
    { id: 14, name: 'DotDigital', logo: r4 },
    { id: 15, name: 'Reviews.io', logo: r4 },
    { id: 16, name: 'Triple Whale', logo: r4 },
  ];

  // Services data
  const services = [
    {
      title: "Brand Strategy",
      description: "We craft unique brand identities that resonate with your target audience and stand out in crowded markets. Our strategic approach ensures your brand not only looks distinctive but also communicates your core values effectively.",
      items: [
        "Brand positioning and messaging",
        "Visual identity development",
        "Brand voice and tone guidelines",
        "Competitive analysis"
      ]
    },
    {
      title: "E-Commerce Development",
      description: "We build high-converting online stores that deliver exceptional user experiences while driving sales. Our e-commerce solutions are tailored to your specific business needs and optimized for performance.",
      items: [
        "Custom Shopify store development",
        "E-commerce strategy and optimization",
        "Conversion rate optimization",
        "Integration with third-party platforms"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Our data-driven digital marketing strategies help you reach your target audience, increase brand awareness, and drive measurable business results across all digital channels.",
      items: [
        "Social media marketing and management",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Paid advertising (PPC, display, social)"
      ]
    },
    {
      title: "User Experience Design",
      description: "We create intuitive, engaging user experiences that guide visitors toward conversion while building trust in your brand. Our designs balance aesthetics with functionality for optimal results.",
      items: [
        "UX research and user testing",
        "Wireframing and prototyping",
        "Responsive web design",
        "User journey mapping"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-[poppins]">
      {/* Hero Section with Team Photo */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold border-b pb-6 pt-8 mb-16">About Mattered</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="md:w-1/2 lg:w-7/12">
            {/* Team Photo */}
            <img 
              src={r4} 
              alt="Mattered Team" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 lg:w-5/12 mt-8 md:mt-0 md:pl-16">
            <p className="text-xl text-gray-800 mb-6">
              We help brands around the world build bespoke brand strategies and tailored solutions. 
              Form and function are at the core of what we do.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2018, our team of designers, developers, and strategists collaborate to create
              meaningful digital experiences that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef} 
        className="mb-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-8">
          {/* Left Fixed Card */}
          <div className="md:w-96 md:sticky md:top-24 md:h-screen md:flex-shrink-0 md:self-start mb-12 md:mb-0">
            <div className={`p-8 border-l-4 ${activeSection === 'services' ? 'border-black' : 'border-gray-200'} transition-all duration-300`}>
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <p className="mb-8 text-gray-600">
                Bespoke brand strategies and tailored solutions. Our methods follow best practices and live on 
                the threshold of wild innovation, continually pushing boundaries to be on the forefront of the digital landscape.
              </p>
              <a href="/contact" className="bg-black text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-gray-800 transition-all">
                Contact us <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="md:w-3/5 md:ml-auto">
            {services.map((service, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-6 text-gray-700">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section 
        ref={awardsRef} 
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16">Our Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {awards.map(award => (
              <div key={award.id} className="flex flex-col items-center">
                <img 
                  src={award.logo} 
                  alt={award.name} 
                  className="h-20 object-contain mb-6"
                />
                <p className="text-center text-gray-700">
                  Mattered named one of the "Top 5 E-Commerce Agencies in Los Angeles 2023".
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        ref={partnersRef} 
        className="mb-24 mt-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-8">
          {/* Left Fixed Card */}
          <div className="md:w-96 md:sticky md:top-24 md:h-screen md:flex-shrink-0 md:self-start mb-12 md:mb-0">
            <div className={`p-8 border-l-4 ${activeSection === 'partners' ? 'border-black' : 'border-gray-200'} transition-all duration-300`}>
              <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
              <p className="mb-8 text-gray-600">
                We are proud to collaborate with leading technology partners who help us deliver cutting-edge 
                solutions and outstanding results for our clients. Our partnerships ensure we're always equipped with the latest tools.
              </p>
              <a href="/contact" className="bg-black text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-gray-800 transition-all">
                Become a partner <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="md:w-3/5 md:ml-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
              {partners.map(partner => (
                <div key={partner.id} className="flex items-center justify-center p-4 border border-gray-100 hover:border-gray-300 transition-all">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's create something amazing together. Contact us today to discuss how we can help your brand stand out.
              </p>
            </div>
            <div className="md:w-1/2 md:text-right">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-black py-4 px-8 text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Get in touch <ArrowRight size={20} className="ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;