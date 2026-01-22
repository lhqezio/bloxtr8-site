interface BaseLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const BaseLogo = ({ className = "", size = 24, color = "#0052FF" }: BaseLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill={color} />
  </svg>
);
