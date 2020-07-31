import React from 'react';
import { Image } from 'cloudinary-react';

const About = () => {
    return (
        <div className="wrapper about">
            <div className="bg">
            <h2>Marie-Louise Månsson</h2>
            <p>Ja, var ska man börja? Mina allra första hundar var två yorkshireterriers som flyttade in hos mig 1972. Nästa hundras som fångade mitt intresse var flatcoated retriever, som då, i slutet av 70-talet, var en relativt liten ras i Sverige. Flattarna följde mig i många år men efter ett antal år fick jag upp ögonen för den belgiska vallhunden.</p>
            <p>Min första tervueren, Buffelino, kom i min ägo 1992. Buffe var en fantastiskt snäll, stabil och trygg terv och han var min trogne följeslagare i många år. Ett antal tervar följde mig , 2007 då skaffade jag min första groenendal, Easy. Easy är en fantastiskt stabil, balanserad och snäll tik som alltid ger 100 % när du arbetar med henne. Den belgiska vallhunden och då framförallt tervuerensen och groenendalen, är den ras som jag känner passar mig bäst.</p>
            <p>En bra groenendal eller terveuren har allt, arbetsvilja, stabil mentalitet och en sund exteriör som följer rasstandarden. Rasen passar till lite av varje. Vill du vara aktiv och ha kul med din hund så hänger en belgare alltid med och tackar aldrig nej. Jag vet hur viktigt det är att ha en mentalt bra hund, med min uppfödning vill jag fokusera på det.</p>
            </div>
            <Image cloudName="blackneasy" publicId="kontakt" width="300" crop="scale" alt="Marie-Louise" />
            <Image cloudName="blackneasy" publicId="diplom" width="600" crop="scale" alt="Diplom" />
            <div className="bg">
                <h2>Målet med min uppfödning</h2>
                <p>Mitt mål idag är att föda upp trygga, mentalt stabila hundar som både går att arbeta med och ställa ut. Hundarna föds upp i hemmiljö och blir vana vid både barn, katter och andra hundar.</p>
                <h3>Diplom</h3>
                <h4>2015-2016</h4>
                <div className="diplom"><p>Hunduppfödarutbildning del 1 – 2 – 3</p></div>
                <div className="diplom"><p>Hunduppfödarutbildning Juridik del 1 – 2</p></div>
                <h4>2017</h4>
                <div className="diplom"><p>Nya Hunduppfödarutbildningen, <strong>se bild</strong></p></div>
            </div>
        </div>
    )
}

export default About;
