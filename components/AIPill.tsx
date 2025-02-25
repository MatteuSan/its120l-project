import React from 'react';

interface AIPillProps {
  isThinking?: boolean;
  onClick?: () => void;
  children?: React.ReactNode|string;
}

const AIPill: React.FC<AIPillProps> = ({ isThinking, onClick, children }) => {
  return (
    <span className={`ai-pill${ isThinking ? ' is-thinking' : '' }`} onClick={ onClick }>
      { children }
    </span>
  );
};

export default AIPill;