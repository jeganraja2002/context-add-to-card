import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "../Context";
import { AiOutlineHeart,AiFillHeart,AiOutlinePlus } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Card = () => {
    const{state,setState} = useContext(Context)
    const [card , setCard] = useState([])
    const nav = useNavigate()

useEffect(()=>{
    const a = state.state.filter(e=>e.isBtn==true)
    setCard(a)
},[state])

const Handle = (id) => {
    const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e)
    setState({type:"like",payload:a})
}
const like = (id) => {
    const b = state.state.map(e=>e.id==id?{...e,boolean:!e.boolean}:e)
    setState({type:"like",payload:b})
}

const decrease = (id,count) => {

    if (count>1){
        const a = state.state.map(e=>e.id==id?{...e,count:e.count-1}:e) 
        const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e)   
        setState({type:"like",payload:b})
    } 
    else{
        const a = state.state.map(e=>e.id==id?{...e,isBtn:!e.isBtn}:e) 
        setState({type:"like",payload:a})
    }
    
}

const increase = (id) => {
    const a = state.state.map(e=>e.id==id?{...e,count:e.count+1}:e) 
    const b = a.map(e=>e.id==id?{...e,total:e.price*e.count}:e) 
    setState({type:"like",payload:b})

}
const menu = () => {
    nav('/')
}

    return(
        <>
        <Navbar/>
        <i style={{color:"gray",fontSize:"30px",margin:"0px 10px",cursor:"pointer"}} onClick={menu}><IoIosArrowDropleft /></i>
        <div className="container card">
        {card.length?<div className="row">
            {card.map((e,i)=>{
                return(
                    <div className="col-lg-3 mt-sm-3" key={i}>
                        <div className="shadow">
                            <div className="re">
                                <img src={e.img} style={{width:"100%"}}/>
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
                            <p>Total Price &#8377; {e.total}</p>
                        </div>
                    </div>
                )
            })}
        </div>:  
    <div className="empty">
        <div className="col-lg-5 col-sm-12">
            <img src="https://i0.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1" style={{width:"100%"}}/>
        </div>
    </div>}
        </div>
        </>
    )
}
export default Card