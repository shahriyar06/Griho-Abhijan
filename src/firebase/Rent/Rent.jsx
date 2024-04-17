import { useEffect, useState } from "react";
import Rentinfo from "../../Component/Rentinfo/Rentinfo";

const Rent = () => {
    const [estate, setestate] = useState([]);
    const [rentList, setrentList] = useState([])

    useEffect(() => {
        fetch('grihoabhijan.json')
            .then(res => res.json())
            .then(data => setestate(data));
    }, [])

    useEffect(() => {
        const filteredrents = estate.filter(item => item.status === "Rent");
        setrentList(filteredrents);
    }, [estate]);
    return (
        <div>
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 w-11/12 mx-auto">
                {
                    rentList.map(rentLists => <Rentinfo rentLists={rentLists} key={rentList.Id}></Rentinfo>)
                }
            </div>
            
        </div>
    );
};

export default Rent;