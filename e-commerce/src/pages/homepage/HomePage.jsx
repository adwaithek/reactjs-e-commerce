import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Layout from '../../components/Layout/layout/Layout'
import { useAuth } from '../../context/auth'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
import {BsCartPlus} from 'react-icons/bs'

import { Checkbox } from 'antd'
import { useCart } from '../../context/Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



function HomePage() {

  const [auth, setAuth] = useAuth()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
const [checked ,setChecked]=useState([])
const [cart,setCart]=useCart()

const navigate =useNavigate()

  //getcatgry

const getAllCategory=async()=>{
  try{
      const {data}=await axios.get("/api/v1/category/get-category")
      if(data.success){
          setCategories(data.category)
      }

  }catch(error){
      console.log(error)
  }


}

useEffect(()=>{
getAllCategory(); 
},[])


  //getallproductssss

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product")
      setProducts(data.products)

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong !")
    }
  }
    useEffect(() => {
      getAllProducts();

    }, [])



    const handleFilter=()=>{

    }

    return (
      <Layout>
        <div className="row mt-3 dashboard">
          <div className="col-md-2">
            <h6 className="text-center">Filter By Category</h6 >
            <div className="d-flex flex-column">
            {/* <div className="d-flex flex"> */}
              {categories?.map((c)=>(
                <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>{c.name}</Checkbox>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products</h1>
            <div className="d-flex flex-wrap">
            { products?.map(p=>(
          <div className="card ms-3"   key={p._id}>
          <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt=""  style={{height:"15rem",width:'18rem' ,backgroundSize:'cover'}} />
          
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">{p.description.substring(0, 60)}</p>
            <button className='md   btn btn-primary' onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
            <button className='btn btn-primary ms-3' onClick={()=>{
              setCart([...cart,p])
              localStorage.setItem('cart',JSON.stringify([...cart,p]))
              toast.success("Item Added to cart")
            }} > <FontAwesomeIcon icon={faCartPlus}/> </button>
          </div>
        </div>
        
        
        
      ))}
            </div>
          </div>
        </div>

      </Layout>

    )
  
}

export default HomePage