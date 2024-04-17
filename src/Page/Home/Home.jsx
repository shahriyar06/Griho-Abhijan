import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Estate from "../../Component/Estate/Estate";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Griho-abhijan-home</title>
            </Helmet>
            <div className="mb-10">
                <Banner></Banner>
            </div>
            <div className="mb-10">
                <Estate></Estate>
            </div>
        </div>
    );
};

export default Home;