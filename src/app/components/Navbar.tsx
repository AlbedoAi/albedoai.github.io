export default function Navbar() {
    return (
<nav className="navbarMain bg-black flex items-center justify-between p-4">
    <div className="hidden md:block flex-grow flex items-center">
        <h1 className="text-4xl text-white">[HI_FROM@SHU] -> [/home]</h1>
    </div>
    <div className="flex items-center space-x-20">
        <a
            href="/"
            className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex text-4xl"
        >
            Home
        </a>
        <a
            href="/"
            className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex text-4xl"
        >
            Projects
        </a>
        <a
            href="/"
            className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex text-4xl ml-auto"
        >
            Skills
        </a>
    </div>
</nav>

    );
  }
