import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Student Exchange
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="bg-primary-foreground text-primary px-4 py-2 rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 