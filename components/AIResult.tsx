import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface AIResultProps {
  title: string;
  subtitle?: string;
  media?: string|StaticImport;
  mediaAlt?: string;
  link?: string;
  children?: React.ReactNode|string;
}

const AIResult: React.FC<AIResultProps> = ({ title, subtitle, media, mediaAlt, link, children }) => {
  const BaseComponent = () => (
    <div className="ai-result">
      { media && mediaAlt ?
        <div className="ai-result__media">
          <Image src={media} alt={mediaAlt} width={1920} height={1080} />
        </div>
        : null }
      <h2 className="ai-result__title">{ title }</h2>
      <h4 className="ai-result__subtitle">{ subtitle }</h4>
      <p className="ai-result__description">
        {children}
      </p>
    </div>
  );

  if (!link) {
    return <BaseComponent />;
  }

  return (
    <Link href={link}>
      <BaseComponent />
    </Link>
  );
};

export default AIResult;