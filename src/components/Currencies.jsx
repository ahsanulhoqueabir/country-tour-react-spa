
const Currencies = ({curr,details}) => {
    // console.log(curr);
    return (
        <tr>
            <td className="border-r-2">{curr}</td>
            <td className="border-r-2">{details.currencies[curr].name}</td>
            <td className="text-2xl">{details.currencies[curr].symbol}</td>
        </tr>
    );
};

export default Currencies;