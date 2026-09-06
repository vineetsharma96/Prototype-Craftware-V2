import React from 'react';
import { RevealOnScroll } from './motion/RevealOnScroll';

export function ProductCard({ product, index, onSelect }) {
  return (
    <RevealOnScroll delay={index * 90} distance={24}>
      <div
        onClick={() => onSelect(product)}
        className="group relative bg-white rounded-2xl p-4 border border-slate-200/70 shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 cursor-pointer flex flex-col justify-between h-full"
      >
        <div>
          <div className="overflow-hidden rounded-xl bg-slate-100 aspect-4/3 mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <span className="text-lg font-extrabold text-slate-900">₹{product.price}</span>
          <span className="text-xs font-semibold text-slate-700 bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200">
            Inquire
          </span>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default ProductCard;