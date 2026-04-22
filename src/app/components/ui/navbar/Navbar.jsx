import { useState } from "react";

//css/reusable elements
import "./Navbar.css";
import Button from "../button/button";

//images/ui
import Logo from "../../../../assets/images/LOGO.png";

export default function Navbar() {
  //state active page for css
  const [active, setActive] = useState("begin");

  return (
    <>
      <section className="section_navbar">
        <nav className="navbar">
          {/*left side */}
          <div className="navbar_logo">
            <img src={Logo} alt="logotipo da farmacia" />
            <h3>Farmácia Cunha Miranda</h3>
          </div>

          {/*right side*/}
          <div className="navbar_right-wrapper">
            <div className="navbar_right-wrapper_links">
              <ul>
                <li>
                  <a
                    onClick={() => setActive("begin")}
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
                    onClick={() => setActive("team")}
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
                    onClick={() => setActive("services")}
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
                    onClick={() => setActive("local")}
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
              <Button to="">Ligar</Button>
              <Button variant="primary">Contactos</Button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
