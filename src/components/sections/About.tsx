export default function About() {
  return (
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
  );
}