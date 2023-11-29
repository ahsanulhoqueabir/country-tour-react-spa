const Places = ({ data }) => {
  return (
    <>
      <div className="collapse collapse-plus bg-blue-100  m-auto mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
            <span className="lg:text-2xl">{data.historical_place}</span>
        </div>
        <div className="collapse-content">
            <div className=" relative ">
            <img className=" opacity-100 transition-200 w-full rounded" src={data.image} alt="" />
             <div className=" absolute inset-0 opacity-0 hover:opacity-100"> <p className="badge border-none text-white m-2 bg-green-500">{data.historical_place}</p> </div>   
            </div>
            <div className="py-5">

            <p><span className="font-bold">Country:</span> {data.country}</p>
            <p><span className="font-bold"> Description: </span>{data.details}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Places;
