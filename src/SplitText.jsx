import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'div',
  style = {},
  onLetterAnimationComplete
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll('.split-char');
    if (!letters?.length) return;

    gsap.fromTo(
      letters,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          once: true,
        },
        onComplete: () => {
          onLetterAnimationComplete?.();
        }
      }
    );
  }, [text]);

  const Tag = tag;

  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{ textAlign, display: 'block', ...style }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char"
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;