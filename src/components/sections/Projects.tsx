export default function Projects() {
  const projectsData = [
    {
      title: 'YOLO-DFMnet-动态聚焦调制与注意力引导的车辆检测方法',
      description: '基于YOLO架构的创新车辆检测方法，集成动态聚焦调制机制和注意力引导策略，显著提升复杂交通场景下的检测精度和实时性能。',
      image: '/images/1.png',
      linkUrl: '/documents/yolo-dfmnet.pdf',
      linkType: 'pdf'
    },
    {
      title: 'BOC Chat - 智能聊天网页应用',
      description: '一个现代化的聊天网页应用，实现实时消息交互、用户界面优化和响应式设计，为用户提供流畅的在线沟通体验。',
      image: '/images/2.png',
      linkUrl: 'https://github.com/JunhuaLiu1/boc_chat',
      linkType: 'github'
    },
    {
      title: 'JunhuaLiu Portfolio - 个人作品集网站',
      description: '基于Next.js构建的现代化个人作品集网站，展示个人项目和技能，采用响应式设计和Tailwind CSS，为访问者提供优雅的浏览体验。',
      image: '/images/3.png',
      linkUrl: 'https://github.com/JunhuaLiu1/JunhuaLiu-portfolio',
      linkType: 'github'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-pastel-purple">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
          精选项目
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover h-full flex flex-col">
              <div className="h-40 sm:h-50 bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-3xl sm:text-4xl text-gray-400">🖼️</span>';
                    }}
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl text-gray-400">🖼️</span>
                )}
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem]">{project.title}</h3>
                <p className="text-text-gray mb-4 text-sm sm:text-base leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                <button 
                  onClick={() => {
                    if (project.linkUrl) {
                      window.open(project.linkUrl, '_blank');
                    }
                  }}
                  className="bg-accent-primary text-white px-5 sm:px-6 py-3 rounded-full hover:bg-accent-secondary transition-colors text-sm sm:text-base font-medium w-full sm:w-auto min-h-[48px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                  disabled={!project.linkUrl}
                >
                  {project.linkUrl ? (
                    project.linkType === 'github' ? '查看项目' : '查看详情'
                  ) : '敬请期待'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}