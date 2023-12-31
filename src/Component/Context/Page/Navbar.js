import React, { useContext, useEffect, useState } from "react";
import logo from '../../img/logo/logo.png'
import { BsSearch } from "react-icons/bs";
import { BiUser,BiShoppingBag,BiLogIn } from "react-icons/bi";
import { AiOutlineHeart , AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Context from "../Context";


const Navbar = (C) => {
    const nav = useNavigate()
    const [search,setSearch] = useState('')
    const [searchBar,setSearchBar] = useState([])
    const [boolean,setBoolean] = useState(false)
    const {state,setState}=useContext(Context)
    const [open ,setOpen] = useState(false)
    
const like = () => {
    nav('/like')        
    }

const card = () => {
        nav('/card')
    }

useEffect(()=>{

if (search!="") {
    const a = state.state.filter((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase())
    })
     
    if (a.length>0) {
        setSearchBar(a)
        setBoolean(false)
    }
    else setSearchBar([])
        setBoolean(true)
       
}
else setSearchBar([])
     setBoolean(false)


},[search])

const Props = () => {
    const b = state.state.map((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase())?{...e,search:true}:{...e,search:false}
    })
    
    C.value(b)
    setSearchBar([])
    setSearch("")
}

return(
        <section className="Header">
        <div className="container">
            <div className="row"style={{alignItems:"center",justifyContent:"space-between"}}>
                <div className="col-lg-2 col-sm-5 col-md-2">
                    <img src={logo} style={{width:"100%"}}/>
                </div>
                <div className="col-lg-4 col-sm-8 d-sm-none d-md-block">
                    <div className="search">
                        <input  type="text" value={search} placeholder="Search" onInput={(e)=>setSearch(e.target.value)}/>
                        <div style={{padding:"0px 10px",color:"black"}} onClick={Props}><BsSearch/></div>
                        {searchBar.length?<div className="search-bar">
                            {searchBar.map((e,i)=>{
                                return(
                                    <div key={i} className="row" style={{alignItems:"center"}}>
                                        <div className="col-lg-2">
                                            <img src={e.img} style={{width:"100%"}}/>
                                        </div>
                                        <div className="col-lg-8">
                                            <p>{e.name}</p>
                                        </div>
                                        <h6>&#8377; {e.price}</h6>
                                    </div>
                                )
                            })}
                        </div>:boolean?<p className="no-items"><span><BsSearch/></span>No items match</p>:""}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-1">
                    <div className="d-sm-none d-lg-block">
                        <ul className="page">
                            <li><BiUser/> Sign</li>
                            <li onClick={card}><BiShoppingBag/> Card</li>
                            <li><BiLogIn/> Login</li>
                            <li onClick={like}><AiOutlineHeart/> Like</li>
                        </ul>
                    </div>
                    <div className="d-lg-none" style={{textAlign:"center"}}>
                        {!open ? <i onClick={()=>setOpen(true)}><AiOutlineMenu/></i> : <i onClick={()=>setOpen(false)}><AiOutlineClose/></i> }
                    </div>
                </div>
            </div>
        {open ? <div className="open px-sm-1">
                        <ul>
                            <li><i><BiUser/></i><div> Sign</div></li>
                            <li onClick={card}><i><BiShoppingBag/></i><div> Card</div></li>
                            <li><i><BiLogIn/></i><div> Login</div></li>
                            <li onClick={like}><i><AiOutlineHeart/></i><div> Like</div></li>
                        </ul>
                </div>
                        :""}
        </div>
    </section>
    )
}

export default Navbar