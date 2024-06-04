import {useGlobalContext} from "../utils/context"
const Paginataion = () => {
  const {page,nbPages,getPrevPage,getNextPage} =useGlobalContext();
  return (
    <>
      <div className="pagination-btn w-96 m-auto flex flex-col items-center">
          <p className="text-white font-bold">{page+1} of {nbPages}</p>
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline hover:bg-info text-white" onClick={()=>getPrevPage()}>Previous page</button>
          <button className="join-item btn btn-outline hover:bg-info text-white" onClick={()=>getNextPage()}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Paginataion;
