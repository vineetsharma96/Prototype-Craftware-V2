import React from 'react';

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  icon: Icon
}) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-xl select-none active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-md hover:shadow-lg focus-visible:ring-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:-translate-y-0.5 focus-visible:ring-slate-400",
    whatsapp: "bg-emerald-600 text-white hover:bg-emerald-500 hover:-translate-y-0.5 shadow-md hover:shadow-emerald-500/25 focus-visible:ring-emerald-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center gap-2 transform transition-transform duration-200">
        {Icon && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />}
        {children}
      </span>
    </button>
  );
}

export default AnimatedButton;