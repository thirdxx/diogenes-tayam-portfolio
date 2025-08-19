import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Database Management",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "PHP", level: 80, icon: "🐘" },
        { name: "Dart", level: 75, icon: "�" },
        { name: "C", level: 70, icon: "💻" },
        { name: "C#", level: 70, icon: "#️⃣" },
        { name: "C++", level: 70, icon: "➕" },
        { name: "Python", level: 80, icon: "�" },
        { name: "MySQL", level: 85, icon: "🗄️" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Laravel", level: 80, icon: "🌱" },
        { name: "Laravel Filament", level: 75, icon: "🧩" },
        { name: "Flutter", level: 80, icon: "�" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Tailwind", level: 90, icon: "💨" },
        { name: "Bootstrap", level: 80, icon: "�️" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90, icon: "🔧" },
        { name: "GitHub", level: 90, icon: "�" },
        { name: "Visual Studio Code", level: 95, icon: "�️" },
        { name: "Android Studio", level: 80, icon: "🤖" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Microsoft Office", level: 85, icon: "📄" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Canva", level: 80, icon: "🖌️" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Stack
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 py-6">
            {/* React */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="h-10"
            />
            {/* TypeScript */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="h-10"
            />
            {/* HTML5 */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="h-10"
            />
            {/* CSS3 */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="h-10"
            />
            {/* JavaScript */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="h-10"
            />
            {/* Laravel */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
              alt="Laravel"
              className="h-10"
            />
            {/* Flutter */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="Flutter"
              className="h-10"
            />
            {/* MySQL */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              className="h-10"
            />
            {/* GitHub */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="h-10"
            />
            {/* Figma */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="h-10"
            />
            {/* PHP */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
              className="h-10"
            />
            {/* MongoDB */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="h-10"
            />
            {/* Dart */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
              alt="Dart"
              className="h-10"
            />
            {/* VS Code */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
              className="h-10"
            />
            {/* Android Studio */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
              alt="Android Studio"
              className="h-10"
            />
            {/* Python */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="h-10"
            />
            {/* C# */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              alt="C#"
              className="h-10"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative">
                          <Progress value={0} className="h-2 bg-muted" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Skills in <span className="gradient-text">Progress</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Vue.js",
              "Next.js",
              "React Native",
              "MongoDB",
              "Express.js",
              "Node.js",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 rounded-lg glass hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
