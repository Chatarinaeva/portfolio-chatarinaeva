import React from 'react';
import { Mail, Linkedin, MessageCircle, GraduationCap, Database, BarChart3, Brain, Code, User, BookOpen, Cpu, Github } from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              Chatarina Evangelista
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Sitorus
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Passionate about transforming data into meaningful insights through analytics and machine learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn About Me
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Data Passion</h3>
                  <p className="text-slate-600">
                    I am passionate about data and digital analytics, particularly how data can be transformed into meaningful insights that drive decision-making.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Continuous Learning</h3>
                  <p className="text-slate-600">
                    Continuously enhancing my data analysis skills through hands-on learning with Python libraries such as Pandas, NumPy, and Matplotlib, alongside SQL and data visualization fundamentals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Collaboration Ready</h3>
                  <p className="text-slate-600">
                    Open to collaboration on data-driven projects, especially in web analytics, marketing insights, or business intelligence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Current Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Code className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-slate-800">Python</p>
                  <p className="text-sm text-slate-600">Programming</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Database className="w-8 h-8 text-green-600 mb-2" />
                  <p className="font-semibold text-slate-800">SQL</p>
                  <p className="text-sm text-slate-600">Database</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="font-semibold text-slate-800">Tableau</p>
                  <p className="text-sm text-slate-600">Visualization</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <Brain className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="font-semibold text-slate-800">Machine Learning</p>
                  <p className="text-sm text-slate-600">Fundamental & Applied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
      
          <div className="space-y-8">
      
            {/* Coding Camp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Cpu className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Machine Learning Engineer Cohort</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Coding Camp 2025 powered by DBS Foundation</p>
                  <p className="text-sm text-slate-500 mb-2">Feb 2025 – Jul 2025 (Ongoing)</p>
                  <p className="text-slate-600 mb-4">Intensive program covering machine learning fundamentals, data preprocessing, Python programming, model development, and applied ML projects.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Data Processing</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Data Visualization</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Image Classification</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Mini Projects</span>
                  </div>
                  {/* <span className="inline-block mt-3 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Feb 2025 – Jul 2025 (Ongoing)</span> */}
                </div>
              </div>
            </div>
      
            {/* Undergraduate */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Undergraduate Student in Information Systems</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">Universitas Atma Jaya Yogyakarta</p>
                  <p className="text-sm text-slate-500 mb-2">Aug 2022 – Present</p>
                  <p className="text-slate-600 mb-4">Building a solid foundation in information systems, database management, and business analytics, with practical applications in digital enterprises.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Database Systems</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Business Analytics</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">System Analysis</span>
                  </div>
                  {/* <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Aug 2022 – Present</span> */}
                </div>
              </div>
            </div>
      
            {/* SMA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Senior High School – Mathematics and Natural Sciences</h3>
                  <p className="text-lg text-yellow-600 font-semibold mb-2">SMA Negeri 9 Kota Tangerang</p>
                  <p className="text-sm text-slate-500 mb-2">2019 – 2022</p>
                  <p className="text-slate-600 mb-4">Graduated with a focus in Mathematics and Natural Sciences (MIPA), fostering a strong analytical and logical foundation.</p>
                  {/* <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2019 – 2022</span> */}
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>

      
      
{/* <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
    </div>
    
    <div className="space-y-8"> */}
      {/* Undergraduate Program */}
      {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Undergraduate Student in Information Systems</h3>
            <p className="text-lg text-blue-600 font-semibold mb-2">Universitas Atma Jaya Yogyakarta – 6th Semester</p>
            <p className="text-slate-600 mb-4">
              Building a solid foundation in information systems, database management, and business analytics, 
              with a strong emphasis on practical, real-world application in digital enterprises.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Database Systems</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Business Analytics</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">System Analysis</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Coding Camp Program */}
      {/* <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <Cpu className="w-8 h-8 text-purple-600" /> 
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Machine Learning Engineer Cohort</h3>
            <p className="text-lg text-purple-600 font-semibold mb-2">Coding Camp 2025 powered by DBS Foundation</p>
            <p className="text-slate-600 mb-4">
              Completed an intensive program covering machine learning fundamentals, data preprocessing, Python programming, 
              model development, and applied ML projects—reinforced by instructor-led training sessions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Data Preprocessing</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Mini Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      
      {/* <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Bachelor of Science in Information Systems</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">Currently in 6th Semester</p>
                  <p className="text-slate-600 mb-4">
                    Developing comprehensive understanding of information systems, database management, 
                    and business analytics with focus on practical applications in modern enterprises.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Database Systems</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Business Analytics</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">System Analysis</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Machine Learning Engineer Coding Camp</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Currently Participating</p>
                  <p className="text-slate-600 mb-4">
                    Intensive program focused on machine learning algorithms, data preprocessing, 
                    model development, and deployment strategies for real-world applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Data Science</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">AI Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              A glimpse into some of the hands-on projects I've developed in analytics, machine learning, and system development.
            </p>
          </div>
      
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Customer Churn Prediction</h3>
              <p className="text-slate-600 text-sm mb-4">Built a machine learning model to predict customer churn based on behavior data using Logistic Regression and XGBoost.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Python</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Scikit-learn</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">EDA</span>
              </div>
              <a href="https://github.com/Chatarinaeva/churn-prediction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                View on GitHub →
              </a>
            </div>
      
            {/* Project Card 2 */}
            <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-2">E-Commerce Dashboard</h3>
              <p className="text-slate-600 text-sm mb-4">Interactive dashboard for sales insights, built with Tableau and integrated with SQL queries for dynamic filtering.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Tableau</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">SQL</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Data Viz</span>
              </div>
              <a href="https://public.tableau.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                View Dashboard →
              </a>
            </div>
      
            {/* Project Card 3 */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Image Classification with CNN</h3>
              <p className="text-slate-600 text-sm mb-4">Built a Convolutional Neural Network model for classifying images of clothing items from the Fashion-MNIST dataset.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">TensorFlow</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">CNN</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Deep Learning</span>
              </div>
              <a href="https://github.com/Chatarinaeva/image-classification" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm font-medium">
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to collaborate on data-driven projects or discuss opportunities in analytics and business intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:chatzarchive@gmail.com"
              className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-8 rounded-2xl text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 mb-4">Send me a message</p>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Click to Email
              </span>
            </a>
            
             {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chatarina-evangelista/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100 mb-4">Connect professionally</p>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                View Profile
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Chatarinaeva"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 rounded-2xl text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-100 mb-4">Explore my projects</p>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                View Repository
              </span>
            </a>
            
            {/* <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Quick conversation</p>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Start Chat
              </span>
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm text-slate-300">
      © {new Date().getFullYear()} Chatarina Evangelista Sitorus
    </p>
  </div>
</footer>

      {/* <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            © 2025 Information Systems Student Portfolio. Built with passion for data and analytics.
          </p>
          <p className="text-slate-400 text-sm">
            Open to collaboration on data-driven projects and business intelligence solutions.
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
