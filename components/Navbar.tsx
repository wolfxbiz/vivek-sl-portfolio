export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black border-b border-white/5">
      <span className="text-white text-sm tracking-widest">vivek s l</span>
      <div className="flex items-center gap-8">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 text-sm tracking-wider hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:cristusventures@gmail.com"
          className="text-white/50 text-sm tracking-wider hover:text-white transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </nav>
  );
}
