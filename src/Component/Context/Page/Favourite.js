import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import { AiOutlineHeart,AiFillHeart,AiOutlinePlus } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import Navbar from "./Navbar";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
    const{state,setState}=useContext(Context)
    const [like,setLike] = useState([])
    const nav = useNavigate()

    useEffect(()=>{
       const a = state.state.filter(e=>e.boolean==true)
       setLike(a)  
    },[state])

    
    const Flike = (id) => {
        const b = state.state.map(e=>e.id==id?{...e,boolean:!e.boolean}:e)
        setState({type:"like",payload:b})
        const d = like.map(e=>e.id==id?{...e,boolean:!e.boolean}:e)
        setLike(d)
    }

    const Fdecrease = (id) => {
        const b = state.state.find(e=>e.id==id)
        if (b.count>1){
            const a = state.state.map(e=>e.id==id?{...e,count:e.count-1}:e)
            const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e)   
            setState({type:"like",payload:b})
        } 
        else{
            const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e) 
            setState({type:"like",payload:a})
        }
    }
    
    const Fincrease = (id) => {
        const a = state.state.map(e=>e.id==id?{...e,count:e.count+1}:e)
        const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e)   
        setState({type:"like",payload:b})
    }
    
    const FHandle = (id) => {
        const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e)
        setState({type:"like",payload:a})
    }

    const menu = () => {
        nav('/')
    }

    return(
        <>
        <Navbar/>
        <i style={{color:"gray",fontSize:"30px",margin:"0px 10px",cursor:"pointer"}} onClick={menu}><IoIosArrowDropleft /></i>
            <div className="container card">
              { like.length? <div className="row">
                    {like.map((e,i)=>{
                        return(
                            <div className="col-lg-3 mt-sm-3" key={i}>
                                <div className="shadow">
                                    <div className="re">
                                        <img src={e.img} style={{width:"100%"}}/>
                                        {e.boolean?<div className="ab red" onClick={()=>Flike(e.id)}><AiFillHeart/></div>:<div className="ab" onClick={()=>Flike(e.id)}><AiOutlineHeart/></div>}
                                        </div>
                                    <div>
                                        <p>{e.name}</p>
                                        <h4>&#8377; {e.price}</h4>
                                        <p>Size :{e.size}</p>
                                    </div>
                                    <div className="btn">
                                    {e.isBtn?<div className="btn-2"><div onClick={()=>Fdecrease(e.id)}><BsDashLg/></div><span>{e.count<0?0:e.count}</span><div onClick={()=>Fincrease(e.id)}><AiOutlinePlus/></div></div>:
                                       <button className="btn-1" onClick={()=>FHandle(e.id)}>Add</button>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>:
                <div className="empty">
                    <div className="col-lg-7 col-sm-12">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" style={{width:"100%"}}/>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Favourite