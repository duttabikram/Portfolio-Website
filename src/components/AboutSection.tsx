import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Globe, 
  Brain, 
  Rocket, 
  Database, 
  Palette,
  GitBranch,
  Cpu
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section fade-in animation
    gsap.fromTo(section, 
      { 
        opacity: 0,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      {
        x: -100,
        opacity: 0,
        rotateY: -15
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Skills stagger animation
    gsap.fromTo(skillsRef.current?.children || [],
      {
        y: 50,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const skills = [
    { icon: Code, name: 'Frontend', color: 'text-primary' },
    { icon: Database, name: 'Backend', color: 'text-secondary' },
    { icon: Brain, name: 'Machine Learning', color: 'text-accent' },
    { icon: Globe, name: 'Web3', color: 'text-primary' },
    { icon: Rocket, name: 'Performance', color: 'text-secondary' },
    { icon: Palette, name: 'UI/UX', color: 'text-accent' },
    { icon: GitBranch, name: 'DevOps', color: 'text-primary' },
    { icon: Cpu, name: 'AI Integration', color: 'text-secondary' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Profile Image - Centered */}
        <div className="flex justify-center mb-16">
          <div ref={imageRef} className="relative">
            <div className="relative w-full max-w-xs">
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl transform rotate-3" />
              
              {/* Image Container */}
              <div className="relative glass-card p-1.5 rounded-full glow-hover">
                <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                  <img 
                    src="/lovable-uploads/c2129fd8-8252-4767-b092-aa8d9de1803f.png"
                    alt="Bikram - Web & ML Developer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/60 rounded-full blur-sm float" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-secondary/60 rounded-full blur-sm float-delayed" />
            </div>
          </div>
        </div>

        {/* Content - Centered */}
        <div ref={contentRef} className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">About</span>
              <span className="gradient-text"> Me</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                I'm a passionate developer who bridges the gap between design and functionality. 
                With expertise in modern web technologies and machine learning, I create 
                digital experiences that are both beautiful and intelligent.
              </p>
              
              <p>
                My journey spans from crafting pixel-perfect user interfaces to developing 
                sophisticated AI models. I believe in the power of technology to transform 
                ideas into reality, always pushing the boundaries of what's possible.
              </p>

            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-primary">Programming</h4>
                <p className="text-sm text-muted-foreground">Java, Python </p>
              </div>
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-secondary">Frontend</h4>
                <p className="text-sm text-muted-foreground">React.js, EJS, JavaScript, HTML, CSS</p>
              </div>
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-accent">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express.js, JWT Token </p>
              </div>
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-primary">Database</h4>
                <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, ORM-Prisma</p>
              </div>
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-secondary">Containerization</h4>
                <p className="text-sm text-muted-foreground">Docker</p>
              </div>
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h4 className="font-semibold text-secondary">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center">Education</h3>
            <div className="glass-card p-6 rounded-xl space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">RCC Institute of Information Technology</h4>
                  <p className="text-primary font-medium">Bachelor of Technology - Information Technology</p>
                  <p className="text-sm text-muted-foreground">Makaut University</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">2022-2026</p>
                  <p className="text-sm text-secondary">CGPA: 8.61 (1st Year), 8.54 (2nd Year) 8.61 (3rd Year)</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Relevant Courses:</strong> Data Structures & Algorithms, Computer Networks, Operating Systems
                </p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center">Certificates</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-primary">Alpha (DSA with Java)</h4>
                <p className="text-sm text-muted-foreground">Apna College</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-accent">The Complete 2024 Web Development Bootcamp</h4>
                <p className="text-sm text-muted-foreground">Udemy</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-accent"> Introduction to Generative AI</h4>
                <p className="text-sm text-muted-foreground">Intel</p>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center">Additional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-xl text-center space-y-3 glow-hover group cursor-pointer">
                <Brain size={32} className="mx-auto text-primary transition-all duration-300 group-hover:scale-110" />
                <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  Critical Thinking
                </p>
              </div>
              <div className="glass-card p-4 rounded-xl text-center space-y-3 glow-hover group cursor-pointer">
                <Globe size={32} className="mx-auto text-secondary transition-all duration-300 group-hover:scale-110" />
                <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  Communication Skills
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto">
            {[
              { number: '8.5+', label: 'CGPA' },
              { number: '2+', label: 'Certificates' },
              { number: '5+', label: 'Major Projects' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;