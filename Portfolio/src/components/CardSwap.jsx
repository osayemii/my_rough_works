import { useState, useEffect, useRef, Children } from 'react';
import './CardSwap.css';

/**
 * CardSwap — stacked card deck that cycles cards automatically.
 *
 * Props:
 *   cardDistance   – horizontal pixel offset between stacked cards  (default 35)
 *   verticalDistance – vertical pixel offset between stacked cards  (default 8)
 *   delay          – ms between automatic swaps                     (default 3500)
 *   skewAmount     – deg of skew applied to background cards        (default 4)
 *   pauseOnHover   – stop cycling while cursor is over the deck     (default true)
 *   width / height – pixel dimensions of the card container        (default 360 / auto)
 */
const CardSwap = ({
  children,
  cardDistance = 35,
  verticalDistance = 8,
  delay = 3500,
  skewAmount = 4,
  pauseOnHover = true,
}) => {
  const items = Children.toArray(children);
  const count = items.length;

  // order[0] = front card index, order[count-1] = furthest-back card index
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef(null);
  const animRef = useRef(false);

  const swap = () => {
    if (animRef.current) return;
    animRef.current = true;
    setExiting(true);

    setTimeout(() => {
      setOrder(prev => {
        const next = [...prev];
        const front = next.shift();
        next.push(front);
        return next;
      });
      setExiting(false);
      // small buffer so state settles before next swap can trigger
      setTimeout(() => { animRef.current = false; }, 100);
    }, 850);
  };

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(swap, delay);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return (
    <div
      className="card-swap-root"
      onMouseEnter={() => pauseOnHover && clearInterval(intervalRef.current)}
      onMouseLeave={() => pauseOnHover && startAuto()}
    >
      {order.map((cardIdx, stackPos) => {
        const isFront = stackPos === 0;
        const depth   = count - 1 - stackPos; // 0 = back, count-1 = front

        /* When exiting, the front card flies top-left with a rotation */
        const exitTransform =
          'translateX(-130%) translateY(-30px) rotate(-14deg) scale(0.82)';

        /* Normal stacked position: cards behind are shifted right & down,
           slightly scaled down and skewed */
        const xOff   = stackPos * cardDistance;
        const yOff   = stackPos * verticalDistance;
        const scale  = 1 - stackPos * 0.045;
        const skew   = isFront ? 0 : -skewAmount;
        const normalTransform = `translateX(${xOff}px) translateY(${yOff}px) scale(${scale}) skewY(${skew}deg)`;

        const transform = isFront && exiting ? exitTransform : normalTransform;
        const opacity   = isFront && exiting ? 0 : 1 - stackPos * 0.12;
        const zIndex    = count - stackPos;
        /* Darken background cards slightly */
        const brightness = 1 - stackPos * 0.10;

        return (
          <div
            key={cardIdx}
            className={`card-swap-item${isFront ? ' card-swap-front' : ''}`}
            style={{
              zIndex,
              transform,
              opacity,
              filter: `brightness(${brightness})`,
              transition:
                'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.65s ease, filter 0.65s ease',
              cursor: isFront ? 'pointer' : 'default',
            }}
            onClick={isFront ? swap : undefined}
            title={isFront ? 'Click to swap' : undefined}
          >
            {items[cardIdx]}
          </div>
        );
      })}
    </div>
  );
};

export { CardSwap };
export default CardSwap;
