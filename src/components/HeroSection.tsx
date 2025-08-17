import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      filter: "blur(5px)"
    });

    // Animate elements in sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    // Floating animation for background elements
    gsap.to(".glow-orb-1", {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".glow-orb-2", {
      y: 20,
      x: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1
    });

    gsap.to(".glow-orb-3", {
      x: 25,
      y: -15,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2
    });

  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="spline-container">
        <iframe 
          src='https://my.spline.design/particles-kxjKE6bAb3Yexma0PvnVywim/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        />
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb-1 absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="glow-orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        <div className="glow-orb-3 absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text">Bikram</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-4">
              Web & ML Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
          >
            Crafting immersive digital experiences with cutting-edge technologies.
            Specializing in React, Machine Learning, and futuristic web design.
          </p>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <button 
              onClick={scrollToContact}
              className="neuro-button group flex items-center gap-3 text-primary-foreground text-lg"
            >
              Hire Me
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </button>

            <button 
              onClick={scrollToProjects}
              className="glass-card px-8 py-4 rounded-xl font-medium text-foreground hover:bg-card/20 transition-all duration-300 flex items-center gap-3 glow-hover"
            >
              View Work
              <Download size={20} />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;