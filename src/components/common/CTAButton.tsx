'use client';

import React from 'react';
import { MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams, useWhatsAppHref } from '@/lib/utm';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  label?: string;
  type?: 'whatsapp' | 'email';
  /** Analytics placement context, e.g. hero / header / closing. */
  location: string;
  /** When true, secondary/outline styles adapt for dark (--ink) backgrounds. */
  onDark?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  label,
  type = 'whatsapp',
  location,
  onDark = false,
  className = '',
}) => {
  const whatsappHref = useWhatsAppHref();
  const href = type === 'whatsapp' ? whatsappHref : SITE_CONFIG.links.mailtoUrl;
  const defaultLabel =
    type === 'whatsapp' ? SITE_CONFIG.cta.primary : SITE_CONFIG.cta.email;

  const handleClick = (): void => {
    trackEvent(type === 'whatsapp' ? 'whatsapp_cta_click' : 'email_cta_click', {
      location,
      ...getUtmParams(),
    });
  };

  const ringOffset = onDark ? 'focus-visible:ring-offset-ink' : 'focus-visible:ring-offset-paper';

  const baseStyles = `inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue-ink ${ringOffset} focus-visible:ring-offset-2 active:scale-[0.98]`;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3.5 text-base gap-2.5',
    lg: 'px-6 sm:px-8 py-4 text-base sm:text-lg gap-3',
  };

  const variantStyles = {
    primary: 'bg-accent-blue hover:bg-accent-blue-hover text-ink shadow-cta',
    secondary: onDark
      ? 'bg-transparent hover:bg-white/5 text-paper/90 border border-paper/25 hover:border-paper/40 font-medium'
      : 'bg-surface hover:bg-paper text-text border border-line hover:border-accent-blue-ink shadow-card font-medium',
    outline: onDark
      ? 'bg-transparent hover:bg-white/5 text-paper/80 border border-paper/20 hover:border-paper/35 font-medium'
      : 'bg-transparent hover:bg-surface text-text border border-line hover:border-accent-blue-ink font-medium',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <a
      href={href}
      target={type === 'whatsapp' ? '_blank' : undefined}
      rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      aria-label={`${label || defaultLabel}${
        type === 'whatsapp' ? ' (נפתח בכרטיסייה חדשה)' : ''
      }`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
    >
      {type === 'whatsapp' ? (
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      ) : (
        <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
      )}
      <span>{label || defaultLabel}</span>
      <ArrowLeft className="w-4 h-4 opacity-80 shrink-0" aria-hidden="true" />
    </a>
  );
};
