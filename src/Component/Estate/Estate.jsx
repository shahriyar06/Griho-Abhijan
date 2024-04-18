import { useEffect } from "react";
import { useState } from "react";
import Estateinfo from "../Estateinfo/Estateinfo";
import AOS  from 'aos';
import 'aos/dist/aos.css'

const Estate = () => {
    const [estates, setestate] = useState([]);

    useEffect(() => {
        fetch('grihoabhijan.json')
            .then(res => res.json())
            .then(data =>  setestate(data));
    }
        , [])
        useEffect(() => {
            AOS.init();
        },[])

    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 w-11/12 mx-auto "data-aos="fade-up" data-aos-duration="2000" >
                {
                    estates.map(estate => <Estateinfo estate={estate} key={estate.Id}></Estateinfo>)
                }
            </div>


        </div>
    );
};

export default Estate;