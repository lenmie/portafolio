import './Menu.css';
import { Link } from 'react-scroll';

const menuItems = [
  { href: 'work-experience', label: 'work experience' },
  { href: 'about', label: 'about' },
  { href: 'contact', label: 'contact' },
];

export default function Menu() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', listStyle: 'none', margin: 0, padding: '19px', background: 'none', width: '100%' }}>
        <div style={{ flex: 1 }}></div>
        {menuItems.map((item, idx) => (
          <li key={item.href}>
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70} // Ajusta este valor según la altura de tu menú fijo
              className="menu-link"
              style={{ cursor: 'pointer' }}
              spy={true}
            >
              <span style={{ color: '#888', fontWeight: 'bold', fontSize: '1.1em', marginRight: '6px' }}>{`0${idx + 1}.`}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
