import * as React from 'react';
import { FC } from 'react';
import { ThemeProps } from '../Icon/icon'


export interface ProgressProps {
  percent: number;
  strokeHeight ?: number;
  showText ?:boolean;
  styles ?: React.CSSProperties;
  theme ?: ThemeProps
}

export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme
  } = props
  return (
    <div className="hi-progress-bar" style={styles}>
      <div className="hi-progress-bar-outer" style={{height: `${strokeHeight}px`}}>
        <div className={`hi-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary"
}

export default Progress;