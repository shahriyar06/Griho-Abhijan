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
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Estate</h1>
                <p className="text-center mb-10 text-xl w-3/5 mx-auto">Discover your dream home sanctuary, where comfort meets elegance, offering unparalleled residential experiences on our estate section.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 w-11/12 mx-auto">
                {/* {
                    estates.map(estate => <Estateinfo key={estates.eid} estate={estate}></Estateinfo>)
                } */}
                {
                    estates.map(estate => <Estateinfo estate={estate} key={estate.Id}></Estateinfo>)
                }
            </div>


        </div>
    );
};

export default Estate;