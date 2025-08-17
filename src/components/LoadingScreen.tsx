import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([logoRef.current, progressBarRef.current, progressTextRef.current], {
      opacity: 0,
      y: 30
    });

    // Logo entrance
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to([progressBarRef.current, progressTextRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");

    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Exit animation
          setTimeout(() => {
            gsap.to(preloaderRef.current, {
              opacity: 0,
              scale: 0.9,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                onComplete();
              }
            });
          }, 500);
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${Math.min(progress, 100)}%`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [progress]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-xl float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl float" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Name */}
        <div ref={logoRef} className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text tracking-tight">
            Bikram
          </h1>
          <p className="text-muted-foreground text-lg font-light tracking-wider">
            Web & ML Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-md mx-auto space-y-4">
          <div ref={progressTextRef} className="flex justify-between text-sm text-muted-foreground">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="relative h-1 bg-border rounded-full overflow-hidden">
            <div 
              ref={progressBarRef}
              className="loading-bar h-full w-0 transition-all duration-300 ease-out"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-xs text-muted-foreground font-light tracking-widest uppercase">
          Initializing Portfolio
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;