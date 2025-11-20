function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center
                       bg-white/30 backdrop-blur-md">
      <h1 className="text-xl font-semibold tracking-wide">
        <a href="/">Job Maina</a>
      </h1>

      <nav className="flex gap-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#experience" className="hover:underline">Experience</a>
      </nav>
    </header>
  );
}

export default Header;
