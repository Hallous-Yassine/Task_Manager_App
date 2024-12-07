import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Services() {
    return (
        <div>
            <Header/>
      <div className="container mx-auto px-4 m-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
  
        {/* Main Description */}
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          At Manager.io, we offer a wide range of services designed to help teams and individuals 
          stay organized and efficient. Our platform is built with your productivity in mind, offering 
          tools to streamline management tasks.
        </p>
  
        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task Management</h2>
            <p className="text-gray-600 mb-4">
              Stay on top of all your tasks with our easy-to-use task management tools. Organize, 
              assign, and track tasks to boost your team's productivity.
            </p>
            <a href="/services/task-management" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
  
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team Collaboration</h2>
            <p className="text-gray-600 mb-4">
              Collaborate seamlessly with your team. Share files, communicate in real-time, and track 
              progress on projects with our intuitive collaboration tools.
            </p>
            <a href="/services/team-collaboration" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
  
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytics & Reporting</h2>
            <p className="text-gray-600 mb-4">
              Get actionable insights into your team's performance. Our analytics tools provide detailed 
              reports to help you make data-driven decisions.
            </p>
            <a href="/services/analytics-reporting" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
  
          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Planning</h2>
            <p className="text-gray-600 mb-4">
              Plan your projects from start to finish. Create timelines, set milestones, and assign 
              resources with our powerful project planning tools.
            </p>
            <a href="/services/project-planning" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
  
          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Time Tracking</h2>
            <p className="text-gray-600 mb-4">
              Track time spent on tasks and projects with our time tracking feature. Gain valuable insights 
              into how your team spends their time.
            </p>
            <a href="/services/time-tracking" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
  
          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Management</h2>
            <p className="text-gray-600 mb-4">
              Manage client relationships effectively. Track client interactions, manage communications, 
              and keep everything organized in one place.
            </p>
            <a href="/services/client-management" className="text-blue-600 hover:text-blue-800">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  