interface RobloxLogoProps {
  className?: string;
  size?: number;
}

export const RobloxLogo = ({ className = "", size = 24 }: RobloxLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);
