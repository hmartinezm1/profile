export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
    >
      <p className="text-xs" style={{ color: "#334155" }}>
        © {new Date().getFullYear()} Howard Andrés Martínez Meza · Built with Next.js &amp; deployed on Vercel
      </p>
    </footer>
  );
}
