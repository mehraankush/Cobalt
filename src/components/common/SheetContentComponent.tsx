"use client"
import React, { useState } from 'react'
import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { clearCart, removeFromCart } from '@/Redux/slices/cardSlice'
import { MdDeleteForever } from "react-icons/md";


const SheetContentComponent = () => {

    const [count, setCount] = useState(1);
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items);

    const handleRemoveFromCart = (title:string) => {
        dispatch(removeFromCart(title));
    };
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <SheetContent className='border border-black h-full'>
            <SheetHeader>
                <SheetTitle className='flex justify-between mt-5'>
                    <p>My Cart</p> 
                    <MdDeleteForever size={30} className="cursor-pointer" onClick={handleClearCart}/>
                </SheetTitle>
                <SheetDescription>
                    These are all your favroite items that you have liked .
                </SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-3 overflow-y-auto'>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <Card className="p-0 rounded" key={index}>
                                <div className="p-0 flex gap-2 relative">
                                    <Image
                                        src={item.imageUrl}
                                        alt="image"
                                        width={200}
                                        height={200}
                                        className="w-[150px] h-[150px] object-cover rounded"
                                    />
                                    <div className="flex flex-col justify-between font-light">
                                        <p className="text-lg">{item.title}</p>

                                        <div className="flex justify-between px-2 pb-1">
                                            <p>{count * 69}$</p>
                                            <div className="flex gap-1 border items-center">
                                                <Minus
                                                    size={20}
                                                    className="cursor-pointer p-1 font-bold bg-green-500 rounded text-white"
                                                    onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                                                />
                                                {count}
                                                <Plus
                                                    size={20}
                                                    className="cursor-pointer p-1 font-bold bg-green-500 rounded text-white"
                                                    onClick={() => setCount((prev) => prev + 1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    className="cursor-pointer absolute border border-black top-0 right-0 p-1 font-bold rounded-full text-black"
                                    onClick={() => handleRemoveFromCart(item.title)}
                                    >
                                        <X size={15} />
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <p className='text-center text-slate-400'>No item found</p>
                    )
                }
            </div>

            <SheetFooter className='border border-black absolute bottom-10 w-4/5'>
                <SheetClose asChild className='border border-black'>
                    <Button type="submit" className='w-full'>Place Order</Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    )
}

export default SheetContentComponent