import Link from 'next/link'

export const Header = () => {
  const location = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ]
  return (
    <header className="navbar">
      <div className="flex-1 text-2xl font-bold">Nest Blog</div>
      <nav>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {location.map((value, index) => {
              return (
                <li key={index} className="p-2 font-bold">
                  <Link href={value.href} className=" hover:bg-gray-100">
                    {value.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
