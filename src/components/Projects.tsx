import { motion } from "framer-motion";
import MarkdownIt from "markdown-it";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import project1 from "@/assets/busas.png";
import project2 from "@/assets/parental.jpg";
import project3 from "@/assets/queery.png";
import project4 from "@/assets/voghami.jpg";

const md = new MarkdownIt();
const html = md.render('# Hello World');

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bicol University Student Archiving System",
      description:
        "An archiving system for Bicol University students to store and retrieve academic records. It includes system-generated records, and a user-friendly interface.",
      image: project1,
      technologies: [
        "Filament PHP",
        "PHP",
        "Blade",
        "MySQL",
        "Tailwind CSS",
        "CSS3",
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform or renting event equipment across Albay. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: project2,
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/thirdxx/PaRental-Guardian-Website",
      liveUrl: "",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Application Dictionary",
      description:
        "A mobile dictionary application for Android only. It provides offline access to a vast collection of gay lingo words and definitions, with features like search, favorites, history, contribute words. It has 2 systems, a dictionary system and a language expert system.",
      image: project3,
      technologies: ["Dart", "Flutter", "Firebase"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      id: 4,
      title: "Voghami",
      description:
        "A simple e-commerce website for a fictional device store, featuring product listings and shopping cart functionality.",
      image: project4,
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my projects that showcase my skills and experience
            in web and app development.
          </p>
          <p className="text-muted-foreground italic">
            Note that these are only some of my projects; they do not represent
            all the projects I have made.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 ${
                  project.featured ? "border-primary/20 shadow-glow" : ""
                }`}
              >
                <div
                  className={`grid ${
                    index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                  } gap-0`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {project.featured && (
                        <Badge className="w-fit gradient-bg text-white">
                          Featured Project
                        </Badge>
                      )}

                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <div
                          className="text-muted-foreground leading-relaxed text-lg"
                          dangerouslySetInnerHTML={{
                            __html: md.render(project.description),
                          }}
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.githubUrl ? (
                          <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="flex items-center gap-2"
                              >
                                <Github className="h-4 w-4" />
                                View Code
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <div className="text-center">
                                <h3 className="text-lg font-semibold mb-2">
                                  Source Code is private
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                  This repository is not publicly accessible at
                                  the moment.
                                </p>
                                <DialogClose asChild>
                                  <Button variant="secondary">Close</Button>
                                </DialogClose>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}

                        {/* <Button
                          className="flex items-center gap-2 gradient-bg"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <Button variant="outline" className="px-8 py-3 text-lg" asChild>
            <a
              href="https://github.com/thirdxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
