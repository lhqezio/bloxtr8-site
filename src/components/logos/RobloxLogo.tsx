interface RobloxLogoProps {
  className?: string;
  size?: number;
}

export const RobloxLogo = ({ className = "", size = 24 }: RobloxLogoProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} width={size} height={size}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.265 12.672 14.712 5.557a1.666 1.666 0 0 0-2.04 1.178L5.557 33.288a1.666 1.666 0 0 0 1.178 2.04l26.553 7.114a1.666 1.666 0 0 0 2.04-1.178l7.114-26.552a1.666 1.666 0 0 0-1.178-2.04ZM29.32 20.51l-8.182-2.192a.513.513 0 0 0-.628.363l-2.192 8.18a.513.513 0 0 0 .363.63l8.18 2.191a.513.513 0 0 0 .63-.363l2.191-8.18a.513.513 0 0 0-.363-.629Z"
    />
  </svg>
);
