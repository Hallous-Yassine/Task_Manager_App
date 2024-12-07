import Header from "../components/Header"; 
import Footer from "../components/Footer";
export default function About() {
    return (
        <div>
            <Header/>
        
      <div className="container mx-auto px-4 m-10 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Manager.io</h1>
  
        {/* Main Description */}
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Manager.io is a platform dedicated to simplifying management tasks for teams and individuals. 
          Our mission is to provide tools that empower users to organize, track, and accomplish their 
          goals with ease and efficiency.
        </p>
  
        {/* Mission, Vision, Values */}
        <div className="space-y-8">
          {/* Mission Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              To make management accessible and effective for everyone. We strive to develop 
              a platform that streamlines organizational tasks, enabling users to focus on what 
              matters most.
            </p>
          </section>
  
          {/* Vision Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              To be a trusted global leader in management solutions, fostering innovation and 
              empowering individuals and teams worldwide to reach their highest potential.
            </p>
          </section>
  
          {/* Values Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="text-gray-600 max-w-xl mx-auto list-disc list-inside">
              <li>Integrity and transparency in everything we do.</li>
              <li>Commitment to excellence and continuous improvement.</li>
              <li>Empathy towards our users and their unique needs.</li>
              <li>Innovation and creativity in developing solutions.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  