import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Updateproduct from './Updateproduct'

import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

function Allproducts() {
    let [products, setProducts] = useState([])
    let [showmodal, setshowmodal] = useState(false)

    let getProducts = async () => {
        try {
            let { data } = await axios.get("http://localhost:3000/products");
            console.log((data));
            setProducts(data)

        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    // ! view products

    let navigateToproduct = useNavigate()
    let viewProduct = (pid) => {

        navigateToproduct(`/product/${pid}`)
    }

    // ! delete product

    let deleteProduct=async (pid) => {
        setshowmodal(true)
        try {
            await axios.delete(`http://lcoalhost:3000/products/${pid}`)

            setTimeout(() => {
                setshowmodal(false)
            }, 3000)

            getProducts()

        }
        catch (err) {
            console.log(err);
        }


        // ! update Product

        let Updateproduct = (pid) => {
            navigateToproduct(`/updateproduct/${pid}`)
        }

    }
    return (
        <>
            {showmodal && <Modal data='product delete succesfully' bgcolor='rgb(188,13,13' textcolor='red' />}

            <table>
                <thead>
                    <tr>
                        <th>sl No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ id, name, price }, index) => {
                        return <tr key={id}>
                            <td>{index + 1} </td>
                            <td>{name} </td>
                            <td>{price} </td>
                            <td><button className='btn view' onClick={() => {
                                viewProduct(id)
                            }}>View</button></td>
                            <td><button className='btn update' onClick={() => {
                                Updateproduct(id)
                            }}>View</button></td>
                            <td><button className='btn delete' onClick={() => {
                                deleteProduct(id)
                            }}>View</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Allproducts