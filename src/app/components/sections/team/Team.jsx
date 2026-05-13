import "./Team.css";
import { useState } from "react";

import Box from "../../ui/box/box";

//images and ui
import Rosa from "../../../../assets/images/Rosa.png";
import Pedro from "../../../../assets/images/Pedro.png";
import Patricia from "../../../../assets/images/Patriaci.png";

//data
import team from "../../../data/teamData";

export default function Team() {
  const [hoverId, setHoverId] = useState(null);

  return (
    <>
      <section id="team" className="section_team">
        <div className="team-content">
          <div className="team-content_text">
            <h2>A Nossa Equipa</h2>
            <p>
              Profissionais qualificados e dedicados, prontos para o aconselhar
              e cuidar da sua saúde com competência e simpatia.
            </p>
          </div>

          <div className="team-content_grid">
            {team.map((person) => (
              <div
                key={person.id}
                onMouseEnter={() => setHoverId(person.id)}
                onMouseLeave={() => setHoverId(null)}
                className={`card ${hoverId === person.id ? "flipped" : ""}`}
              >
                <div className="card-inner">
                  {/*front*/}
                  <Box variant="sextanery" className="card-front">
                    <img src={person.img} alt="Imagem do profissional" />
                    <h4>{person.name}</h4>
                    <h3>{person.role}</h3>
                    <p>Ver detalhes</p>
                  </Box>

                  {/*Back */}
                  <Box variant="tertiary" className="card-back">
                    <h4>{person.name}</h4>
                    <p>{person.role}</p>
                    <p>{person.desc} </p>
                  </Box>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
