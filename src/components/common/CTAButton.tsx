'use client';

import React from 'react';
import { MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  label?: string;
  type?: 'whatsapp' | 'email';
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  label,
  type = 'whatsapp',
  className = '',
}) => {
  const href = type === 'whatsapp' ? SITE_CONFIG.links.whatsappUrl : SITE_CONFIG.links.mailtoUrl;
  const defaultLabel = type === 'whatsapp' ? 'אני רוצה הצעת מחיר' : 'שלחו לנו אימייל';

  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3.5 text-base gap-2.5 shadow-lg',
    lg: 'px-8 py-4 text-lg gap-3 shadow-xl',
  };

  const variantStyles = {
    primary:
      'bg-brand-accent hover:bg-brand-accent-hover text-white shadow-brand-accent/25 hover:shadow-brand-accent/40 border border-sky-400/30',
    secondary:
      'bg-surface hover:bg-surface-hover text-slate-200 border border-surface-border hover:border-slate-600',
    outline:
      'bg-transparent hover:bg-white/5 text-slate-200 border border-slate-700 hover:border-brand-accent',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <a
      href={href}
      target={type === 'whatsapp' ? '_blank' : undefined}
      rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
      aria-label={label || defaultLabel}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
    >
      {type === 'whatsapp' ? (
        <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
      ) : (
        <Mail className="w-5 h-5 text-sky-400 shrink-0" aria-hidden="true" />
      )}
      <span>{label || defaultLabel}</span>
      <ArrowLeft className="w-4 h-4 rtl:rotate-0 rotate-180 opacity-70 group-hover:translate-x-[-2px] transition-transform shrink-0" aria-hidden="true" />
    </a>
  );
};
