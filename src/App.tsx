import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, GraduationCap, Database, BarChart3, Brain, Code, BookOpen, Cpu, Github } from 'lucide-react';

function App() {
  const tagline =
    'Passionate about transforming data into meaningful insights through analytics and machine learning';
  
  const [typedTagline, setTypedTagline] = useState('');
  
  useEffect(() => {
    if (typedTagline.length >= tagline.length) return;
  
    const timeout = setTimeout(() => {
      setTypedTagline(tagline.slice(0, typedTagline.length + 1));
    }, 35);
  
    return () => clearTimeout(timeout);
  }, [typedTagline, tagline]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-400 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-400 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] py-24 sm:py-28 flex items-center px-4 sm:px-6 lg:px-16 bg-gray-950 overflow-hidden border-b border-gray-800/50">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_38%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-[0_0_25px_rgba(249,115,22,0.08)]">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Final-Year Information Systems Student
            </div>
      
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
                Chatarina Evangelista
              </span>
              <span className="block text-white">
                Sitorus
              </span>
            </h1>
      
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mt-6 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed min-h-[120px] sm:min-h-[96px] lg:min-h-[84px]">
              <span>{typedTagline}</span>
              <span className="inline-block w-[2px] h-6 bg-orange-400 ml-1 translate-y-1 animate-pulse"></span>
            </p>
      
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn About Me
              </button>
      
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
      
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
              <span className="bg-gray-900/80 border border-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                Python
              </span>
              <span className="bg-gray-900/80 border border-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                SQL
              </span>
              <span className="bg-gray-900/80 border border-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="bg-gray-900/80 border border-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                Data Visualization
              </span>
            </div>
          </div>
      
          {/* Right Profile Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl scale-110 animate-pulse"></div>
      
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-br from-orange-400 via-orange-500 to-gray-900 shadow-[0_0_60px_rgba(249,115,22,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-950">
                  <img
                    src="/profilepic.jpeg"
                    alt="Chatarina Evangelista Sitorus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
      
              <div className="hidden sm:block absolute -left-10 top-10 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="text-sm font-semibold text-white">Data Analytics</p>
              </div>
      
              <div className="hidden sm:block absolute -right-8 bottom-16 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500">Interest</p>
                <p className="text-sm font-semibold text-white">Machine Learning</p>
              </div>
      
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -bottom-8 bg-orange-500 text-black rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(249,115,22,0.35)]">
                <p className="text-sm font-bold whitespace-nowrap">Open to Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-full flex-shrink-0 border border-orange-500/20">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Passion</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I am passionate about data and digital analytics, particularly how data can be transformed into meaningful insights that drive decision-making.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-full flex-shrink-0 border border-orange-500/20">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Continuously enhancing my data analysis skills through hands-on learning with Python libraries such as Pandas, NumPy, and Matplotlib, alongside SQL and data visualization fundamentals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-full flex-shrink-0 border border-orange-500/20">
                  <Brain className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration Ready</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Open to collaboration on data-driven projects, especially in web analytics, marketing insights, or business intelligence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-6">Current Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                  <Code className="w-8 h-8 text-orange-400 mb-2" />
                  <p className="font-semibold text-white">Python</p>
                  <p className="text-sm text-gray-500">Programming</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                  <Database className="w-8 h-8 text-orange-400 mb-2" />
                  <p className="font-semibold text-white">SQL</p>
                  <p className="text-sm text-gray-500">Database</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                  <BarChart3 className="w-8 h-8 text-orange-400 mb-2" />
                  <p className="font-semibold text-white">Tableau</p>
                  <p className="text-sm text-gray-500">Visualization</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                  <Brain className="w-8 h-8 text-orange-400 mb-2" />
                  <p className="font-semibold text-white">Machine Learning</p>
                  <p className="text-sm text-gray-500">Applied Model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto"></div>
          </div>
      
          <div className="space-y-8">
            {/* Undergraduate */}
            <div className="bg-gray-950 rounded-2xl p-8 hover:border-gray-700/60 transition-all duration-300 border border-gray-800/80">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-orange-500/10 p-4 rounded-full flex-shrink-0 border border-orange-500/20">
                  <GraduationCap className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Undergraduate Student in Information Systems</h3>
                  <p className="text-lg text-orange-400 font-semibold mb-2">Universitas Atma Jaya Yogyakarta</p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">Aug 2022 – Present</p>
                  <p className="text-gray-400 mb-4 leading-relaxed">Building a solid foundation in information systems, database management, and business analytics, with practical applications in digital enterprises.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Database Systems</span>
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Business Analytics</span>
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">System Analysis</span>
                  </div>
                </div>
              </div>
            </div>
      
            {/* SMA */}
            <div className="bg-gray-950 rounded-2xl p-8 hover:border-gray-700/60 transition-all duration-300 border border-gray-800/80">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-orange-500/10 p-4 rounded-full flex-shrink-0 border border-orange-500/20">
                  <GraduationCap className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Senior High School – Mathematics and Natural Sciences</h3>
                  <p className="text-lg text-orange-400 font-semibold mb-2">SMA Negeri 9 Kota Tangerang</p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">2019 – 2022</p>
                  <p className="text-gray-400 leading-relaxed">Graduated with a focus in Mathematics and Natural Sciences (MIPA), fostering a strong analytical and logical foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto"></div>
          </div>
      
          <div className="space-y-8">
            {/* Coding Camp Experience */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/[0.02] rounded-full blur-2xl" />
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-orange-500/10 p-4 rounded-full flex-shrink-0 border border-orange-500/20">
                  <Cpu className="w-8 h-8 text-orange-400" />
                </div>
      
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Machine Learning Engineer Cohort
                  </h3>
                  <p className="text-lg text-orange-400 font-semibold mb-2">
                    Coding Camp 2025 powered by DBS Foundation
                  </p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    Feb 2025 – Jul 2025
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Participated in an intensive machine learning program covering Python programming, 
                    data preprocessing, model development, data visualization, deep learning fundamentals, 
                    and applied machine learning projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Python</span>
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Machine Learning</span>
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Data Processing</span>
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Data Visualization</span>
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Deep Learning</span>
                    <span className="bg-gray-950 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800 shadow-sm">Image Classification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto"></div>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              A glimpse into some of the hands-on projects I've developed in analytics, machine learning, and system development.
            </p>
          </div>
      
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project: Data Analysis with Python */}
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800/80 flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data Analysis with Python</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">Performed exploratory data analysis using Pandas, NumPy, and Matplotlib to uncover insights from diverse datasets.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Python</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Pandas</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Matplotlib</span>
                </div>
                <a href="https://github.com/Chatarinaeva/proyek_analisis_data_python" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold inline-flex items-center transition-colors">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Sentiment Analysis */}
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800/80 flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Sentiment Analysis</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">Implemented sentiment classification on Indonesian text using machine learning models and text preprocessing techniques.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Text Mining</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">TF-IDF</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Naive Bayes</span>
                </div>
                <a href="https://github.com/Chatarinaeva/analisis_sentimen" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold inline-flex items-center transition-colors">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Predictive Analysis Project */}
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800/80 flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Predictive Analysis</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">Developed a classification model using decision tree and random forest to predict potential defaults on credit scoring datasets.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Scikit-learn</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Random Forest</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Classification</span>
                </div>
                <a href="https://github.com/Chatarinaeva/predictive_analysis_project" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold inline-flex items-center transition-colors">
                  View on GitHub →
                </a>
              </div>
            </div>
      
            {/* Project: Movie Recommendation System */}
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800/80 flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Movie Recommendation System</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">Built a content-based recommendation system using cosine similarity on movie metadata to suggest similar movies.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Recommendation</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Cosine Similarity</span>
                  <span className="bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-800">Pandas</span>
                </div>
                <a href="https://github.com/Chatarinaeva/movie_recommendation_system" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold inline-flex items-center transition-colors">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate on data-driven projects or discuss opportunities in analytics and business intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:chatzarchive@gmail.com"
              className="bg-gray-900 text-white p-8 rounded-2xl text-center border border-gray-800 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] transform hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
              <div className="relative z-10">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                  <Mail className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 mb-4 text-sm">Send me a message</p>
                <span className="inline-block bg-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:bg-orange-400 transition-colors">
                  Click to Email
                </span>
              </div>
            </a>
          
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chatarina-evangelista/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-8 rounded-2xl text-center border border-gray-800 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] transform hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
              <div className="relative z-10">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                  <Linkedin className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-400 mb-4 text-sm">Connect professionally</p>
                <span className="inline-block bg-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:bg-orange-400 transition-colors">
                  View Profile
                </span>
              </div>
            </a>
          
            {/* GitHub */}
            <a
              href="https://github.com/Chatarinaeva"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-8 rounded-2xl text-center border border-gray-800 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] transform hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
              <div className="relative z-10">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                  <Github className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <p className="text-gray-400 mb-4 text-sm">Explore my projects</p>
                <span className="inline-block bg-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:bg-orange-400 transition-colors">
                  View Repository
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-950">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Chatarina Evangelista Sitorus. Built with passion for data and analytics.
          </p>
          <p className="text-xs text-gray-600">
            Information Systems Student • Machine Learning & Business Intelligence solutions
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
