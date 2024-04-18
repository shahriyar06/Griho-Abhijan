import { useEffect, useState } from "react";
import Userreview from "./Userreview";


const Review = () => {
    const [review, setreview] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data =>  setreview(data));
    }
        , [])
    return (
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4 mx-auto w-11/12 my-10">
            {
                    review.map(reviews => <Userreview reviews={reviews} key={review.id}></Userreview>)
            }
        </div>
    );
};

export default Review;