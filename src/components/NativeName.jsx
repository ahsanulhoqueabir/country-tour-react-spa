{/* <h1>{name.nativeName[lan].official}</h1> */}
const NativeName = ({lan,details}) => {
    const { flags, maps, name, population, cca3, capital, currencies } = details;
    return (
        <div className="pl-6">
            <li>{name.nativeName[lan].official} ({lan})</li>
        </div>
    );
};

export default NativeName;