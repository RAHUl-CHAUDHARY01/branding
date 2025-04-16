import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyWebsite: '',
    company: '',
    chatTopic: 'Our Services',
    message: ''
  });

  const [countryCode, setCountryCode] = useState('+1');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTopicSelect = (topic) => {
    setFormData({
      ...formData,
      chatTopic: topic
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12 font-[poppins]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 border-b pb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Get in touch</h1>
          <a href="#" className="flex items-center gap-2 text-black hover:text-gray-700 transition-all">
            Book a call <ArrowRight size={16} />
          </a>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-600">
            Let's collaborate on your next project. Fill out the form below and a
            member of our team will respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-500">FIRST NAME</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Harry"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-500">LAST NAME</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Potter"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="h_potter@hogwarts.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-500">PHONE</label>
              <div className="flex">
                <div className="flex items-center p-3 border-b border-gray-200">
                  <select 
                    className="bg-transparent outline-none text-sm"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+33">+33</option>
                    {/* Add more country codes as needed */}
                  </select>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent ml-2"
                  placeholder="401 111 9999"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="companyWebsite" className="block mb-2 text-sm font-medium text-gray-500">COMPANY WEBSITE</label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="ofthephoenix.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-500">COMPANY</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border-b border-gray-200 focus:border-black focus:outline-none bg-transparent"
                placeholder="Order of the Phoenix, LLC"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-4 text-sm font-medium text-gray-500">WHAT WOULD YOU LIKE TO CHAT ABOUT?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Our Services', 'Partnership', 'Careers', 'Other'].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleTopicSelect(topic)}
                  className={`p-3 text-center transition-all font-medium
                    ${formData.chatTopic === topic
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-black'
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">HOW CAN WE BE HELPFUL?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-3 border border-gray-200 focus:border-black focus:outline-none bg-transparent resize-none"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>

          <div className="mb-12">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-gray-800 transition-all"
            >
              <span>Submit</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;