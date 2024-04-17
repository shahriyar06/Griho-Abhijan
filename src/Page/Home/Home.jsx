import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Estatehome from './../../Component/Estatehome/Estatehome';


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
                <Estatehome></Estatehome>
            </div>
        </div>
    );
};

export default Home;