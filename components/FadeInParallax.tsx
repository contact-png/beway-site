'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeInParallax({
  children,
  delay = 0,
  scrollSpeed = 0.2,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  scrollSpeed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (ref.current) {
        const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY;
        const parallax = (y - offsetTop) * scrollSpeed;
        setOffsetY(parallax);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollSpeed]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{
        transform: `translateY(${isVisible ? offsetY : 24}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}