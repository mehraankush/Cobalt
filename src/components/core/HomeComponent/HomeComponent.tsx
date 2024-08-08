"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { fetchAllRecipies, useGetAllRecipies, useGetQueriedRecipies } from '@/services/api/RecipeApis';
import { useAppDispatch } from '@/Redux/hooks';
import { addToCart } from '@/Redux/slices/cardSlice';
import { Button } from '@/components/ui/button';
import { MdFavorite } from "react-icons/md";
import toast from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import { DummyRecipes } from '@/data/Recipe';
import InfiniteScroll from '@/utils/InfilityScroll';


// // console.log(AllRecipes)
// const AllRecipes = {
//     results: [
//         {
//             "id": 715415,
//             "title": "Red Lentil Soup with Chicken and Turnips",
//             "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 716406,
//             "title": "Asparagus and Pea Soup: Real Convenience Food",
//             "image": "https://img.spoonacular.com/recipes/716406-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 644387,
//             "title": "Garlicky Kale",
//             "image": "https://img.spoonacular.com/recipes/644387-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 715446,
//             "title": "Slow Cooker Beef Stew",
//             "image": "https://img.spoonacular.com/recipes/715446-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 782601,
//             "title": "Red Kidney Bean Jambalaya",
//             "image": "https://img.spoonacular.com/recipes/782601-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 716426,
//             "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//             "image": "https://img.spoonacular.com/recipes/716426-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 716004,
//             "title": "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
//             "image": "https://img.spoonacular.com/recipes/716004-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 716627,
//             "title": "Easy Homemade Rice and Beans",
//             "image": "https://img.spoonacular.com/recipes/716627-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 664147,
//             "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
//             "image": "https://img.spoonacular.com/recipes/664147-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 640941,
//             "title": "Crunchy Brussels Sprouts Side Dish",
//             "image": "https://img.spoonacular.com/recipes/640941-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 715495,
//             "title": "Turkey Tomato Cheese Pizza",
//             "image": "https://img.spoonacular.com/recipes/715495-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 716381,
//             "title": "Nigerian Snail Stew",
//             "image": "https://img.spoonacular.com/recipes/716381-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 660306,
//             "title": "Slow Cooker: Pork and Garbanzo Beans",
//             "image": "https://img.spoonacular.com/recipes/660306-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 756814,
//             "title": "Powerhouse Almond Matcha Superfood Smoothie",
//             "image": "https://img.spoonacular.com/recipes/756814-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 715769,
//             "title": "Broccolini Quinoa Pilaf",
//             "image": "https://img.spoonacular.com/recipes/715769-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 642129,
//             "title": "Easy To Make Spring Rolls",
//             "image": "https://img.spoonacular.com/recipes/642129-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 642605,
//             "title": "Farro With Mushrooms and Asparagus",
//             "image": "https://img.spoonacular.com/recipes/642605-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 636589,
//             "title": "Butternut Squash Frittata",
//             "image": "https://img.spoonacular.com/recipes/636589-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 646738,
//             "title": "Herbivoracious' White Bean and Kale Soup",
//             "image": "https://img.spoonacular.com/recipes/646738-312x231.jpg",
//             "imageType": "jpg"
//         },
//         {
//             "id": 663559,
//             "title": "Tomato and lentil soup",
//             "image": "https://img.spoonacular.com/recipes/663559-312x231.jpg",
//             "imageType": "jpg"
//         }
//     ]

// }
// // console.log(searchInput)
// const isLoading = false

const HomeComponent = () => {
    const router = useRouter();
    const { data: AllRecipes, isLoading } = useGetAllRecipies();
    const dispatch = useAppDispatch();
    const [searchInput, setSearchInput] = useState('');
    const { mutate } = useGetQueriedRecipies()
    const [allRecipes, setallRecipes] = useState<any>(AllRecipes || DummyRecipes);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    console.log(AllRecipes,"AllRecipes")
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
        console.log("clicked")
        dispatch(addToCart({
            imageUrl,
            title
        }))
        toast('Recipe added to cart 🥳')
    }

    const handleUserQuery = async () => {
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
            {allRecipes.length===0 && <p className='text-center w-full dark:text-white'>Try Something Else No Result Found...</p>}
            {isLoading && <p className='text-center w-full dark:text-white'>Loading ...</p>}
            {/* <InfiniteScroll fetchMore={fetchAllRecipies} loadingComponent={<p>Loading...</p>}>
                {(items: any) => JSON.stringify(items)}
            </InfiniteScroll> */}
        </div>
    )
}

export default HomeComponent