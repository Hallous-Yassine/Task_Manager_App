import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
    return (
    <div>
        <Header/>
      <div className="container mx-auto px-4 m-4 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
  
        {/* Main Description */}
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We`d love to hear from you! Whether you have a question, suggestion, or just want to say hi, 
          feel free to reach out. Fill out the form below and we’ll get back to you as soon as possible.
        </p>
  
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form action="#" method="POST">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  