export default function Skills() {
  const skillsData = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
          技能专长
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg card-hover touch-manipulation min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{skill.icon}</div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}