"use client"
import React, { useCallback, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { MdFavorite } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch } from '@/Redux/hooks';
import { Oval } from 'react-loader-spinner'

import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { useGetAllRecipies, useGetQueriedRecipies } from '@/services/api/RecipeApis';

import { addToCart } from '@/Redux/slices/cardSlice';
import { Button } from '@/components/ui/button';
import { DummyRecipes } from '@/data/Recipe';


const HomeComponent = () => {

    const router = useRouter();
    const { data: session } = useSession()
    const { data: AllRecipes, isLoading } = useGetAllRecipies();
    const dispatch = useAppDispatch();
    const [searchInput, setSearchInput] = useState('');
    const { mutate } = useGetQueriedRecipies()
    const [allRecipes, setallRecipes] = useState<any>(AllRecipes || DummyRecipes);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    const onConnectionClick = useCallback(async (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const box = target.closest("[data-id]");
        if (box) {
            const id = box.getAttribute("data-id");
            // console.log("Box clicked with id:", id);
            router.push(`/recipe/${id}`)
        }
    }, []);

    const handleAddToCart = async (imageUrl: string, title: string) => {
        if (!session) {
            router.push('/login')
            return;
        }
        dispatch(addToCart({
            imageUrl,
            title
        }))
        toast('Recipe added to cart 🥳')
    }

    const handleUserQuery = async () => {
        if (!session) {
            router.push('/login')
            return;
        }
        mutate({ q: searchInput }, {
            onSuccess: (data) => {
                console.log("Query Result", data)
                setallRecipes(data)
            },
            onError: (error) => {
                console.log("Query Error", error)
            }
        })
    }

    return (
        <div>
            <div className='mt-10 flex justify-center items-center'>
                <div className="relative w-4/5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IoSearchOutline size={20} className='dark:text-white' />
                    </div>
                    <input
                        onChange={(e) => handleChange(e)}
                        onKeyDown={(e) => e.key === 'Enter' && handleUserQuery()}
                        type="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for recipes..."
                        required
                    />
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 "
                    onClick={onConnectionClick}
                >
                    {
                        allRecipes?.results?.map((recipe: any, i: number) => (
                            <Card
                                key={i}

                                className="w-[400px] cursor-pointer rounded dark:bg-slate-900"
                            >
                                <CardHeader className='p-3 flex justify-center'
                                    data-id={recipe.id}
                                >
                                    <Image
                                        width={100}
                                        height={100}
                                        src={recipe.image}
                                        alt="recipe image"
                                        className="w-[400px] rounded"
                                    />
                                </CardHeader>
                                <div className=" overflow-hidden  font-light px-3 pt-1"
                                    data-id={recipe.id}
                                >
                                    <p className="text-left text-xl h-[50px] overflow-hidden">
                                        {recipe.title}
                                    </p>
                                    <p className='text-slate-400 text-sm pt-1'>
                                        {`Shortcuts help. Here's one that I often rely on: cooking with good quality, prepared 
                                ingredients. Now if you have visions/nightmares of Sandra Lee and her Semi-Home Cooking empire`}
                                    </p>
                                </div>

                                <CardFooter className='flex justify-end'>
                                    <Button
                                        className='border flex gap-1 items-center dark:border-white dark:hover:bg-gray-700'
                                        variant="ghost"
                                        onClick={() => handleAddToCart(recipe.image, recipe.title)}
                                    >
                                        <MdFavorite />  Add to Favorites
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
            {allRecipes.length === 0 && <p className='text-center w-full dark:text-white'>Try Something Else No Result Found...</p>}
            {isLoading && <div className='flex justify-center py-10'>
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
            }
            {/* <InfiniteScroll fetchMore={fetchAllRecipies} loadingComponent={<p>Loading...</p>}>
                {(items: any) => JSON.stringify(items)}
            </InfiniteScroll> */}
        </div>
    )
}

export default HomeComponent