import { useEffect, useRef, useState } from 'react';

const CircleAnnotation = ({ children }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 1.2s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, 300);
  }, [visible]);

  return (
    <span ref={containerRef} style={{ position: 'relative', display: 'inline-block', padding: '10px 20px', transform: 'rotate(-8deg)' }}>
      {children}
      <svg
        style={{
          position: 'absolute',
          top: '-8px',
          left: '-12px',
          width: 'calc(100% + 24px)',
          height: 'calc(100% + 16px)',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 8,20 C 8,5 20,2 50,2 C 80,2 92,5 92,20 C 92,35 80,38 50,38 C 20,38 8,35 8,20"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default CircleAnnotation;