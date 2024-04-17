import { useEffect } from "react";
import { useState } from "react";
import Estateinfo from "../Estateinfo/Estateinfo";


const Estate = () => {
    const [estates, setestate] = useState([]);

    useEffect(() => {
        fetch('grihoabhijan.json')
            .then(res => res.json())
            .then(data =>  setestate(data));
    }
        , [])

    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 w-11/12 mx-auto">
                {
                    estates.map(estate => <Estateinfo estate={estate} key={estate.Id}></Estateinfo>)
                }
            </div>


        </div>
    );
};

export default Estate;