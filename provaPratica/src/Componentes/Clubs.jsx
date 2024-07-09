import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Clubs() {
    const [fut, setFut] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://api.cartola.globo.com/clubes`)
            const data = await response.json()
            setFut(data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
     
    return (
        <div>
        <h1 className="title">Clubes de Futebol</h1>
        {fut && Object.values(fut).map((club) => (
            <div className="container-character" key={club.id}>
                    <Link to={`/players/${club.id}`}>Ver Jogadores</Link>
                <p className="nome">{club.nome}</p>
                <p className="abreviacao">abreviação: {club.abreviacao}</p>
                <img 
                    className="escudos-image" 
                    src={club.escudos["60x60"]} 
                    alt={club.nome} 
                />
            </div>
        ))}
    </div>
)
}
//         <div>
            
//             {fut && Object.values(fut).map((club) => (
//                     <div className="container-character">
//                         <h1 className="title" >Clubes de Futebol</h1>
//                         <p className="nome">{fut.nome}</p>
//                         <p className="abreviacao">abreviacao: {fut.abreviacao}</p>
//                         <img className="escudos-image" src={fut.escudos} alt={fut.name} />
//                         <div>
//                     </div>
//                         <div className="buttons">
//                         <button className="botaoproximovoltar" onClick={previousfut}>Voltar</button>
//                         <button className="botaoproximovoltar" onClick={nextfut}>Próximo</button>
//                         </div>
//                     </div>
//             )}
//         </div>
//     )
// }