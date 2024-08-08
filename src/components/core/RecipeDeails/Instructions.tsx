import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Instructions = ({ step , i}: any) => {
    return (
        <div className='mt-5'>
            <p className='text-lg p-2'><span className='font-semibold mt-5'>Step {step.number}</span>. {step?.step}</p>
            <div className='flex justofy-between  pt-5' >
                <div className='flex flex-col gap-2 w-[20%] text-center border-r-2'>
                    <p className='font-medium text-slate-500'>Ingredients</p>
                    <div className='flex flex-col gap-2'>
                        {
                            step?.ingredients?.map((ing:any, i:number) => (
                                <p key={i} className='text-green-500'>{ing?.name}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-[80%]'>
                    <p className='font-medium text-center text-slate-500'>Equipment</p>
                    <div className='grid grid-cols-3 w-full gap-5 px-5'>
                        {
                            step?.equipment?.length > 0 ? (
                                step.equipment.map((equip: any, i: number) => (
                                    <Card
                                        key={i}
                                        data-id={equip.id}
                                        className="w-[250px] dark:bg-slate-900 cursor-pointer rounded"
                                    >
                                        <CardHeader className='p-3'>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={equip.image}
                                                alt="recipe image"
                                                className="w-[250px] rounded overflow-hidden h-[200px] object-cover"
                                            />
                                        </CardHeader>
                                        <CardFooter className="max-h-[50px] overflow-hidden  font-medium">
                                            <p className="px-10 text-center capitalize w-full">
                                                {equip?.name}
                                            </p>
                                        </CardFooter>
                                    </Card>
                                ))
                            ) : (
                                <div className="col-span-3 text-center text-slate-400 dark:text-slate-500">
                                    <p>No equipment needed</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions