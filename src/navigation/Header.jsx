

function Header() {

  return (
    <header className="w-full border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold tracking-wide">
        Job Maina
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