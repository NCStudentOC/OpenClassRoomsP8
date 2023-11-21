import Card from "./Card.js";
import logements from "../logements/logements.json"

export default function Gallery() {


    return (
        <main className='gallery'>
            {logements.map(logement => (

                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover} />
            ))}
        </main>

    )
}
