// Contact.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FiMail, FiMapPin, FiPhone, FiSend, FiMessageSquare } from 'react-icons/fi';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our API? Want to learn more about our enterprise solutions? 
              Our team is here to help you implement the perfect email solution for your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FiMail className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Our support team typically responds within 2 hours</p>
              <a href="mailto:support@papersignal.com" className="text-black font-medium hover:underline">
                support@papersignal.com
              </a>
            </div>
            
            {/* Office */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FiMapPin className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Mon-Fri, 9AM-5PM PT</p>
              <address className="text-black not-italic">
                123 Tech Street, Suite 400<br />
                San Francisco, CA 94107
              </address>
            </div>
            
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FiPhone className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available Mon-Fri, 8AM-6PM PT</p>
              <a href="tel:+18005551234" className="text-black font-medium hover:underline">
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you as soon as possible. 
                We're looking forward to hearing from you!
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-black mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-100 p-3 rounded-full text-black hover:bg-gray-200 transition-colors"
                  >
                    <BsTwitter className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 p-3 rounded-full text-black hover:bg-gray-200 transition-colors"
                  >
                    <BsGithub className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 p-3 rounded-full text-black hover:bg-gray-200 transition-colors"
                  >
                    <BsLinkedin className="text-lg" />
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-black mb-4 flex items-center">
                  <FiMessageSquare className="mr-2" />
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Chat with our support team right now.
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center">
                  <FiMessageSquare className="mr-2" />
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="md:w-3/5">
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiSend className="text-green-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                      <select 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Sales">Sales</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gray-300 w-full h-96 rounded-xl">
            {/* Map placeholder - you would integrate Google Maps or similar here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Map Integration Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">How quickly can I get started?</h3>
              <p className="text-gray-600">
                You can sign up and start sending emails within minutes. Our simple API requires minimal setup and our documentation provides clear examples to get you started quickly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">What kind of support do you offer?</h3>
              <p className="text-gray-600">
                We offer email support for all plans, with priority support for Growth and Enterprise customers. Enterprise customers also receive dedicated account managers and 24/7 phone support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Do you have SDKs for my language?</h3>
              <p className="text-gray-600">
                Yes, we provide official SDKs for JavaScript, Python, Ruby, PHP, Go, Java, and .NET. Community-maintained libraries are available for other languages.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Is PaperSignal GDPR compliant?</h3>
              <p className="text-gray-600">
                Yes, PaperSignal is fully GDPR compliant. We provide the tools needed to help you maintain compliance, including consent management, data deletion capabilities, and detailed documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <FiMail className="text-black text-2xl mr-2" />
                <span className="font-bold text-xl text-black">PaperSignal</span>
              </div>
              <p className="text-gray-600 mb-6">
                The email API for modern developers
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <p className="text-gray-500 text-center">
              &copy; {new Date().getFullYear()} PaperSignal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;