import Estate from '../Estate/Estate';

const Estatehome = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mb-10">Estate</h1>
                <p className="text-center mb-10 text-xl w-3/5 mx-auto">Discover your dream home sanctuary, where comfort meets elegance, offering unparalleled residential experiences on our estate section.</p>
            </div>
            <div>
                <Estate></Estate>
            </div>
        </div>
    );
};

export default Estatehome;