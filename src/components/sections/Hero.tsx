import Image from 'next/image';

export default function Hero() {
  return (
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
  );
}