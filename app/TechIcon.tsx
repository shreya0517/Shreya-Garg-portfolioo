import type { JSX } from "react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({
  name,
  size = 18,
  className = "",
}: TechIconProps): JSX.Element {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `tech-svg-icon ${className}`.trim(),
  };

  switch (normalized) {
    case "react":
      return (
        <svg {...iconProps} viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M8.5 7.5V16.5M15.5 7.5L9.5 16.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path d="M15.5 11.5V16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg {...iconProps}>
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
          <path
            d="M5 9.5H12M8.5 9.5V17"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.8 11.2C17.2 10.5 16.3 10.2 15.3 10.3C14.1 10.4 13.3 11.1 13.3 12.1C13.3 14 17.8 13.2 17.8 15.6C17.8 16.8 16.7 17.5 15.2 17.5C13.9 17.5 12.8 16.9 12.3 16"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg {...iconProps}>
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 12.5V15.5C7.5 16.8 6.5 17.5 5 17M13 10V15C13 16.8 14.5 17.5 16.5 17.5C18.5 17.5 19.5 16.5 19.5 15C19.5 13 15 13 15 11.2C15 10.2 16 9.8 17 9.8C18 9.8 18.8 10.3 19.2 11"
            stroke="#1c1917"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg {...iconProps}>
          <path
            d="M6 10C7.2 7.6 9 6.8 11.4 7.6C12.8 8.1 13.8 9.1 14.9 10.2C16.7 12 18.8 14.1 22.8 12.8C21.6 15.2 19.8 16 17.4 15.2C16 14.7 15 13.7 13.9 12.6C12.1 10.8 10 8.7 6 10ZM1.2 16.4C2.4 14 4.2 13.2 6.6 14C8 14.5 9 15.5 10.1 16.6C11.9 18.4 14 20.5 18 19.2C16.8 21.6 15 22.4 12.6 21.6C11.2 21.1 10.2 20.1 9.1 19C7.3 17.2 5.2 15.1 1.2 16.4Z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "htmlcss":
    case "html":
    case "css":
      return (
        <svg {...iconProps}>
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E34F26" opacity="0.9" />
          <path d="M12 4.5V19.8L17.2 18.2L18.4 4.5H12Z" fill="#F16529" />
          <path
            d="M8 8H16M8.5 11.5H15.5L15 15.5L12 16.5L9 15.5L8.8 13.5"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
            fill="#5FA04E"
            opacity="0.18"
            stroke="#5FA04E"
            strokeWidth="1.5"
          />
          <path
            d="M12 6.5V17.5M8 9L12 6.5L16 9M8 15L12 17.5L16 15"
            stroke="#5FA04E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "expressjs":
    case "express":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="currentColor"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            ex
          </text>
        </svg>
      );

    case "restapis":
    case "restapi":
    case "api":
    case "apis":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="7" height="6" rx="2" stroke="#A78BFA" strokeWidth="1.6" />
          <rect x="14" y="4" width="7" height="6" rx="2" stroke="#60A5FA" strokeWidth="1.6" />
          <rect x="8.5" y="14" width="7" height="6" rx="2" stroke="#34D399" strokeWidth="1.6" />
          <path d="M6.5 10V12H17.5V10M12 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "graphql":
      return (
        <svg {...iconProps}>
          <path
            d="M12 3L20 7.6V16.4L12 21L4 16.4V7.6L12 3Z"
            stroke="#E10098"
            strokeWidth="1.5"
            fill="#E10098"
            fillOpacity="0.1"
          />
          <circle cx="12" cy="3" r="1.8" fill="#E10098" />
          <circle cx="20" cy="7.6" r="1.8" fill="#E10098" />
          <circle cx="20" cy="16.4" r="1.8" fill="#E10098" />
          <circle cx="12" cy="21" r="1.8" fill="#E10098" />
          <circle cx="4" cy="16.4" r="1.8" fill="#E10098" />
          <circle cx="4" cy="7.6" r="1.8" fill="#E10098" />
          <path d="M12 3L12 21M4 7.6L20 16.4M4 16.4L20 7.6" stroke="#E10098" strokeWidth="1.2" />
        </svg>
      );

    case "jwt":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2L4 6V11.5C4 16.5 7.5 20.8 12 22C16.5 20.8 20 16.5 20 11.5V6L12 2Z"
            fill="#D63AFF"
            fillOpacity="0.15"
            stroke="#D63AFF"
            strokeWidth="1.5"
          />
          <path d="M9 11L11.5 13.5L15.5 9.5" stroke="#D63AFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "websockets":
    case "websocket":
      return (
        <svg {...iconProps}>
          <circle cx="6" cy="12" r="3" fill="#00E5FF" />
          <circle cx="18" cy="12" r="3" fill="#00E5FF" />
          <path
            d="M9 9.5C11 7.5 13 7.5 15 9.5M9 14.5C11 16.5 13 16.5 15 14.5"
            stroke="#00E5FF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M9 12H15" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="7" rx="7" ry="3.5" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.6" />
          <path
            d="M5 7V12C5 13.9 8.1 15.5 12 15.5C15.9 15.5 19 13.9 19 12V7M5 12V17C5 18.9 8.1 20.5 12 20.5C15.9 20.5 19 18.9 19 17V12"
            stroke="#336791"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M12 10.5V17" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "mongodb":
    case "mongo":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2C11.5 4 6 9.5 6 14C6 17.5 8.7 20.5 12 21.5C15.3 20.5 18 17.5 18 14C18 9.5 12.5 4 12 2Z"
            fill="#47A248"
            fillOpacity="0.2"
            stroke="#47A248"
            strokeWidth="1.6"
          />
          <path d="M12 2V22" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "mysql":
    case "sql":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="3" fill="#00758F" fillOpacity="0.15" stroke="#00758F" strokeWidth="1.5" />
          <path d="M7 8L10 12L7 16M13 16H17" stroke="#F29111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "supabase":
      return (
        <svg {...iconProps}>
          <path
            d="M13.2 2.5L3.8 13.8C3.3 14.4 3.7 15.3 4.5 15.3H11.5L10.8 21.5L20.2 10.2C20.7 9.6 20.3 8.7 19.5 8.7H12.5L13.2 2.5Z"
            fill="#3ECF8E"
            stroke="#2DD4BF"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "prisma":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2.5L21 19.5C21.4 20.3 20.6 21.2 19.8 20.8L12.5 17L4.2 20.8C3.4 21.2 2.6 20.3 3 19.5L12 2.5Z"
            fill="#2D3748"
            fillOpacity="0.15"
            stroke="#38BDF8"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 2.5V17" stroke="#38BDF8" strokeWidth="1.4" />
        </svg>
      );

    case "git":
      return (
        <svg {...iconProps}>
          <path
            d="M18.8 10.7L13.3 5.2C12.5 4.4 11.5 4.4 10.7 5.2L5.2 10.7C4.4 11.5 4.4 12.5 5.2 13.3L10.7 18.8C11.5 19.6 12.5 19.6 13.3 18.8L18.8 13.3C19.6 12.5 19.6 11.5 18.8 10.7Z"
            fill="#F05032"
            fillOpacity="0.2"
            stroke="#F05032"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="14" r="1.5" fill="#F05032" />
          <circle cx="14" cy="10" r="1.5" fill="#F05032" />
          <path d="M10 9V14M10 11.5L14 10" stroke="#F05032" strokeWidth="1.4" />
        </svg>
      );

    case "github":
      return (
        <svg {...iconProps}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.84 21.524C9.34 21.617 9.52 21.307 9.52 21.042C9.52 20.803 9.51 20.009 9.51 19.168C6.73 19.772 6.14 17.828 6.14 17.828C5.68 16.666 5.03 16.357 5.03 16.357C4.12 15.738 5.1 15.751 5.1 15.751C6.1 15.822 6.63 16.781 6.63 16.781C7.52 18.312 8.97 17.87 9.54 17.614C9.63 16.968 9.89 16.527 10.17 16.277C7.95 16.026 5.62 15.168 5.62 11.341C5.62 10.252 6.01 9.359 6.65 8.66C6.55 8.411 6.21 7.393 6.75 6.021C6.75 6.021 7.59 5.751 9.5 7.043C10.3 6.821 11.15 6.711 12 6.707C12.85 6.711 13.7 6.821 14.5 7.043C16.41 5.751 17.25 6.021 17.25 6.021C17.79 7.393 17.45 8.411 17.35 8.66C17.99 9.359 18.38 10.252 18.38 11.341C18.38 15.179 16.04 16.023 13.82 16.27C14.18 16.579 14.5 17.189 14.5 18.127C14.5 19.467 14.49 20.686 14.49 21.042C14.49 21.31 14.67 21.624 15.18 21.524C19.14 20.193 22 16.444 22 12.017C22 6.484 17.522 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );

    case "docker":
      return (
        <svg {...iconProps}>
          <path
            d="M2.5 13.5C3.2 13.5 4 14.2 4.5 15C5.8 17 8 18 11 18C16.5 18 19.8 14.5 20.5 10C19.5 9.5 18 9.5 17 10C16.8 7.5 15 6 13.5 6C13.5 7 13 8 12.2 8.5C11.5 7.8 10.5 7.8 9.8 8.5H3.5C2.5 9 2.5 11 2.5 13.5Z"
            fill="#2496ED"
            fillOpacity="0.2"
            stroke="#2496ED"
            strokeWidth="1.4"
          />
          <rect x="7" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="10" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="13" y="10" width="2" height="2" rx="0.5" fill="#2496ED" />
          <rect x="10" y="7.5" width="2" height="2" rx="0.5" fill="#2496ED" />
        </svg>
      );

    case "aws":
      return (
        <svg {...iconProps}>
          <path
            d="M6 14C8.5 16 12 17 17 14.5"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M16 13.5L18.5 14.5L17.2 16.8" fill="#FF9900" stroke="#FF9900" strokeWidth="0.8" strokeLinejoin="round" />
          <path
            d="M7.5 7L5 12H7L8 10H10L11 12H13L10.5 7H7.5Z"
            fill="#FF9900"
            opacity="0.85"
          />
        </svg>
      );

    case "vercel":
      return (
        <svg {...iconProps}>
          <path d="M12 3L22 20H2L12 3Z" fill="currentColor" />
        </svg>
      );

    case "netlify":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2.5L20.5 11L12 19.5L3.5 11L12 2.5Z"
            fill="#00C7B7"
            fillOpacity="0.2"
            stroke="#00C7B7"
            strokeWidth="1.6"
          />
          <path d="M12 6.5V15.5M7.5 11H16.5" stroke="#00C7B7" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "vscode":
      return (
        <svg {...iconProps}>
          <path
            d="M17.5 2.5L7 10.5L3.5 7.5L2 8.5V15.5L3.5 16.5L7 13.5L17.5 21.5L21.5 19.5V4.5L17.5 2.5Z"
            fill="#007ACC"
            fillOpacity="0.25"
            stroke="#007ACC"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M17.5 7.5V16.5" stroke="#007ACC" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "figma":
      return (
        <svg {...iconProps}>
          <circle cx="15.5" cy="12" r="3.5" fill="#1ABCFE" />
          <path d="M8.5 5C10.4 5 12 6.6 12 8.5C12 10.4 10.4 12 8.5 12H5V8.5C5 6.6 6.6 5 8.5 5Z" fill="#F24E1E" />
          <path d="M15.5 5C17.4 5 19 6.6 19 8.5C19 10.4 17.4 12 15.5 12H12V5H15.5Z" fill="#FF7262" />
          <path d="M8.5 12C10.4 12 12 13.6 12 15.5C12 17.4 10.4 19 8.5 19C6.6 19 5 17.4 5 15.5C5 13.6 6.6 12 8.5 12Z" fill="#0ACF83" />
        </svg>
      );

    case "postman":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9.5" fill="#FF6C37" fillOpacity="0.2" stroke="#FF6C37" strokeWidth="1.5" />
          <path
            d="M6 12.5L17 7L13 18L10.5 14L6 12.5Z"
            fill="#FF6C37"
            stroke="#FF6C37"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "linux":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2C9.5 2 7.5 4 7.5 7V13C7.5 16 9.5 18 12 18C14.5 18 16.5 16 16.5 13V7C16.5 4 14.5 2 12 2Z"
            fill="#FCC624"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="10" cy="6.5" r="1" fill="currentColor" />
          <circle cx="14" cy="6.5" r="1" fill="currentColor" />
          <path d="M10.5 9C11.5 9.8 12.5 9.8 13.5 9" stroke="#FFA000" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7 19C5 19 4 20.5 4 22H20C20 20.5 19 19 17 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "pnpm":
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="4.5" height="4.5" fill="#F69220" />
          <rect x="9.5" y="3" width="4.5" height="4.5" fill="#F69220" />
          <rect x="16" y="3" width="4.5" height="4.5" fill="#4ABA2C" />
          <rect x="9.5" y="9.5" width="4.5" height="4.5" fill="#F69220" />
          <rect x="16" y="9.5" width="4.5" height="4.5" fill="#4ABA2C" />
          <rect x="3" y="16" width="4.5" height="4.5" fill="#F69220" />
          <rect x="9.5" y="16" width="4.5" height="4.5" fill="#4ABA2C" />
          <rect x="16" y="16" width="4.5" height="4.5" fill="#4ABA2C" />
        </svg>
      );

    case "jest":
      return (
        <svg {...iconProps}>
          <path
            d="M6 3H18C19 3 20 4 20 5V19C20 20 19 21 18 21H6C5 21 4 20 4 19V5C4 4 5 3 6 3Z"
            fill="#C21325"
            fillOpacity="0.18"
            stroke="#C21325"
            strokeWidth="1.5"
          />
          <path d="M8 8H16M8 12H13M8 16H11" stroke="#C21325" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "stripe":
      return (
        <svg {...iconProps}>
          <rect x="2" y="4" width="20" height="16" rx="3.5" fill="#635BFF" fillOpacity="0.2" stroke="#635BFF" strokeWidth="1.5" />
          <path
            d="M13.5 9.5C13 9.1 12.3 8.8 11.5 8.8C10.1 8.8 9.3 9.6 9.3 10.7C9.3 12.8 14.7 11.8 14.7 14.4C14.7 15.8 13.5 16.8 11.7 16.8C10.6 16.8 9.7 16.3 9.1 15.7M12 7.5V8.5M12 17V18"
            stroke="#635BFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="currentColor"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            {name.slice(0, 1).toUpperCase()}
          </text>
        </svg>
      );
  }
}
