import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from './ThemeDarker';

//#region Varinats
const cloud = {
  cloud_01_hidden: {
    x: -20,
    opacity: 0,
  },
  cloud_01_visible: {
    x: 0,
    opacity: 1,
  },
  cloud_02_hidden: {
    x: -20,
    opacity: 0,
  },
  cloud_02_visible: {
    x: 0,
    opacity: 1,
  },
};

const star = {
  hidden: {
    x: 70,
    y: -70,
    rotate: 180,
  },
  visible: {
    x: -7,
    y: 2,
    rotate: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: 'spring',
    },
  },
};
//#endregion

//#region Styled components
const Svg = styled.svg<{ config: { theme: Theme; size: number } }>`
  --size: ${props => props.config.size}px;

  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--size) * 2);
  height: var(--size);
  pointer-events: none;
`;

const Cloud = styled(motion.path)`
  filter: drop-shadow(2px 2px 2px #777576);
`;

const Star = styled(motion.path)`
  filter: drop-shadow(0 0 4px #f7f586);
`;
//#endregion

interface ISwitchBGProps {
  config: {
    theme: Theme;
    size: number;
  };
}

export default function SwitchBg({ config }: ISwitchBGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      className="switch_bg"
      config={config}
    >
      <g id="themedarker_bg">
        <Star
          id="star_03"
          d="M120 10.0001C118.723 10.0001 116.22 16.325 115.187 17.0821C114.154 17.839 107.416 18.2848 107.021 19.5096C106.627 20.7343 111.818 25.0892 112.213 26.314C112.607 27.5389 110.946 34.1393 111.979 34.8962C113.012 35.6532 118.723 32.0197 120 32.0197C121.277 32.0197 126.988 35.6532 128.021 34.8962C129.054 34.1393 127.393 27.5388 127.787 26.314C128.182 25.0892 133.373 20.7343 132.979 19.5096C132.584 18.2847 125.846 17.8389 124.813 17.082C123.78 16.325 121.277 10 120 10L120 10.0001Z"
          fill="#FCC74E"
          variants={star}
          animate={config.theme === Theme.LIGHT ? 'visible' : 'hidden'}
        />
        <Star
          id="star_02"
          d="M125 65.0001C124.214 65.0001 122.674 68.795 122.038 69.2492C121.403 69.7034 117.256 69.9709 117.013 70.7058C116.77 71.4406 119.965 74.0535 120.208 74.7884C120.451 75.5233 119.428 79.4836 120.064 79.9377C120.7 80.3919 124.214 78.2118 125 78.2118C125.786 78.2118 129.3 80.3919 129.936 79.9377C130.572 79.4836 129.549 75.5233 129.792 74.7884C130.035 74.0535 133.23 71.4406 132.987 70.7057C132.744 69.9708 128.597 69.7034 127.962 69.2492C127.326 68.795 125.786 65 125 65L125 65.0001Z"
          fill="#FCC74E"
          variants={star}
          animate={config.theme === Theme.LIGHT ? 'visible' : 'hidden'}
        />
        <Star
          id="star_01"
          d="M171.5 26.0002C169.683 26.0002 166.121 34.855 164.651 35.9149C163.181 36.9746 153.592 37.5988 153.03 39.3135C152.469 41.0281 159.857 47.1249 160.418 48.8396C160.98 50.5544 158.615 59.7951 160.085 60.8547C161.555 61.9144 169.683 56.8276 171.5 56.8276C173.317 56.8276 181.445 61.9145 182.915 60.8547C184.385 59.7951 182.02 50.5543 182.582 48.8396C183.143 47.1249 190.531 41.0281 189.97 39.3134C189.408 37.5986 179.819 36.9745 178.349 35.9147C176.879 34.855 173.317 26 171.5 26L171.5 26.0002Z"
          fill="#FCC74E"
          variants={star}
          animate={config.theme === Theme.LIGHT ? 'visible' : 'hidden'}
        />
        <Cloud
          id="cloud_02"
          d="M136.692 62.2228C136.809 61.496 136.889 60.758 136.889 59.9997C136.889 52.2693 130.504 46 122.629 46C116.439 46 111.186 49.8828 109.214 55.2949C107.75 54.4969 106.091 53.9996 104.296 53.9996C99.291 53.9996 95.1492 57.5547 94.2937 62.2265C90.6897 63.0545 88 66.2106 88 70.0004C88 74.4187 91.6483 78 96.1484 78H134.852C139.352 78 143 74.4187 143 70.0004C143 66.2068 140.303 63.0455 136.692 62.2228Z"
          fill="white"
          variants={cloud}
          animate={
            config.theme === Theme.LIGHT
              ? 'cloud_01_hidden'
              : 'cloud_01_visible'
          }
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <Cloud
          id="cloud_01"
          d="M88.875 44.9C88.325 44.9 87.775 44.99 87.225 45.26C87.4083 44.9 87.5 44.45 87.5 44C87.5 42.02 85.85 40.4 83.8333 40.4C83.0083 40.4 82.3667 40.67 81.725 41.03C80.8083 37.61 77.6 35 73.75 35C69.1667 35 65.5 38.6 65.5 43.1C65.5 43.46 65.5 43.82 65.5917 44.09C65.225 44 64.95 44 64.5833 44C62.0167 44 60 45.98 60 48.5C60 51.02 62.0167 53 64.5833 53H88.875C91.1667 53 93 51.2 93 48.95C93 46.7 91.1667 44.9 88.875 44.9Z"
          fill="white"
          variants={cloud}
          animate={
            config.theme === Theme.LIGHT
              ? 'cloud_02_hidden'
              : 'cloud_02_visible'
          }
          transition={{ duration: 0.3 }}
        />
      </g>
    </Svg>
  );
}
