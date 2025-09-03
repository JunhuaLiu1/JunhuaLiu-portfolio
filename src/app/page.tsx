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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* 左侧 - 个人照片 */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 max-w-xs">
                  <Image 
                    src="/images/工作照.jpg" 
                    alt="Junhua Liu" 
                    width={250}
                    height={320}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* 右侧 - 个人信息 */}
            <div className="text-center lg:text-left lg:pl-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Junhua Liu
              </h1>
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-accent-primary mb-4 font-medium">
                  Web Developer / Designer
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  创造美观、功能性和用户友好的数字体验。专注于现代化Web开发技术，
                  致力于将创意想法转化为高质量的产品。
                </p>
              </div>
              
              {/* 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a href="#contact" className="bg-accent-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent-secondary transition-all duration-300 hover:scale-105 shadow-lg">
                  联系我
                </a>
                <a href="#projects" className="border-2 border-accent-primary text-accent-primary px-8 py-4 rounded-full font-medium hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-105">
                  查看作品
                </a>
              </div>
              
              {/* 社交媒体快捷链接 */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="text-xl">📧</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-primary hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="text-xl">🐦</span>
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
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              我是一名充满激情的Web开发者和设计师，专注于创建现代化、响应式的网站和应用程序。
              拥有5年以上的前端开发经验，熟练掌握最新的技术栈和设计趋势。
            </p>
            <p className="text-lg text-text-gray leading-relaxed">
              我相信好的设计不仅要美观，更要实用。每个项目都是一个新的挑战和学习机会，
              我致力于将创意想法转化为高质量的数字产品。
            </p>
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
