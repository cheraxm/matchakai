
const navLinks = [
    {
        label: 'Library',
        path: '/library',
    },
    {
        label: 'Journal',
        path: '/journal',
    },
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Event&Activity',
        path: '/'
    },{
        label: 'Me',
        path: '/profile'
    }
]

function Navbar() {
  return (
    <nav className="flex w-full h-19 justify-between bg-[#FFFAF3] opacity-90 rounded-3xl items-center px-20 font-['Instrument_Serif'] text-2xl">
      {
        navLinks.map((item, index) => (
            <a key={index} href={item.path}>
              {item.label}
            </a>
        ))
      }
    </nav>
  );
}

export default Navbar;