import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const About = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "blackneasy",
        },
    });

    const profile = cld.image("kontakt");
    const diplom = cld.image("diplom");

    return (
        <div className="bg-stone-100 row-span-2">
            <div className="columns-2 pb-10">
                <div className="p-5">
                    <h2 className="contact-heading">Marie-Louise Månsson</h2>
                    <p className="contact-paragraph">
                        Ja, var ska man börja? Mina allra första hundar var två
                        yorkshireterriers som flyttade in hos mig 1972. Nästa
                        hundras som fångade mitt intresse var flatcoated
                        retriever, som då, i slutet av 70-talet, var en relativt
                        liten ras i Sverige. Flattarna följde mig i många år men
                        efter ett antal år fick jag upp ögonen för den belgiska
                        vallhunden.
                    </p>
                    <p className="contact-paragraph">
                        Min första tervueren, Buffelino, kom i min ägo 1992.
                        Buffe var en fantastiskt snäll, stabil och trygg terv
                        och han var min trogne följeslagare i många år. Ett
                        antal tervar följde mig , 2007 då skaffade jag min
                        första groenendal, Easy. Easy är en fantastiskt stabil,
                        balanserad och snäll tik som alltid ger 100 % när du
                        arbetar med henne. Den belgiska vallhunden och då
                        framförallt tervuerensen och groenendalen, är den ras
                        som jag känner passar mig bäst.
                    </p>
                    <p className="contact-paragraph">
                        En bra groenendal eller terveuren har allt, arbetsvilja,
                        stabil mentalitet och en sund exteriör som följer
                        rasstandarden. Rasen passar till lite av varje. Vill du
                        vara aktiv och ha kul med din hund så hänger en belgare
                        alltid med och tackar aldrig nej. Jag vet hur viktigt
                        det är att ha en mentalt bra hund, med min uppfödning
                        vill jag fokusera på det.
                    </p>
                </div>
                <div>
                    <AdvancedImage cldImg={profile} className="object-fill" />
                </div>
            </div>
            <div className="columns-2">
                <div>
                    <AdvancedImage cldImg={diplom} />
                </div>
                <div>
                    <h2 className="contact-heading">
                        Målet med min uppfödning
                    </h2>
                    <p className="contact-paragraph">
                        Mitt mål idag är att föda upp trygga, mentalt stabila
                        hundar som både går att arbeta med och ställa ut.
                        Hundarna föds upp i hemmiljö och blir vana vid både
                        barn, katter och andra hundar.
                    </p>
                    <h2 className="contact-heading">DIPLOM</h2>
                    <h3 className="text-xl py-2  text-center">2015-2016</h3>
                    <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 ">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-600">
                            Hunduppfödarutbildning del 1 – 2 – 3
                        </p>
                    </blockquote>
                    <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-600">
                            Hunduppfödarutbildning del 1 – 2 – 3
                        </p>
                    </blockquote>
                    <h3 className="text-xl py-2  text-center">2017</h3>
                    <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-600">
                            Nya Hunduppfödarutbildningen, se bild
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default About;
