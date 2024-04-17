import { useEffect, useState } from "react";
import Saleinfo from "../Saleinfo/Saleinfo";


const Sale = () => {
    const [estate, setestate] = useState([]);
    const [saleList, setSaleList] = useState([])

    useEffect(() => {
        fetch('grihoabhijan.json')
            .then(res => res.json())
            .then(data => setestate(data));
    }, [])

    useEffect(() => {
        const filteredSales = estate.filter(item => item.status === "Sale");
        setSaleList(filteredSales);
    }, [estate]);
   
    return (
        <div>
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 w-11/12 mx-auto">
                {
                    saleList.map(saleLists => <Saleinfo saleLists={saleLists} key={saleList.Id}></Saleinfo>)
                }
            </div>
        </div>
    );
};

export default Sale;