"use client"

import Container from "@/components/ui/container"
import useCart from "@/hooks/use-cart"
import CartItem from "./components/cart-item"
import Summary from "./components/summary"
import { useState, useEffect} from "react"

const CartPage = () => {
    const [ isMounted, setIsMounted] = useState(false);
    const cart = useCart() 

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return (
        <div className="bg-white"> 
         <Container>
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="tact-3xl font-bold text-black">Shopping Cart</h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart</p>}
                        <ul>
                            {cart.items.map((item) => (
                                <CartItem key={item.id} data={item}></CartItem>
                            ))}
                        </ul>
                    </div>
                    <Summary></Summary>
                </div>
            </div>
         </Container>
        </div>
    )
}

export default CartPage