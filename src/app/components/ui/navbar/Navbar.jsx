import { useState } from "react";

//css/reusable elements
import "./Navbar.css";
import Button from "../button/button";

//images/ui
import Logo from "../../../../assets/images/LOGO.png";

export default function Navbar() {
  //state active page for css
  const [active, setActive] = useState("begin");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  return (
    <>
      <section className="section_navbar">
        <nav className="navbar">
          {/*left side */}
          <div className="navbar_logo">
            <img src={Logo} alt="logotipo da farmacia" />
            <h3>Farmácia Cunha Miranda</h3>
          </div>

          <div
            className={`navbar_mobile-toggle ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Button>
              <span></span>
              <span></span>
              <span></span>
            </Button>
          </div>

          {/*right side*/}
          <div className={`navbar_right-wrapper ${isOpen ? `open` : ``}`}>
            <div className="navbar_right-wrapper_links">
              <ul>
                <li>
                  <a
                    onClick={() => handleClick("begin")}
                    href="#begin"
                    className={
                      active === "begin" ? "link_clicked" : "not_cliked"
                    }
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleClick("team")}
                    className={
                      active === "team" ? "link_clicked" : "not_cliked"
                    }
                    href="#team"
                  >
                    Equipa
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleClick("services")}
                    className={
                      active === "services" ? "link_clicked" : "not_cliked"
                    }
                    href="#services"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleClick("local")}
                    className={
                      active === "local" ? "link_clicked" : "not_cliked"
                    }
                    href="#local"
                  >
                    Localização
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar_right-wrapper_cta">
              <Button>
                <a href="#contacts">Ligar</a>
              </Button>
              <Button variant="primary">
                <a href="#contacts">Contactos</a>
              </Button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
