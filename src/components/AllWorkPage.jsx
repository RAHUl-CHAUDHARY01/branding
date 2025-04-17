import { useState, useEffect } from 'react';
import { ArrowRight, Filter, Search, X, ArrowLeft } from 'lucide-react';

// Assuming you'd import the same images as in your gallery
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';
import r5 from '../assets/r5.webp';
import r6 from '../assets/r6.jpg';
import r7 from '../assets/r7.jpg';
import r8 from '../assets/r8.jpg';
import r9 from '../assets/r9.png';
import r10 from '../assets/r10.png';

export default function AllWorkPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Sample project data with categories
  const projects = [
    {
      id: 1,
      title: "Mattered UI Dashboard",
      category: "UI/UX Design",
      description: "A minimal dashboard interface designed for modern analytics platforms with focus on user experience and clean visual hierarchy.",
      year: "2024",
      image: r7,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "End-to-end e-commerce solution with advanced filtering, search, and payment integration.",
      year: "2023",
      image: r9,
    },
    {
      id: 3,
      title: "Fintech Mobile App",
      category: "UI/UX Design",
      description: "Finance tracking application with intuitive interfaces for budget management and investment tracking.",
      year: "2024",
      image: r8,
    },
    {
      id: 4,
      title: "Healthcare Portal",
      category: "Web Development",
      description: "Patient management system with appointment scheduling and medical record keeping.",
      year: "2023",
      image: r4,
    },
    {
      id: 5,
      title: "Travel Companion App",
      category: "Mobile Design",
      description: "Travel planning and itinerary management app with location-based recommendations.",
      year: "2022",
      image: r10,
    },
    {
      id: 6,
      title: "Creative Portfolio",
      category: "Branding",
      description: "Brand identity and digital presence design for creative professionals.",
      year: "2024",
      image: r6,
    },
    {
      id: 7,
      title: "Event Management System",
      category: "Web Development",
      description: "Comprehensive platform for event planning, ticketing, and attendee management.",
      year: "2023",
      image: r5,
    },
    {
      id: 8,
      title: "Smart Home Interface",
      category: "UI/UX Design",
      description: "Control panel design for integrated smart home systems with focus on accessibility.",
      year: "2022",
      image: r3,
    },
    {
      id: 9,
      title: "Educational Platform",
      category: "Web Development",
      description: "Learning management system with course creation tools and student progress tracking.",
      year: "2023",
      image: r2,
    }
  ];

  // Get unique categories for filter
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });

  // Handle back navigation from project detail
  const handleBack = () => {
    setActiveProject(null);
  };

  if (activeProject) {
    const project = projects.find(p => p.id === activeProject);
    
    return (
      <div className="min-h-screen bg-white px-8 py-12 font-[poppins]">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-black hover:text-gray-700 mb-12 transition-all"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to All Work</span>
        </button>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-8 text-lg">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-y-4 mb-8">
                <div>
                  <h3 className="text-sm text-gray-500">CATEGORY</h3>
                  <p className="font-medium">{project.category}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">YEAR</h3>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm text-gray-500">TECHNOLOGIES</h3>
                  <p className="font-medium">React, Tailwind CSS, JavaScript</p>
                </div>
              </div>
              
              <button className="bg-black text-white px-8 py-3 flex items-center gap-2 self-start hover:bg-gray-800 transition-all">
                <span>View Live Project</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
            <p className="text-gray-700 mb-6">
              This project was developed to address the growing need for intuitive and efficient user interfaces in the digital landscape. The goal was to create a system that not only looks visually appealing but also provides a seamless user experience.
            </p>
            <p className="text-gray-700 mb-6">
              The design process involved extensive research into user behaviors and preferences, followed by multiple iterations of wireframing and prototyping. The final product incorporates modern design principles while maintaining a focus on functionality and ease of use.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-8 py-12" style={{fontFamily:'Now'}}>
      {/* Header */}
      <div className={` ${showSearch ? 'flex flex-col' : 'flex flex-col lg:flex-row md:justify-between md:items-center'} md:flex-row md:justify-between md:items-center mb-16`}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">All Work</h1>
          <p className="text-gray-600">A collection of our finest design and development projects</p>
        </div>
        
        {/* Search bar - Only fixed for responsiveness */}
        <div className="relative flex items-center mt-4 md:mt-0">
          {showSearch ? (
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-transparent outline-none w-full md:w-64"
                autoFocus
              />
              <button 
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className="p-2 hover:bg-gray-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all"
            >
              <Search size={20} />
            </button>
          )}
        </div>
      </div>
      
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 rounded-full transition-all font-medium 
              ${selectedFilter === category ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group cursor-pointer"
            onClick={() => setActiveProject(project.id)}  
          >
            <div className="overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">{project.title}</h3>
            <p className="text-gray-600">{project.category}</p>
          </div>
        ))}
      </div>
      
      {/* Back to Gallery button */}
      <div className="flex justify-center mt-16">
        <a href="/" className="flex items-center gap-2 text-black hover:underline transition-all">
          <ArrowLeft size={18} />
          <span>Back to Gallery</span>
        </a>
      </div>
    </div>
  );
}