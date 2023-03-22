import { motion } from 'framer-motion';
import { Theme } from './ThemeDarker';

//#region Handle vraiants
const handle = {
  light: {
    fill: 'rgba(245, 195, 63, 255)',
    stroke: 'rgb(255, 231, 0, 255)',
    strokeWidth: 8,
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
  dark: {
    fill: 'rgba(227, 231, 232, 255)',
    stroke: 'rgba(0 ,0 ,0, 0)',
    strokeWidth: 0,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
//#endregion

interface IHandleSVGProps {
  config: {
    theme: Theme;
    size: number;
  };
}
export default function HandleSVG({
  config: { theme, size },
}: IHandleSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="handle"
    >
      <g id="moon_handle">
        <motion.circle
          id="moon"
          cx="60"
          cy="60"
          r="45"
          fill="#E3E7E8"
          variants={handle}
          animate={theme === Theme.LIGHT ? 'dark' : 'light'}
        />
        <motion.g
          id="crater"
          variants={handle}
          animate={theme === Theme.LIGHT ? 'visible' : 'hidden'}
        >
          <motion.circle
            id="crater_05"
            cx="63"
            cy="35"
            r="10"
            fill="#B7BBBF"
            variants={handle}
          />
          <motion.circle
            id="crater_04"
            cx="73.5"
            cy="85.5"
            r="8.5"
            fill="#B7BBBF"
            variants={handle}
          />
          <motion.circle
            id="crater_03"
            cx="36.5"
            cy="63.5"
            r="5.5"
            fill="#B7BBBF"
            variants={handle}
          />
          <motion.circle
            id="crater_02"
            cx="36"
            cy="38"
            r="3"
            fill="#B7BBBF"
            variants={handle}
          />
          <motion.path
            id="crater_01"
            d="M49.4878 103.766C40.3837 101.587 32.3548 96.641 26.3397 89.8669C28.8521 87.471 32.2543 86 36 86C43.732 86 50 92.268 50 100C50 101.305 49.8216 102.567 49.4878 103.766Z"
            fill="#B7BBBF"
            variants={handle}
          />
        </motion.g>
        <motion.path
          id="shadow"
          d="M104.957 58C97.4144 74.4632 80.1239 85.9754 60 85.9754C39.8761 85.9754 22.5856 74.4632 15.0426 58C15.0143 58.6549 15 59.3135 15 59.9754C15 84.8282 35.1472 104.975 60 104.975C84.8528 104.975 105 84.8282 105 59.9754C105 59.3135 104.986 58.6549 104.957 58Z"
          fill="black"
          fillOpacity="0.2"
          variants={handle}
          animate={theme === Theme.LIGHT ? 'visible' : 'hidden'}
        />
      </g>
    </svg>
  );
}
