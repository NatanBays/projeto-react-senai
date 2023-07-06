import React, {useEffect, useState} from "react";
import axios from "axios";
import './product.css'
import Moment from "react-moment"
function Product() {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/now_playing", {
            params: {
                api_key: "b872d30e7ada92638f11d4091d584a72",
                language: "pt-BR",
                page: 1,
            },
        }).then(response => [
            setData(response.data.results.slice(0, 10))
        ])
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log("data", data)
    return (
        <div>
            <div>
                <h1>Lançamentos</h1>
            </div>
            <div className="container">
                {data && data.map((x) =>
                    <article className="film-container">
                        <h3>{x.title}</h3>
                        <strong>Data de Lançamento: </strong>
                        <span>
                            <Moment format = "DD-MM-YYYY">
                                {x.release_date}
                            </Moment>
                        </span>
                        
                        <img className="film-poster"
                            src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                        />
                        <strong>
                            Nota: {x.vote_average}
                        </strong>
                    </article>
                )}
            </div>
        </div>
    )

}

export default Product
