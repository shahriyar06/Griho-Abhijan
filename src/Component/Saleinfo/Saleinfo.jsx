import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";

const Saleinfo = ({saleLists}) => {
    const { Id } = saleLists;
    return (
        <div>
            <div className="card rounded-3xl border-2 border-[#c2c2c2]">
                <div className="rounded-3xl p-2 mt-4 bg-[#eff6ffb3]  w-11/12 mx-auto">
                    <figure><img src={saleLists.image} className="h-52" /></figure>
                </div>

                <div className="p-4">

                    <h2 className="card-title text-[#131313] text-2xl font-semibold my-3 grow">{saleLists.estate_title}</h2>
                    <p className="text-[#131313] text-lg font-semibold flex items-center"><GoDotFill className="text-green-600 text-lg" />{saleLists.segment_name}</p>
                    <hr className="border-[#1313132f] border-t-2 border-dashed my-4" />
                    <h1 className="text-lg mb-2">Price : {saleLists.price}</h1>
                    <h1 className="flex text-lg items-center gap-2 mb-2">Status : {saleLists.status}</h1>
                    <div className="flex mb-4 justify-between text-lg text-[#131313]">
                        <h1>Area : {saleLists.area}</h1>
                        <h1 className="flex items-center gap-2"><IoLocationSharp />{saleLists.location}</h1>
                    </div>

                    <Link to={`/saleLists/${Id}`} className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] lg:text-lg mr-5">View Property </Link>
                </div>
            </div>

        </div >
    );
};

export default Saleinfo;