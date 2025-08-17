import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe, GitBranch } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current?.children || [],
      {
        opacity: 0,
        y: 80,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const projects = [
    {
      title: "Spam-Ham Detection",
      description: "Built a machine learning model using the Naive Bayes algorithm to classify messages as either spam or ham (non-spam).",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "TF-IDF", "Naive Bayes"],
      demoUrl: "https://spam-ham-detection-es4m4kwudrczq8qwk5gebz.streamlit.app/",
      codeUrl: "https://github.com/duttabikram/Spam-Ham-Detection"
    },
    {
      title: "Movie Sentiment Prediction",
      description: "Developed a machine learning model using RNN to predict the sentiment of movie reviews as positive or negative.",
      tech: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Streamlit", "RNN"],
      demoUrl: "https://movie-sentiment-prediction-8z6pg7jvdct9x8nv4v3nsj.streamlit.app/",
      codeUrl: "https://github.com/duttabikram/Movie-Sentiment-Prediction"
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed a ML model to predict customer churn based on different parameters.",
      tech: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn", "Matplotlib", "ANN"],
      demoUrl: "https://customer-churn-prediction-pt7g643gfjxrke8yugtebv.streamlit.app/",
      codeUrl: "https://github.com/duttabikram/Customer-Churn-Prediction"
    },
    {
      title: "Bill Prediction",
      description: "Built a ML model using Support Vector Machine (SVM) to predict the total bill based on features such as number of people, meal cost, tip percentage, and other factors.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "SVM", "Feature Scaling"],
      demoUrl: "https://resturant-bill-prediction-b8hxxdbnrya7csp9mla5sj.streamlit.app/",
      codeUrl: "https://github.com/duttabikram/Resturant-Bill-Prediction"
    },
    {
      title: "Blog Application",
      description: "Developed a dynamic blog platform that allows users to create, read, update, and delete blog posts.",
      tech: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Daily Note-taking Web App",
      description: "A simple and intuitive note-taking web application designed to manage daily tasks and thoughts.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Material-UI", "CSS"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions combining cutting-edge technology 
            with exceptional user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden glow-hover group cursor-pointer"
            >
              {/* Project Header */}
              <div className="relative p-6 pb-4">
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.demoUrl}
                    className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Globe size={20} className="text-foreground" />
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <GitBranch size={20} className="text-foreground" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="neuro-button text-primary-foreground">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;