"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidLike } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import HTMLReactParser from 'html-react-parser/lib/index'

import Instructions from '@/components/core/RecipeDeails/Instructions'
import { useGetSingleRecipies } from '@/services/api/RecipeApis'
import { DummtRecipeDetails } from '@/data/Recipe'


const Page = ({ params }: { params: { id: string } }) => {
    const { data: recipe } = useGetSingleRecipies(params.id)
    const [recipeDetails, setrecipeDetails] = useState(recipe || DummtRecipeDetails)
 
    const summary = HTMLReactParser(recipe?.summary)

    return (
        <section className='max-h-screen'>
            <div className='max-w-7xl mx-auto mt-10'>        
                <div className='rounded flex gap-10  justify-between p-5 h-full'>

                    <div className='flex flex-col gap-5 mt-[100px] w-[20%] overflow-hidden'>
                        <p className='text-light text-lg text-center'>Type</p>
                        <div className='flex flex-col gap-5'>
                            {
                                recipe?.dishTypes?.map((diet: any, i: number) => (
                                    <p key={i} className='text-green-500 text-center'>{diet}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className='w-[80%]'>
                        <p className='text-center text-5xl font-thin italic'>{recipe?.title}</p>
                        <Image
                            width={1000}
                            height={1000}
                            src={recipe?.image}
                            alt="recipe image"
                            className='w-[1100px] pt-5 h-[500px] object-cover rounded-md'
                        />
                    </div>
                </div>

                <div className='px-10 flex justify-between pb-5 pt-5  py-2 items-center'>

                    <div className='flex gap-5 '>

                        <div className='flex gap-1 items-center'>
                            <BiSolidLike size={23} />
                            <p>{recipe?.aggregateLikes}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <LuClock8 size={23} />
                            <p>{recipe?.readyInMinutes}min</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <RiMoneyRupeeCircleFill size={23} />
                            <p>{recipe?.pricePerServing}</p>
                        </div>
                    </div>
                    <Link href={recipe?.sourceUrl || '#'}>
                            <p className='text-blue-600 underline dark:text-white'>Source</p>
                        </Link>
                </div>

                <div className='px-5 py-5 text-slate-500 dark:text-slate-400'>
                    {summary}
                </div>

                <div className='py-10 '>
                    <p className='text-center text-xl uppercase'>Ingredients</p>
                    <div className='px-5 grid grid-cols-3 gap-8 pt-5'>
                        {
                            recipe?.extendedIngredients?.map((rec:any, i:number) => (
                                <div key={i} className='w-full shadow p-5 space-y-2 dark:bg-slate-800 rounded'>
                                    <p className='text-center text-xl  font-light capitalize'>{rec?.name || "Ingredients"}</p>
                                    <p className='h-[50px] overflow-hidden text-slate-500 dark:text-slate-400'>{rec?.originalName}</p>
                                    <div className='flex justify-end'>
                                        <div className='w-10 h-10 bg-green-500 text-white  rounded-full  flex justify-center items-center'>
                                            <p className=''>{rec?.amount}</p>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='mt-5'>
                    {
                        recipeDetails?.analyzedInstructions?.map((rec:any, i:number) => (
                            <div key={i} className='w-full'>
                                <p className='text-center text-xl uppercase'>{rec?.name || "Instruction"}</p>
                                <div className='px-5 w-full'>
                                    {
                                        rec?.steps?.map((step:any, i:number) => (
                                            <div key={i} className='w-full pb-10 '>
                                                <Instructions step={step} i={i} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section >
    )
}

export default Page