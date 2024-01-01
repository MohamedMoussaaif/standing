import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Teams.css";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    Axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282`)
      .then((res) => {
        setTeams(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="teams-container">
      {/* Header row */}
      <p>
        <span>#</span>
        <span>Team</span>
        <span>MP</span>
        <span>W</span>
        <span>D</span>
        <span>L</span>
        <span>GD</span>
        <span>PTS</span>
      </p>

      {/* Teams standings */}
      {teams.map((team, index) => (
        <p key={index}>
          <span>{team.overall_league_position}</span>
          <span><img width={20} src={team.team_badge} alt={team.team_name} /> {team.team_name}</span>
          <span>{team.overall_league_payed}</span>
          <span>{team.overall_league_W}</span>
          <span>{team.overall_league_D}</span>
          <span>{team.overall_league_L}</span>
          <span>{team.overall_league_GF - team.overall_league_GA}</span>
          <span>{team.overall_league_PTS}</span>
        </p>
      ))}
    </div>
  );
}
