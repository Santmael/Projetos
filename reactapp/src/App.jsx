import React from 'react';
import { ComParamentro } from './components/basicos/ComParamentro';
import { NumberRandom } from './components/basicos/NumberRandom';

export function App (){

    return(
        <div>
             <ComParamentro
             titulo="numero aleatorio"
             subtitulo="buscando um numero aleatorio em 2 valores"
            />

        <NumberRandom
        numerominimo={1}
        numeromaximo={60}
        />
        

        
        </div>
    )
}