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
      <table className="teams-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.overall_league_position}</td>
              <td className="team-info">
                <img width={20} src={team.team_badge} alt={team.team_name} />
                <span>{team.team_name}</span>
              </td>
              <td>{team.overall_league_payed}</td>
              <td>{team.overall_league_W}</td>
              <td>{team.overall_league_D}</td>
              <td>{team.overall_league_L}</td>
              <td>{team.overall_league_GF - team.overall_league_GA}</td>
              <td>{team.overall_league_PTS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
