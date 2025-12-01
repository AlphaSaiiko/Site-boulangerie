import React from "react";

export default function OfferCard({
  title,
  subtitle,
  price,
  priceSuffix,
  features,
  popular,
  highlighted,
  ctaText = "Choisir",
}: {
  title: string;
  subtitle?: string;
  price?: string;
  priceSuffix?: string;
  features?: string[];
  popular?: boolean;
  highlighted?: boolean;
  ctaText?: string;
}) {
  const base = highlighted
    ? "relative rounded-2xl bg-amber-800 text-white shadow-lg p-8"
    : "rounded-2xl bg-white border border-amber-100 p-8";

  return (
    <div className={base}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold">★ Populaire</span>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className={highlighted ? "text-xl font-bold" : "text-lg font-semibold text-zinc-900"}>{title}</h3>
            {subtitle && <p className={highlighted ? "mt-2 text-amber-100" : "mt-2 text-zinc-600 text-sm"}>{subtitle}</p>}
          </div>
        </div>

        {price && (
          <div className={highlighted ? "mt-2 text-3xl font-extrabold text-white" : "mt-2 text-2xl font-bold text-amber-800"}>
            {price} <span className={highlighted ? "text-base font-medium text-amber-100" : "text-sm text-zinc-600"}>{priceSuffix}</span>
          </div>
        )}

        <div>
          <button className={
            highlighted
              ? "mt-4 w-full rounded-full bg-white py-3 text-amber-800 font-semibold shadow btn-hover"
              : "mt-4 w-full rounded-full bg-amber-800 py-3 text-white font-semibold hover:opacity-95 btn-hover"
          }>
            {ctaText} →
          </button>
        </div>

        {features && (
          <ul className={highlighted ? "mt-6 space-y-3 text-amber-100 text-sm" : "mt-6 space-y-3 text-zinc-600 text-sm"}>
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={highlighted ? "mt-1 text-amber-100" : "mt-1 text-amber-700"} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke={highlighted ? "#FDE68A" : "#A44A11"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
