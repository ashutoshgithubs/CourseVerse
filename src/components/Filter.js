import React from 'react'

const Filter = (props) => {

  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='flex flex-wrap mx-auto w-11/12 max-w-max space-x-4 gap-y-4 py-4 justify-center'>
        {
          filterData.map( (data)=>(
            <button key={data.id} onClick={()=>filterHandler(data.title)}  className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50  transition-all duration-200 border-2 
           ${
            category===data.title ? "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"
           }`}
            >{data.title}</button>
          ))
        }
    </div>
  )
}

export default Filter
