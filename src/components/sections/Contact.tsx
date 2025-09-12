'use client';

import { useContactForm } from '@/hooks/useContactForm';

export default function Contact() {
  const { formData, handleSubmit, handleInputChange } = useContactForm();

  const socialLinks = [
    { icon: '📧', text: 'ljh9236@163.com', href: 'mailto:ljh9236@163.com', bgColor: 'bg-pastel-blue' },
    { icon: '💼', text: 'LinkedIn', href: 'https://www.linkedin.com/in/junhua-liu-93b4862b7/', bgColor: 'bg-pastel-pink' },
    { icon: '🐙', text: 'GitHub', href: 'https://github.com/JunhuaLiu1', bgColor: 'bg-pastel-purple' },
    { icon: '🐦', text: 'Twitter', href: 'https://twitter.com', bgColor: 'bg-pastel-blue' }
  ];

  return (
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
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className={`flex items-center space-x-4 p-4 ${social.bgColor} rounded-2xl hover:bg-accent-primary hover:text-white transition-colors group min-h-[64px] touch-manipulation`}
                >
                  <span className="text-xl sm:text-2xl">{social.icon}</span>
                  <span className="font-medium text-sm sm:text-base">{social.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}