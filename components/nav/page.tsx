import "./nav.styles.css";

const Nav = () => {
  return (
    <nav className="w-full p-5 flex items-center justify-between border rounded-xl">
      <h1 className="text-2xl font-bold">Create Next App</h1>
      <ul className="flex md:space-x-44">
        <li className="hover:underline active:underline">
          <a href="/">Home</a>
        </li>
        <li className="hover:underline active:underline">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
