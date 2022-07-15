import React from "react";

export function NumberRandom(params){
    const min = params.numerominimo
    const max = params.numeromaximo

    const numeroaleatorio = parseInt(Math.random() * (max - min) + min)
    return(
        <div>
            <p>numero inicial é <strong>{min}</strong></p>
            <p>numero final é <strong>{max}</strong></p>

            <h3>numero aleatorio entre o inicial e o final é {numeroaleatorio}</h3>

        </div>

    
    )

}