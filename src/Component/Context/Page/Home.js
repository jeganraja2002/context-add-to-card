import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import Navbar from "./Navbar";
import { AiOutlineHeart,AiFillHeart,AiOutlinePlus } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import Carousel from "./Carousel";

const Home = () => {
const [arr,setArr] = useState([])
const{state,setState}=useContext(Context)
const [boolean,setBoolean] =useState(false)

useEffect(()=>{
    const c = state.state.filter(e=>e.search==true)    

    if (c.length>0) {
        setArr(c)
        setBoolean(true)
    }
    else setArr(state.state)

},[state])


const Handle = (id) => {
    const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e)
    setState({type:"like",payload:a})
    const c = state.state.filter(e=>e.search==true)    
    const u = boolean?c:a
    setArr(u)
}
const like = (id) => {
    const b = state.state.map(e=>e.id==id?{...e,boolean:!e.boolean}:e)
    setState({type:"like",payload:b})
    const c = state.state.filter(e=>e.search==true)    
    const u = boolean?c:b
    setArr(u)

}

const decrease = (id,count) => {

    if (count>1){
        const a = state.state.map(e=>e.id==id?{...e,count:e.count-1}:e)
        const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e)   
        setState({type:"like",payload:b})
        const c = b.filter(e=>e.search==true)    
        const u = boolean?c:b
        setArr(u)
    } 
    else{
        const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e) 
        setState({type:"like",payload:a})
        const c = a.filter(e=>e.search==true)    
        const u = boolean?c:a
        setArr(u)
    }
    
}

const increase = (id) => {
    const a = state.state.map(e=>e.id==id?{...e,count:e.count+1}:e) 
    const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e)   
    setState({type:"like",payload:b})
    const c = state.state.filter(e=>e.search==true)    
    const u = boolean?c:b
    setArr(u)
}

const  navbar = (a) => {
    setState({type:"like",payload:a})
}

return(
        <div>
            <Navbar value={navbar}/>
            <Carousel/>
            <div className="container card">
                <div className="row">
                    {arr.map((e,i)=>{
                        return(
                            <div className="col-lg-3 col-sm-12  col-md-4 mt-sm-3" key={i}>
                                <div className="shadow">
                                    <div className="re">
                                        <img src={e.img} style={{width:"100%",pointerEvents:"none"}}/>
                                        {e.boolean?<div className="ab red" onClick={()=>like(e.id)}><AiFillHeart/></div>:<div className="ab" onClick={()=>like(e.id)}><AiOutlineHeart/></div>}
                                        </div>
                                    <div>
                                        <p>{e.name}</p>
                                        <h4 className="my-sm-1">&#8377; {e.price}</h4>
                                        <p>Size :{e.size}</p>
                                    </div>
                                    <div className="btn">
                                       {e.isBtn?<div className="btn-2"><div onClick={()=>decrease(e.id,e.count)}><BsDashLg/></div><span>{e.count<0?0:e.count}</span><div onClick={()=>increase(e.id)}><AiOutlinePlus/></div></div>:
                                       <button className="btn-1" onClick={()=>Handle(e.id)}>Add</button>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home