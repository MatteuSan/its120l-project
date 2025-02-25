import React, { MouseEventHandler } from 'react';

interface AIButtonProps {
  icon?: [string|React.ReactNode, 'leading'|'trailing'],
  style?: React.CSSProperties|undefined
  onClick?: () => MouseEventHandler|void,
  children?: React.ReactNode|string;
}

const AIButton: React.FC<AIButtonProps> = ({ icon, onClick, style, children }) => {
  return (
    <button className={`ai-button`} onClick={onClick} style={style}>
      { icon && icon[1] === 'trailing' && icon[0] ? <span className="ai-button__icon">{ icon[0] }</span> : null }
      { children ? <span className="ai-button__label">{ children }</span> : null }
      { icon && icon[1] === 'leading' && icon[0] ? <span className="ai-button__icon">{ icon[0] }</span> : null }
    </button>
  );
};

export default AIButton;