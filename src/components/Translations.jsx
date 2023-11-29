const Translations = ({ data, details }) => {
  const { translations } = details;
  return (
    <tr>
      <td className="border-r-2 ">{data}</td>
      <td className="border-r-2 break-all	"> {translations[data].common}</td>
      <td className="break-all	"> {translations[data].official} </td>
    </tr>
  );
};

export default Translations;
