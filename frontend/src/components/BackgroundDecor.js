function CatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28 L8 14 L20 22 Z" fill="currentColor" opacity="0.7" />
      <path d="M52 28 L56 14 L44 22 Z" fill="currentColor" opacity="0.7" />
      <ellipse cx="32" cy="36" rx="22" ry="18" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="34" r="3" fill="#FDF6EC" />
      <circle cx="42" cy="34" r="3" fill="#FDF6EC" />
      <circle cx="23" cy="33" r="1.5" fill="#555" />
      <circle cx="43" cy="33" r="1.5" fill="#555" />
      <path d="M28 42 Q32 46 36 42" stroke="#FDF6EC" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="18" cy="40" rx="4" ry="2.5" fill="#f8a5c2" opacity="0.5" />
      <ellipse cx="46" cy="40" rx="4" ry="2.5" fill="#f8a5c2" opacity="0.5" />
    </svg>
  );
}

function PawIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="30" rx="10" ry="12" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="16" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="10" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="36" cy="16" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="22" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="22" r="5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12 Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 28 C6 18 2 12 2 8 C2 4 5 2 8 2 C11 2 14 4 16 7 C18 4 21 2 24 2 C27 2 30 4 30 8 C30 12 26 18 16 28 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <CatIcon className="decor-icon decor-cat decor-cat-1" />
      <CatIcon className="decor-icon decor-cat decor-cat-2" />
      <PawIcon className="decor-icon decor-paw decor-paw-1" />
      <PawIcon className="decor-icon decor-paw decor-paw-2" />
      <PawIcon className="decor-icon decor-paw decor-paw-3" />
      <StarIcon className="decor-icon decor-star decor-star-1" />
      <StarIcon className="decor-icon decor-star decor-star-2" />
      <HeartIcon className="decor-icon decor-heart decor-heart-1" />
      <HeartIcon className="decor-icon decor-heart decor-heart-2" />
    </div>
  );
}

export default BackgroundDecor;
