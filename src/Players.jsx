import Axios from "axios"
import React, { useEffect, useState } from "react"

export default function Players(){


    const [players, setPlayers] = useState([])

    Axios.get(`https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=917e8ebc15f4a97d8f16c56a289a77e9afc58bce953bc5aaa05a1c1edbeaf282`)
    .then((res) => {

        setTeams(res.data)

      
    })

    return(
        <>
            
        </>
    )
}