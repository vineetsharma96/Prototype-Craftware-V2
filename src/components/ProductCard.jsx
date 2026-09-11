import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './motion/RevealOnScroll';

export function ProductCard({ product, index, onSelect }) {
  return (
    <RevealOnScroll delay={index * 80} distance={24} blur={true} blurAmount={12}>
      <div
        onClick={() => onSelect(product)}
        className="group relative bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 cursor-pointer flex flex-col justify-between h-full"
      >
        <div>
          {/* Card Image Container with smooth hover zoom */}
          <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 aspect-4/3 mb-4 relative">
            <img
              src={product.image}
              alt={product.title || product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
              loading="lazy"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 text-white dark:bg-emerald-500 dark:text-slate-950 backdrop-blur-xs">
                {product.badge}
              </span>
            )}
            <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-800 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center shadow-xs">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {product.title || product.name}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 block uppercase font-medium">Price</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white">
              ₹{product.price}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950 px-3.5 py-2 rounded-xl transition-all duration-200">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </span>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default ProductCard;