import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionCard = ({ children, direction = 'left', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -80, y: 0 };
      case 'right':
        return { x: 80, y: 0 };
      case 'top':
        return { x: 0, y: -80 };
      case 'bottom':
        return { x: 0, y: 80 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
