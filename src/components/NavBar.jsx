const NavBar = () => {
  return (
    <nav className="bg-white/40 flex items-center px-12 min-h-[60px]">
      <img 
        src="src/assets/images/logo_Ideasrl.png" 
        alt="logo" 
        className="w-24 h-auto" 
      />

      <ul className="flex gap-8 ml-auto">
        <li><a href="/about" className="text-black">About</a></li>
        <li><a href="#" className="text-black">Cantieri</a></li>
        <li><a href="#" className="text-black">Candidature</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;