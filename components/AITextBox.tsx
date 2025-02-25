import React from 'react';

interface AITextBoxProps {
  placeholder: string;
  children?: React.ReactNode|string;
}

const AITextBox: React.FC<AITextBoxProps> = ({ placeholder, children }) => {
  return (
    <label className="ai-textbox">
      <input type="text" className="ai-textbox__input" placeholder={placeholder} />
    </label>
  );
};

export default AITextBox;