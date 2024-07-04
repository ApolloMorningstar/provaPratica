import { useState, useEffect } from "react"


export default function Clubesfut() {
    const [id, setId] = useState(1)
    const [fut, setFut] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(` https://api.cartola.globo.com/clubes`)
            const data = await response.json()
            setFut(data[0].url)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    //useEffect acontece quando é feita a conexão com a API, retornando os dados do rick a partir do ID
    
    return (
        
        <div>
            
               {fut && (                
                    <div className="container-character">
                        <h1 className="title" >Clubes de Futebol</h1>
                        <p className="nome">{fut.nome}</p>
                        <p className="abreviacao">abreviacao: {fut.abreviacao}</p>
                        <img className="escudos-image" src={escudos} alt={fut.name} />
                        <div>
                    </div>
                        <div className="buttons">
                        <button className="botaoproximovoltar" onClick={previousfut}>Voltar</button>
                        <button className="botaoproximovoltar" onClick={nextfut}>Próximo</button>
                        </div>
                    </div>
            )}
        </div>
    )
}