import React from 'react';

interface AIPrimitiveChatBubbleProps {
  type?: string;
  children?: React.ReactNode|string;
}

const AIChatBubble: React.FC<AIPrimitiveChatBubbleProps> = ({ type, children }) => {
  const handleTypes = (type: string) => {
    let finalTypes: string[] = [];
    type.split(' ').forEach(type => {
      finalTypes.push(`is-${type}`);
    });
    return finalTypes.join(' ');
  }

  return (
    <span className={`ai-chat-bubble${ type ? ' ' + handleTypes(type) : '' }`}>
      {children}
    </span>
  );
};

export default AIChatBubble;