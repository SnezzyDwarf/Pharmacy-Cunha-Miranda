export default function PersonIcon({ size = 24, className }) {
  return (
    <svg
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g strokeWidth="0"></g>

      <g strokeLinecap="round" strokeLinejoin="round"></g>

      <g>
        <path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16S24.47,31.36,16,31.36z" />

        <rect width="32" height="32" style={{ fill: "none" }} />
      </g>
    </svg>
  );
}
