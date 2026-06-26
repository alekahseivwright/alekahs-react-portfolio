import kittyWaving from "../assets/kitty-waving.png";
import kittiesCuddling from "../assets/kitties-cuddling.png";
import kittiesRow from "../assets/kitties-row.png";

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

function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <img src={kittyWaving} alt="" className="decor-kitty decor-kitty-1" />
      <img src={kittiesCuddling} alt="" className="decor-kitty decor-kitty-2" />
      <img src={kittiesRow} alt="" className="decor-kitty decor-kitty-row" />
      <PawIcon className="decor-icon decor-paw decor-paw-1" />
      <PawIcon className="decor-icon decor-paw decor-paw-2" />
      <StarIcon className="decor-icon decor-star decor-star-1" />
      <StarIcon className="decor-icon decor-star decor-star-2" />
    </div>
  );
}

export default BackgroundDecor;
