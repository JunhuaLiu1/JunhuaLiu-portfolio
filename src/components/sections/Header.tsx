'use client';

import { useMobileMenu } from '@/hooks/useMobileMenu';

export default function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
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
              <a href="#hero" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">首页</a>
              <a href="#about" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">关于</a>
              <a href="#skills" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">技能</a>
              <a href="#projects" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">项目</a>
              <a href="#contact" onClick={closeMobileMenu} className="block px-4 py-3 text-base font-medium text-text-gray hover:text-accent-primary hover:bg-gray-50 rounded-lg transition-colors">联系</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}