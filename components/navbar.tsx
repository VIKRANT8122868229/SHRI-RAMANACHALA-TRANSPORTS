export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d2345]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>
  <h1 className="text-3xl font-black text-red-500">
    SRT
  </h1>

  <p className="text-white text-sm tracking-wide">
    SHRI RAMANACHALA TRANSPORTS
  </p>
</div>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Fleet</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}