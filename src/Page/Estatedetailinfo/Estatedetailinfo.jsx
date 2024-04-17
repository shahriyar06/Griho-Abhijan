import { Link, useLoaderData, useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { Helmet } from "react-helmet-async";


const realstatesdetailinfo = () => {

    const Information = useLoaderData();
    const { id } = useParams();
    const Idint = parseInt(id)
    const realstates = Information?.find(list => list.id === Idint);
    const { facilities } = realstates;
    return (
        <div className="my-10 w-11/12 mx-auto">
            <Helmet>
                <title>Griho-abhijan-estate-details</title>
            </Helmet>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2 rounded-3xl p-1 items-center flex flex-col">
                    <img src={realstates.image} className="rounded-3xl flex-grow" alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col grow">
                    <h1 className="text-3xl font-bold mb-5">{realstates.estate_title}</h1>
                    <h1 className="text-xl flex items-center gap-2"><GoDotFill className="text-green-600 text-lg" />{realstates.segment_name}</h1>
                    <hr className="border-[#1313132f] border-t-2 my-4" />
                    <h2 className="text-lg">{realstates.description}</h2>
                    <hr className="border-[#1313132f] border-t-2 border-dashed my-4" />
                    <div className="p-4 ">
                        <h1 className="text-lg mb-2">Price : {realstates.price}</h1>
                        <div className="flex mb-4 justify-between text-lg text-[#131313]">
                            <h1 className="flex text-lg items-center gap-2 ">Status : {realstates.status}</h1>
                            <h1 className="flex items-center gap-2"><BsCalendar2Date />{realstates.build_year}</h1>
                        </div>
                        <div className="flex mb-4 justify-between text-lg text-[#131313]">
                            <h1>Area : {realstates.area}</h1>
                            <h1 className="flex items-center gap-2"><IoLocationSharp />{realstates.location}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <h1 className="text-lg font-semibold">Facility</h1>
                        <div className="flex gap-3">
                            {
                                facilities.map((facility, idx) => <span className='text-[#23BE0A] bg-[#22be0a09] py-2 px-4 rounded-full' key={idx} ><h1 className="flex items-center"> {facility}</h1></span>)
                            }
                        </div>
                    </div>
                    <hr className="border-[#1313132f] border-t-2 border-dashed my-4" />
                    <div>
                        <Link to='/'><button className="btn bg-[#59c6d2e5] border-[#59C6D2] text-base text-[#FFFFFF] hover:bg-[#7cdae4e5]">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default realstatesdetailinfo;