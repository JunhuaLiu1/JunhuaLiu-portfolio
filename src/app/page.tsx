"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border-light z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-accent-primary">J.Liu</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-text-gray hover:text-accent-primary transition-colors">首页</a>
              <a href="#about" className="text-text-gray hover:text-accent-primary transition-colors">关于</a>
              <a href="#skills" className="text-text-gray hover:text-accent-primary transition-colors">技能</a>
              <a href="#projects" className="text-text-gray hover:text-accent-primary transition-colors">项目</a>
              <a href="#contact" className="text-text-gray hover:text-accent-primary transition-colors">联系</a>
            </div>
            <div className="md:hidden">
              <button className="text-text-gray">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧 - 个人照片 */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-200 max-w-sm">
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
            
            {/* 右侧 - 主要内容 */}
            <div className="text-center lg:text-left space-y-6">
              {/* 姓名展示 */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Junhua Liu
                </h1>
              </div>
              
              {/* 职业标签 */}
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                  <span className="mr-3 text-xl">⚡</span>
                  Software Engineer | FinTech Developer
                </div>
              </div>
              
              {/* 价值主张 */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                  I build <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">scalable solutions</span> that solve real-world problems
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  专注于创造实用的软件产品，让技术真正服务于人们的生活需求
                </p>
              </div>
              
              {/* 个人理念 */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    <span className="text-2xl mr-3">✨</span>
                    &ldquo;The highest ideal one can achieve is self-perfection.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">— Personal Philosophy</p>
                </div>
              </div>
              
              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a href="#projects" className="bg-white text-gray-700 px-10 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  View My Work
                </a>
                <a href="#contact" className="bg-white text-gray-700 px-10 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            关于我
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            {/* 个人简介 */}
            <div className="mb-8">
              <p className="text-lg text-text-gray leading-relaxed mb-6">
                I am a passionate software engineer with expertise in full-stack development and financial technology. 
                I specialize in creating modern, scalable applications and have a keen interest in leveraging technology 
                to solve complex business challenges in the financial sector.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                I believe in writing clean, maintainable code and am always eager to learn new technologies. 
                Every project is an opportunity to grow and contribute to meaningful digital solutions.
              </p>
            </div>

            {/* 教育背景与工作经历 */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎓</span>
                  教育背景
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">江西师范大学</p>
                    <p className="text-gray-600">软件工程 学士学位</p>
                    <p className="text-sm text-gray-500">2020 - 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💼</span>
                  当前职位
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">中国银行江西省分行</p>
                    <p className="text-gray-600">信息科技部 软件工程师</p>
                    <p className="text-sm text-gray-500">2024 - 至今</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术栈与兴趣 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                技术栈 & 专业兴趣
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'Python', 'Java', 'Spring Boot', 'MySQL', 'Redis', 
                  'Git', 'Docker', 'Linux', 'RESTful API'
                ].map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-400 to-purple-300 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>专业方向：</strong> 金融科技 • 全栈开发 • 系统架构 • 数据库设计
              </p>
            </div>

            {/* 个人特质 */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">⭐</span>
                工作风格
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Detail-oriented</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Problem solver</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Team player</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Curious learner</span>
                <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">Clean code advocate</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            技能专长
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-pastel-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">🖼️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-text-gray mb-4">{project.description}</p>
                  <button className="bg-accent-primary text-white px-6 py-2 rounded-full hover:bg-accent-secondary transition-colors">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            联系我
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">发送消息</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary"
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
                    className="w-full px-4 py-3 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary"
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
                    className="w-full px-4 py-3 border border-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-primary text-white py-3 rounded-2xl font-medium hover:bg-accent-secondary transition-colors"
                >
                  发送消息
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">社交媒体</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-blue rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group">
                  <span className="text-2xl">📧</span>
                  <span className="font-medium">ljh9236@163.com</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-pink rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group">
                  <span className="text-2xl">💼</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-purple rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group">
                  <span className="text-2xl">🐙</span>
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 bg-pastel-blue rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group">
                  <span className="text-2xl">🐦</span>
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-text-gray">
            © 2025 Junhua Liu. 所有权利保留。
          </p>
        </div>
      </footer>
    </div>
  );
}
