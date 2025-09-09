"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 移动端导航菜单状态
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 添加平滑滚动效果
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    // 为所有导航链接添加平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('感谢您的留言！');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 点击链接后关闭移动端菜单
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border-light z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-accent-primary">
              J.Liu
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-text-gray hover:text-accent-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">首页</a>
              <a href="#about" className="text-text-gray hover:text-accent-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">关于</a>
              <a href="#skills" className="text-text-gray hover:text-accent-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">技能</a>
              <a href="#projects" className="text-text-gray hover:text-accent-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">项目</a>
              <a href="#contact" className="text-text-gray hover:text-accent-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">联系</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-text-gray hover:text-accent-primary focus:outline-none focus:text-accent-primary p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="切换导航菜单"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
                <a href="#hero" onClick={handleLinkClick} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">首页</a>
                <a href="#about" onClick={handleLinkClick} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">关于</a>
                <a href="#skills" onClick={handleLinkClick} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">技能</a>
                <a href="#projects" onClick={handleLinkClick} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">项目</a>
                <a href="#contact" onClick={handleLinkClick} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">联系</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 移动端优先 - 个人照片 */}
            <div className="flex justify-center order-1 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-200 w-64 sm:w-80 lg:max-w-sm">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Junhua Liu" 
                    width={320}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* 移动端优先 - 主要内容 */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-2">
              {/* 姓名展示 - 移动端优化字体 */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Junhua Liu
                </h1>
              </div>
              
              {/* 职业标签 - 移动端优化 */}
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-lg">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl">⚡</span>
                  <span className="text-center">Software Engineer | FinTech Developer</span>
                </div>
              </div>
              
              {/* 价值主张 - 移动端优化 */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed font-medium">
                  I build <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">scalable solutions</span> that solve real-world problems
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  专注于创造实用的软件产品，让技术真正服务于人们的生活需求
                </p>
              </div>
              
              {/* 个人理念 - 移动端优化 */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100">
                  <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">✨</span>
                    &ldquo;The highest ideal one can achieve is self-perfection.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">— Personal Philosophy</p>
                </div>
              </div>
              
              {/* 行动按钮 - 移动端优化 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <a href="#projects" className="bg-white text-gray-700 px-6 sm:px-8 lg:px-10 py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[48px] touch-manipulation">
                  <span className="mr-3">🚀</span>
                  View My Work
                </a>
                <a href="#contact" className="bg-white text-gray-700 px-6 sm:px-8 lg:px-10 py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[48px] touch-manipulation">
                  <span className="mr-3">💬</span>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-pastel-blue">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            关于我
          </h2>
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
            {/* 个人简介 */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-text-gray leading-relaxed mb-6">
                I am a passionate software engineer with expertise in full-stack development and financial technology. 
                I specialize in creating modern, scalable applications and have a keen interest in leveraging technology 
                to solve complex business challenges in the financial sector.
              </p>
              <p className="text-base sm:text-lg text-text-gray leading-relaxed">
                I believe in writing clean, maintainable code and am always eager to learn new technologies. 
                Every project is an opportunity to grow and contribute to meaningful digital solutions.
              </p>
            </div>

            {/* 教育背景与工作经历 - 移动端堆叠 */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3">🎓</span>
                  教育背景
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">江西师范大学</p>
                    <p className="text-gray-600 text-sm sm:text-base">软件工程 学士学位</p>
                    <p className="text-xs sm:text-sm text-gray-500">2020 - 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-3">💼</span>
                  当前职位
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">中国银行江西省分行</p>
                    <p className="text-gray-600 text-sm sm:text-base">信息科技部 软件工程师</p>
                    <p className="text-xs sm:text-sm text-gray-500">2024 - 至今</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术栈与兴趣 */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-3">🚀</span>
                技术栈 & 专业兴趣
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'Python', 'Java', 'Spring Boot', 'MySQL', 'Redis', 
                  'Git', 'Docker', 'Linux', 'RESTful API'
                ].map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-400 to-purple-300 text-white px-3 py-1.5 rounded-full text-sm font-medium touch-manipulation">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                <strong>专业方向：</strong> 金融科技 • 全栈开发 • 系统架构 • 数据库设计
              </p>
            </div>

            {/* 个人特质 */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-3">⭐</span>
                工作风格
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 touch-manipulation">Detail-oriented</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 touch-manipulation">Problem solver</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 touch-manipulation">Team player</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 touch-manipulation">Curious learner</span>
                <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 touch-manipulation">Clean code advocate</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            技能专长
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: 'HTML', icon: '🌐' },
              { name: 'CSS', icon: '🎨' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'Python', icon: '🐍' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Next.js', icon: '▲' }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg card-hover touch-manipulation min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-pastel-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            精选项目
          </h2>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: '现代化的电商平台，具有完整的购物车功能和支付系统'
              },
              {
                title: 'Task Management App',
                description: '团队协作工具，支持项目管理和实时协作功能'
              },
              {
                title: 'Weather Dashboard',
                description: '响应式天气应用，提供详细的天气预报和数据可视化'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
                <div className="h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl text-gray-400">🖼️</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-text-gray mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <button className="bg-accent-primary text-white px-5 sm:px-6 py-3 rounded-full hover:bg-accent-secondary transition-colors text-sm sm:text-base font-medium w-full sm:w-auto min-h-[48px] touch-manipulation">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
            联系我
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">发送消息</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary text-base min-h-[48px] touch-manipulation"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="您的邮箱"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary text-base min-h-[48px] touch-manipulation"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="您的消息"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none text-base touch-manipulation"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-primary text-white py-4 rounded-2xl font-medium hover:bg-accent-secondary transition-colors text-base sm:text-lg min-h-[48px] touch-manipulation"
                >
                  发送消息
                </button>
              </form>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">社交媒体</h3>
              <div className="space-y-3 sm:space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-blue rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group min-h-[64px] touch-manipulation">
                  <span className="text-xl sm:text-2xl">📧</span>
                  <span className="font-medium text-sm sm:text-base">ljh9236@163.com</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-pink rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group min-h-[64px] touch-manipulation">
                  <span className="text-xl sm:text-2xl">💼</span>
                  <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-purple rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group min-h-[64px] touch-manipulation">
                  <span className="text-xl sm:text-2xl">🐙</span>
                  <span className="font-medium text-sm sm:text-base">GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-blue rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group min-h-[64px] touch-manipulation">
                  <span className="text-xl sm:text-2xl">🐦</span>
                  <span className="font-medium text-sm sm:text-base">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-text-gray text-sm sm:text-base">
            © 2025 Junhua Liu. 所有权利保留。
          </p>
        </div>
      </footer>
    </div>
  );
}
