"use client";

import React, { useState } from 'react';
import AIButton from '@/components/AIButton';
import AITextBox from '@/components/AITextBox';
import AIChatBubble from '@/components/AIChatBubble';
import AIPill from '@/components/AIPill';
import AIResult from '@/components/AIResult';

import SampleDress from '@/assets/sample-dress.png';

interface AIChatWidgetProps {
  children?: React.ReactNode|string;
}

const AIChatWidget: React.FC<AIChatWidgetProps> = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const AIIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
    </svg>

  );

  const AIClose: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
    </svg>
  );

  const AISend: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
    </svg>

  );

  return (
    <section className="ai-chat-widget">
      <div className={ `ai-chat-widget__container${ isChatOpen ? ' is-open' : '' }` }>
        <div className="ai-chat-widget__wrapper">
          <div className="ai-chat-widget__chat-session">
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>Hello</AIChatBubble>
            <AIChatBubble type="user">Hello</AIChatBubble>
            <AIChatBubble>
              Here are some items that match your prompt.
            </AIChatBubble>
            <AIChatBubble type="scrollable">
              <AIResult link="#" title="Item 1" subtitle="Subtitle 1" media={SampleDress} mediaAlt="Item 1 Photo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis.
              </AIResult>
              <AIResult link="#" title="Item 1" subtitle="Subtitle 1" media={SampleDress} mediaAlt="Item 1 Photo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis.
              </AIResult>
              <AIResult link="#" title="Item 1" subtitle="Subtitle 1" media={SampleDress} mediaAlt="Item 1 Photo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis.
              </AIResult>
              <AIResult link="#" title="Item 1" subtitle="Subtitle 1" media={SampleDress} mediaAlt="Item 1 Photo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis.
              </AIResult>
              <AIResult link="#" title="Item 1" subtitle="Subtitle 1" media={SampleDress} mediaAlt="Item 1 Photo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis.
              </AIResult>
            </AIChatBubble>
            <AIPill isThinking>
              <span className="ai-thinking-circle" aria-hidden></span>
              <span className="ai-thinking-circle" aria-hidden></span>
              <span className="ai-thinking-circle" aria-hidden></span>
            </AIPill>
          </div>
          <div className="ai-chat-widget__user-input">
            <div className="ai-chat-widget__prompts">
              <AIPill>Response 1</AIPill>
              <AIPill>Response 2</AIPill>
              <AIPill>Response 2</AIPill>
              <AIPill>Response 2</AIPill>
            </div>
            <div className="ai-chat-widget__chat-box">
              <AITextBox placeholder="Ask me something..." />
              <AIButton
                icon={[<AISend />, 'leading']}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ai-chat-widget__trigger">
        <AIButton
          // @ts-ignore
          // style={{ '--ai-button-position-x': '20px', '--ai-button-position-y': isChatOpen ? 'calc(100svh - 80px)' : '40px' }}
          icon={ [isChatOpen ? <AIClose /> : <AIIcon />, 'leading']}
          onClick={ () => setIsChatOpen(!isChatOpen)}
        />
      </div>
    </section>
  );
};

export default AIChatWidget;