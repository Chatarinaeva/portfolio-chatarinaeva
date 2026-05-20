import React from 'react';
import { Mail, Linkedin, GraduationCap, Database, BarChart3, Brain, Code, BookOpen, Cpu, Github } from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-auto min-h-screen pt-20 sm:pt-16 flex items-center px-4 sm:px-6 lg:px-16 bg-gray-900 relative overflow-hidden">
        {/* Efek Radial Gradient Oranye Pekat Tepat di Sisi Kanan (Vertikal Tengah) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[140%] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-orange-500/85 via-gray-900/95 to-transparent opacity-90 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 w-full md:pl-12 relative z-10">
          <div className="flex-shrink-0">
            {/* Efek glow oranye pada border foto profil */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.35)] border-4 border-white/90 mx-auto md:mx-0">
              <img
                src="/profilepic.jpeg"
                alt="Chatarina Evangelista Sitorus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left md:ml-12 flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Chatarina Evangelista
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mt-1">
                Sitorus
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-4 mb-8 max-w-md md:max-w-lg leading-relaxed">
              Passionate about transforming data into meaningful insights through analytics and machine learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn About Me
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full flex-shrink-0">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Passion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I am passionate about data and digital analytics, particularly how data can be transformed into meaningful insights that drive decision-making.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 p-3 rounded-full flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuously enhancing my data analysis skills through hands-on learning with Python libraries such as Pandas, NumPy, and Matplotlib, alongside SQL and data visualization fundamentals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                  <Brain className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration Ready</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Open to collaboration on data-driven projects, especially in web analytics, marketing insights, or business intelligence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-orange-50/60 p-8 rounded-2xl border border-orange-100/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Code className="w-8 h-8 text-orange-500 mb-2" />
                  <p className="font-semibold text-gray-800">Python</p>
                  <p className="text-sm text-gray-500">Programming</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Database className="w-8 h-8 text-amber-500 mb-2" />
                  <p className="font-semibold text-gray-800">SQL</p>
                  <p className="text-sm text-gray-500">Database</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="font-semibold text-gray-800">Tableau</p>
                  <p className="text-sm text-gray-500">Visualization</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Brain className="w-8 h-8 text-amber-600 mb-2" />
                  <p className="font-semibold text-gray-800">Machine Learning</p>
                  <p className="text-sm text-gray-500">Applied Model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>
      
          <div className="space-y-8">
            {/* Undergraduate */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-orange-50 p-4 rounded-full flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Undergraduate Student in Information Systems</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-2">Universitas Atma Jaya Yogyakarta</p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">Aug 2022 – Present</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">Building a solid foundation in information systems, database management, and business analytics, with practical applications in digital enterprises.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">Database Systems</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">Business Analytics</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">System Analysis</span>
                  </div>
                </div>
              </div>
            </div>
      
            {/* SMA */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-amber-50 p-4 rounded-full flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Senior High School – Mathematics and Natural Sciences</h3>
                  <p className="text-lg text-amber-600 font-semibold mb-2">SMA Negeri 9 Kota Tangerang</p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">2019 – 2022</p>
                  <p className="text-gray-600 leading-relaxed">Graduated with a focus in Mathematics and Natural Sciences (MIPA), fostering a strong analytical and logical foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>
      
          <div className="space-y-8">
            {/* Coding Camp Experience */}
            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100/40">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-orange-100/60 p-4 rounded-full flex-shrink-0">
                  <Cpu className="w-8 h-8 text-orange-600" />
                </div>
      
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Machine Learning Engineer Cohort
                  </h3>
                  <p className="text-lg text-orange-600 font-semibold mb-2">
                    Coding Camp 2025 powered by DBS Foundation
                  </p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    Feb 2025 – Jul 2025
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Participated in an intensive machine learning program covering Python programming, 
                    data preprocessing, model development, data visualization, deep learning fundamentals, 
                    and applied machine learning projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Python</span>
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Machine Learning</span>
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Data Processing</span>
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Data Visualization</span>
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Deep Learning</span>
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Image Classification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              A glimpse into some of the hands-on projects I've developed in analytics, machine learning, and system development.
            </p>
          </div>
      
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project: Data Analysis with Python */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Analysis with Python</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Performed exploratory data analysis using Pandas, NumPy, and Matplotlib to uncover insights from diverse datasets.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Python</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Pandas</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Matplotlib</span>
                </div>
                <a href="https://github.com/Chatarinaeva/proyek_analisis_data_python" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-semibold inline-flex items-center">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Sentiment Analysis */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sentiment Analysis</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Implemented sentiment classification on Indonesian text using machine learning models and text preprocessing techniques.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Text Mining</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">TF-IDF</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Naive Bayes</span>
                </div>
                <a href="https://github.com/Chatarinaeva/analisis_sentimen" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-semibold inline-flex items-center">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Predictive Analysis Project */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Predictive Analysis</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Developed a classification model using decision tree and random forest to predict potential defaults on credit scoring datasets.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Scikit-learn</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Random Forest</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Classification</span>
                </div>
                <a href="https://github.com/Chatarinaeva/predictive_analysis_project" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-semibold inline-flex items-center">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Movie Recommendation System */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Movie Recommendation System</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Built a content-based recommendation system using cosine similarity on movie metadata to suggest similar movies.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Recommendation</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Cosine Similarity</span>
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">Pandas</span>
                </div>
                <a href="https://github.com/Chatarinaeva/movie_recommendation_system" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-semibold inline-flex items-center">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on data-driven projects or discuss opportunities in analytics and business intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:chatzarchive@gmail.com"
              className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-2xl text-center hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-orange-50 mb-4 text-sm">Send me a message</p>
              <span className="inline-block bg-white text-orange-600 font-semibold px-5 py-2 rounded-full text-sm shadow-sm group-hover:bg-orange-50 transition-colors">
                Click to Email
              </span>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chatarina-evangelista/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl text-center hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 group border border-gray-700/30"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300 mb-4 text-sm">Connect professionally</p>
              <span className="inline-block bg-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm group-hover:bg-orange-400 transition-colors">
                View Profile
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Chatarinaeva"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-8 rounded-2xl text-center hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 group border border-gray-200"
            >
              <div className="bg-gray-800/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-500 mb-4 text-sm">Explore my projects</p>
              <span className="inline-block bg-gray-800 text-white font-medium px-5 py-2 rounded-full text-sm shadow-sm group-hover:bg-gray-700 transition-colors">
                View Repository
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Chatarina Evangelista Sitorus. Built with passion for data and analytics.
          </p>
          <p className="text-xs text-gray-500">
            Information Systems Student • Machine Learning & Business Intelligence solutions
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
