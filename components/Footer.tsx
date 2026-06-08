export default function Footer() {
  return (
    <footer className="bg-white px-8 md:px-30 lg:px-60 py-24 border-t border-neutral-100">
      <div className="max-w-3xl mb-20">
        <p className="text-neutral-900 text-3xl md:text-4xl leading-snug tracking-tight">
          A designer who thinks like a PM — with the business education to back it up.
          Open to product roles, design leadership, and high-growth teams.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-10">
          <a
            href="tel:+918921284894"
            className="text-neutral-400 text-sm tracking-wider hover:text-black transition-colors duration-300"
          >
            +91 8921284894
          </a>
          <a
            href="mailto:vivekshajilekha@gmail.com"
            className="text-neutral-400 text-sm tracking-wider hover:text-black transition-colors duration-300"
          >
            vivekshajilekha@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/viveksl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 text-sm tracking-wider hover:text-black transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-neutral-300 text-sm tracking-wider">
          © {new Date().getFullYear()} VIVEK S L
        </p>
      </div>
    </footer>
  );
}
