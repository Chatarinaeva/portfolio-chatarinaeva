import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, GraduationCap, Database, BarChart3, Brain, Code, BookOpen, Cpu, Github, Menu, X } from 'lucide-react';

const heroTaglines = [
  'Information Systems Student at UAJY',
  'Machine Learning Graduate from Coding Camp 2025',
  'Data & Tech Enthusiast',
];

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [typedTagline, setTypedTagline] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const currentTagline = heroTaglines[taglineIndex];
    const typingSpeed = isDeleting ? 30 : 55;
    const pauseTime = 1400;

    if (!isDeleting && typedTagline === currentTagline) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && typedTagline === '') {
      setIsDeleting(false);
      setTaglineIndex((prevIndex) => (prevIndex + 1) % heroTaglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedTagline((prevText) =>
        isDeleting
          ? currentTagline.substring(0, prevText.length - 1)
          : currentTagline.substring(0, prevText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedTagline, taglineIndex, isDeleting]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = '';

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () =>  window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });

    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Portfolio</div>
      
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-black shadow-[inset_0_1.5px_5px_rgba(0,0,0,0.28)] translate-y-[1px]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
      
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-orange-400 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
      
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 pt-4 border-t border-gray-800">
              <div className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-36 py-2 rounded-full text-center text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-orange-500 text-black shadow-[inset_0_1.5px_5px_rgba(0,0,0,0.28)] translate-y-[1px]'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/70 active:bg-gray-800/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-auto min-h-screen pt-24 pb-10 sm:pt-16 flex items-start md:items-center px-4 sm:px-6 lg:px-16 bg-gray-900 relative overflow-hidden border-b border-gray-800/50">
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[140%] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-orange-500/85 via-gray-900/95 to-transparent opacity-90 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-7 md:gap-12 w-full md:pl-12 relative z-10">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.35)] border-4 border-white/90 mx-auto md:mx-0">
              <img
                src="/profilepic.jpeg"
                alt="Chatarina Evangelista Sitorus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      
          <div className="text-center md:text-left md:ml-12 flex-1 mt-4 md:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-2">
                Hi, I'm
              </span>
              Chatarina Evangelista
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mt-1">
                Sitorus
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mt-2 md:mt-3 mb-3 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed min-h-[36px]">
              <span className="font-semibold">{typedTagline}</span>
              <span className="inline-block w-[2px] h-6 bg-orange-400 ml-1 translate-y-1 animate-pulse"></span>
            </p>
      
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('about')}
                className="w-56 sm:w-auto bg-gradient-to-r from-orange-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get to Know Me
              </button>
            
              <button
                onClick={() => scrollToSection('contact')}
                className="w-56 sm:w-auto border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start mt-3">
              <div className="w-56 flex items-center justify-between bg-gray-950/80 border border-gray-800 px-5 py-2.5 rounded-full shadow-lg">
                <a
                  href="https://github.com/Chatarinaeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_18px_rgba(249,115,22,0.3)] transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
            
                <a
                  href="https://www.linkedin.com/in/chatarina-evangelista/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_18px_rgba(249,115,22,0.3)] transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
            
                <a
                  href="mailto:chatzarchive@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_18px_rgba(249,115,22,0.3)] transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
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
                  <h3 className="text-2xl font-bold text-white mb-2">Undergraduate Student – Information Systems</h3>
                  <p className="text-lg text-orange-400 font-semibold mb-2">Universitas Atma Jaya Yogyakarta</p>
                  <p className="text-sm text-gray-500 mb-3 font-medium">Aug 2022 – Present</p>
                  <p className="text-gray-400 mb-4 leading-relaxed">Developing skills in data, database systems, business analytics, and system analysis, with an interest in applying machine learning to support data-driven decision-making.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Data Analytics</span>
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Database Systems</span>
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Business Analytics</span>
                    <span className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-800">Machine Learning</span>
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
                  <p className="text-gray-400 leading-relaxed">
                    Graduated with a focus in Mathematics and Natural Sciences, building a strong foundation in mathematics, analytical reasoning, and structured problem-solving.
                  </p>
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
                <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:from-orange-300 hover:to-orange-400 transition-all duration-300">
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
                <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:from-orange-300 hover:to-orange-400 transition-all duration-300">
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
                <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold px-5 py-2 rounded-full text-sm shadow-sm hover:from-orange-300 hover:to-orange-400 transition-all duration-300">
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
            © {new Date().getFullYear()} Chatarina Evangelista Sitorus.
          </p>
          <p className="text-xs text-gray-600">
            Information Systems Student
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
