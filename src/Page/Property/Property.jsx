
import Estate from "../../Component/Estate/Estate";
import Sale from "../../Component/Sale/Sale";
import { Helmet } from "react-helmet-async";


const Property = () => {
    
    return (
        <div className="mx-8 my-8">
            <Helmet>
                <title>Griho-abhijan-Property</title>
            </Helmet>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="All" defaultChecked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Estate></Estate>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Sale" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Sale></Sale>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Rent" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Property;