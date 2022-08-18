import React from 'react';
import { ComParamentro } from './components/basicos/ComParamentro';
import { NumberRandom } from './components/basicos/NumberRandom';
import { Card } from './components/layout/Card';
import "./App.css"
import { Familia } from './components/basicos/Familia';

export function App (){

    return(
        <div className='app'>

            <div className='cards'>

            <Card titulo="Exercicios com Filhos">
                <Familia/>
            </Card>

            <Card titulo="Desafio aleatorio" 
            color="#259253">
            <NumberRandom
                numerominimo={1}
                numeromaximo={60}
            />
            </Card>

            <Card titulo="Exercicio com Paramêtro">
            <ComParamentro
             titulo="numero aleatorio"
             subtitulo="buscando um numero aleatorio em 2 valores"
            />
            </Card>


            </div>

        
        </div>
    )
}