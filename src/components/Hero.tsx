import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground mt-20">Hi, I'm</span>
              <span className="block gradient-text text-6xl md:text-8xl leading-tight md:leading-[1.1]">
                Diogenes Tayam
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Flutter Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>

            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              I create exceptional digital experiences with modern web
              technologies. Passionate about clean code, beautiful interfaces,
              and solving complex problems.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                onClick={scrollToProjects}
                className="btn-hero text-lg px-8 py-4"
                size="lg"
              >
                View My Work
              </Button>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 hover:scale-110 transition-transform"
                  asChild
                >
                  <a
                    href="https://github.com/thirdxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 hover:scale-110 transition-transform"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/diogenes-tayam-9208ab372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="p-3 hover:scale-110 transition-transform"
                  asChild
                >
                  <a href="mailto:diogenesiiiaraojo.tayam@gmail.com" aria-label="Send Email">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
