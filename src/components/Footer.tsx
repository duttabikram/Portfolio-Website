import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Code } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Footer slide-up animation
    gsap.fromTo(footer,
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating particles animation
    gsap.to(particlesRef.current?.children || [], {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "power1.inOut"
    });

  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 border-t border-border/30 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/30 rounded-full blur-sm" />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent/30 rounded-full blur-sm" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary/30 rounded-full blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold gradient-text">Bikram</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting the future of web development with innovative solutions 
                and cutting-edge technology.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-destructive animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Let's Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:bikram@example.com" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                bikram@example.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
              <div className="text-muted-foreground">
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bikram. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-foreground transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;