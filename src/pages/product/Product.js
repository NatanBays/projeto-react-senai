import React, {useEffect, useState} from "react";
import axios from "axios";

function Product(){

    const [data, setData] = useState()

useEffect(() => {
    axios.get(`http://api.weatherbit.io/v2.0/current?lat=-27.593500&lon=-48.558540&key=2558a3d1955842d6b0e5a3a50549b557`)
        .then(response => [
            setData(response)
        ])
        .catch(error => {
            console.log(error)
        })
}, [])

    console.log("data",data)
    return(
        <div>
            <h1>Produto</h1>
        </div>
    )

}
export default Product
