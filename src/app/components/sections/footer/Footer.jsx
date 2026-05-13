import Logo from "../../../../assets/images/LOGO.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="section_footer">
      <div className="footer_content">
        {/*up side footer*/}
        <div className="footer_content-up">
          <div className="footer_content-up_left">
            <div className="footer_content-up_left-wrapprer_imagem">
              <img src={Logo} alt="Logotipo Farmácia Cunha Miranda" />
              <p>Farmácia Cunha Miranda</p>
            </div>

            <div className="footer_content-up_left-text">
              <p>
                Cuidamos da sua saúde com dedicação e profissionalismo há mais
                de 40 anos.
              </p>
            </div>
          </div>

          <div className="footer_content-up_mid">
            <ul>
              <li>
                <a href="#begin">Início</a>
              </li>
              <li>
                <a href="#team">Equipa</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#local">Localização</a>
              </li>
            </ul>
          </div>
          <div className="footer_content-up_right">
            <h3>Contactos:</h3>
            <div>
              <div>
                <p>Rua Principal, 123 7300-000 Portalegre</p>
              </div>
              <div>
                <p>Telefone: +351 xxx xxx xxx</p>
              </div>
              <div>
                <p>geral@farmaciaportalegre.pt</p>
              </div>
            </div>
          </div>
        </div>
        {/*down footer*/}
        <div className="footer_content-down">
          <div>
            <p>© 2026 Farmácia Portalegre. Todos os direitos reservados.</p>
          </div>
          <div>
            <p>Feito por Bruno Pernão</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
