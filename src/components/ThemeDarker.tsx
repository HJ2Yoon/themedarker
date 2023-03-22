import { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import HandleSVG from './HandleSVG';

export enum Theme {
  LIGHT,
  DARK,
}

interface IThemeDarkerProps {
  size?: number;
}

//#region ToggleBtn styled component
const HandleFrame = styled(motion.div)``;

export const ButtonFrame = styled.div<{
  config: { theme: Theme; size: number };
}>`
  --size: ${props => props.config.size}px;

  display: flex;
  ${props =>
    props.config.theme === Theme.LIGHT
      ? css`
          justify-content: flex-start;
          background: linear-gradient(to left, #000428, #004e92);
        `
      : css`
          justify-content: flex-end;
          background: linear-gradient(to left, #2980b9, #6dd5fa, #ffffff);
        `};
  align-items: center;
  width: calc(var(--size) * 2);
  border-radius: calc((var(--size) + var(--size) * 0.28) / 2);

  ${HandleFrame} {
    width: var(--size);
    height: var(--size);
  }
`;
//#endregion

export function ThemeDarker({ size = 50 }: IThemeDarkerProps) {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const onClick = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const styledConfig = {
    theme: theme,
    size: size,
  };

  return (
    <ButtonFrame config={styledConfig}>
      <HandleFrame
        layout
        onClick={onClick}
        animate={{ rotate: theme === Theme.LIGHT ? 0 : 180 }}
        transition={{
          default: { duration: 0.7, type: 'spring', bounce: 0.4 },
          rotate: { duration: 0.7, type: 'spring' },
        }}
      >
        <HandleSVG config={styledConfig} />
      </HandleFrame>
    </ButtonFrame>
  );
}
