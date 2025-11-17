import { Link } from "react-router-dom";


function Header() {

  return (
    <header className="w-full border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold tracking-wide">
        Job Maina
      </h1>

      <nav className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
      </nav>
    </header>
  );
}

export default Header;