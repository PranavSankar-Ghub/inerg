import React,{useEffect,useState} from 'react'

export const Statewise = () => {
    const [search,setSearch]=useState(' ')
    const [data,setData]=useState([])
    const [filterdata,setFilterdata]=useState([])


    const getCovidData=async()=>{
          const res = await fetch('https://data.covid19india.org/data.json');
          const Orgdata= await res.json();
          setData(Orgdata.statewise)
        //   setLoding(false)            
    }
    

    useEffect(() => {
        getCovidData();
    
    }, [])

      useEffect(() => {
         setFilterdata(
             data.filter((data)=>data.state.toLowerCase().includes(search.toLowerCase()))
         )

          },[search,data])
    return (
        <div>
                <input type="text" placeholder="search" onChange={(e)=>{
                    setSearch(e.target.value)
                }}></input>      
                {filterdata.map((val)=>{
                    return <div key={val.statecode}>
                        <p>{ val.state}</p>

                    </div>
                    
                })}
                <div>
                    
                </div>
        


        </div>
        
        
    )
}
