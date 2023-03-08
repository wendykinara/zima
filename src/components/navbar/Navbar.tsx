export default function Navbar() {
  const Menu = () => (
    <>
      <a href="#home" className="hover:underline">
        Home
      </a>
      <a href="#about" className="hover:underline">
        About
      </a>
      <a href="/therapist" className="hover:underline">
        Therapist
      </a>
      <a href="/conditions" className="hover:underline">
        Conditions
      </a>
      <a href="/groups" className="hover:underline">
        Groups
      </a>
      <a href="/login" className="hover:underline">
        Login
      </a>
      <a href="/login" className="hover:underline">
        Sign Up
      </a>
      <a href="#faq" className="hover:underline">
        FAQ
      </a>
    </>
  );
  return (
    <nav className="flex items-center justify-between p-4">
      <p className="text-xl">zima</p>
      <div className="flex items-center justify-center space-x-4">
        <Menu />
      </div>
    </nav>
  );
}
