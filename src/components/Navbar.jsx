import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants'

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
    });

    navTween.fromTo("nav", { backgroundColor: "transparent" }, { 
      backgroundColor: "#00000050", 
      backgroundFilter: "blur(15px)",
      duration: 1 
    });
  })

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
          <p>
            <span className="italic font-thin text-indigo-400">BART</span>ender
          </p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-indigo-400 duration-500 transition-all ease-in-out">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar