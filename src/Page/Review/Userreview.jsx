
import { FaRegStar } from "react-icons/fa";
const Userreview = ({reviews}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={reviews.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {reviews.name}
                        </h2>
                        <div>
                            <h1 className="text-lg font-semibold">Review :</h1>
                            <p className="w-11/12 mr-5">{reviews.comment}</p>
                        </div>
                        <div className="card-actions">
                            <div className="flex text-lg gap-2 items-center">
                                <h1>{reviews.rating}</h1>
                                <FaRegStar className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Userreview;