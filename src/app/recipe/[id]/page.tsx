"use client"
import React from 'react'
import Image from 'next/image'
import Instructions from '@/components/core/RecipeDeails/Instructions'
import { Card, CardHeader } from '@/components/ui/card'
import { useGetSingleRecipies } from '@/services/api/RecipeApis'
import HTMLReactParser from 'html-react-parser/lib/index'
import { BiSolidLike } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import { Clock1 } from 'lucide-react'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import Link from 'next/link'


const page = ({ params }: { params: { id: string } }) => {
    // const { data: recipe } = useGetSingleRecipies(params.id)

    const recipe = {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 11,
        "gaps": "no",
        "preparationMinutes": 10,
        "cookingMinutes": 45,
        "aggregateLikes": 1866,
        "healthScore": 100,
        "creditsText": "pinkwhen.com",
        "sourceName": "pinkwhen.com",
        "pricePerServing": 300.45,
        "extendedIngredients": [
            {
                "id": 9037,
                "aisle": "Produce",
                "image": "avocado.jpg",
                "consistency": "SOLID",
                "name": "additional toppings: avocado",
                "nameClean": "avocado",
                "original": "additional toppings: diced avocado, micro greens, chopped basil)",
                "originalName": "additional toppings: diced avocado, micro greens, chopped basil)",
                "amount": 8.0,
                "unit": "servings",
                "meta": [
                    "diced",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 8.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 8.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "carrots",
                "nameClean": "carrot",
                "original": "3 medium carrots, peeled and diced",
                "originalName": "carrots, peeled and diced",
                "amount": 3.0,
                "unit": "medium",
                "meta": [
                    "diced",
                    "peeled"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    }
                }
            },
            {
                "id": 10111143,
                "aisle": "Produce",
                "image": "celery.jpg",
                "consistency": "SOLID",
                "name": "celery stalks",
                "nameClean": "celery sticks",
                "original": "3 celery stalks, diced",
                "originalName": "celery stalks, diced",
                "amount": 3.0,
                "unit": "",
                "meta": [
                    "diced"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 5064,
                "aisle": "Meat",
                "image": "cooked-chicken-breast.png",
                "consistency": "SOLID",
                "name": "chicken breast",
                "nameClean": "cooked chicken breast",
                "original": "2 cups fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                "originalName": "fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)",
                "amount": 2.0,
                "unit": "cups",
                "meta": [
                    "shredded",
                    "fully-cooked",
                    "for a vegetarian version",
                    "(may be omitted )"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 280.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10311297,
                "aisle": "Produce",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "flat leaf parsley",
                "nameClean": "flat leaf parsley",
                "original": "½ cup flat leaf Italian parsley, chopped (plus extra for garnish)",
                "originalName": "flat leaf Italian parsley, chopped (plus extra for garnish)",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "italian",
                    "chopped",
                    "for garnish",
                    "(plus extra )"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 30.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "6 cloves of garlic, finely minced",
                "originalName": "garlic, finely minced",
                "amount": 6.0,
                "unit": "cloves",
                "meta": [
                    "finely minced"
                ],
                "measures": {
                    "us": {
                        "amount": 6.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 6.0,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "2 tablespoons olive oil",
                "originalName": "olive oil",
                "amount": 2.0,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 10011693,
                "aisle": "Canned and Jarred",
                "image": "tomatoes-canned.png",
                "consistency": "SOLID",
                "name": "canned tomatoes",
                "nameClean": "canned tomatoes",
                "original": "28 ounce-can plum tomatoes, drained and rinsed, chopped",
                "originalName": "can plum tomatoes, drained and rinsed, chopped",
                "amount": 28.0,
                "unit": "ounce",
                "meta": [
                    "drained and rinsed",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 28.0,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 793.787,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10016069,
                "aisle": "Pasta and Rice",
                "image": "red-lentils.png",
                "consistency": "SOLID",
                "name": "lentils",
                "nameClean": "dried red lentils",
                "original": "2 cups dried red lentils, rinsed",
                "originalName": "dried red lentils, rinsed",
                "amount": 2.0,
                "unit": "cups",
                "meta": [
                    "dried",
                    "red",
                    "rinsed"
                ],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 360.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "salt and black pepper, to taste",
                "originalName": "salt and black pepper, to taste",
                "amount": 8.0,
                "unit": "servings",
                "meta": [
                    "black",
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 8.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 8.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11564,
                "aisle": "Produce",
                "image": "turnips.png",
                "consistency": "SOLID",
                "name": "turnip",
                "nameClean": "turnip",
                "original": "1 large turnip, peeled and diced",
                "originalName": "turnip, peeled and diced",
                "amount": 1.0,
                "unit": "large",
                "meta": [
                    "diced",
                    "peeled"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "large",
                        "unitLong": "large"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "large",
                        "unitLong": "large"
                    }
                }
            },
            {
                "id": 6615,
                "aisle": "Canned and Jarred",
                "image": "chicken-broth.png",
                "consistency": "LIQUID",
                "name": "vegetable stock",
                "nameClean": "vegetable stock",
                "original": "8 cups vegetable stock",
                "originalName": "vegetable stock",
                "amount": 8.0,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 8.0,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 1.88,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 10511282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "yellow onion",
                "original": "1 medium yellow onion, diced",
                "originalName": "yellow onion, diced",
                "amount": 1.0,
                "unit": "medium",
                "meta": [
                    "diced",
                    "yellow"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "medium",
                        "unitLong": "medium"
                    }
                }
            }
        ],
        "id": 715415,
        "title": "Red Lentil Soup with Chicken and Turnips",
        "readyInMinutes": 55,
        "servings": 8,
        "sourceUrl": "https://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
        "image": "https://img.spoonacular.com/recipes/715415-556x370.jpg",
        "imageType": "jpg",
        "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "soup",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "instructions": "To a large dutch oven or soup pot, heat the olive oil over medium heat. Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally. Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through. Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404667,
                                "name": "dutch oven",
                                "localizedName": "dutch oven",
                                "image": "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
                        "ingredients": [
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11143,
                                "name": "celery",
                                "localizedName": "celery",
                                "image": "celery.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 6615,
                                "name": "vegetable stock",
                                "localizedName": "vegetable stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 10016069,
                                "name": "red lentils",
                                "localizedName": "red lentils",
                                "image": "red-lentils.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 10316069,
                                "name": "lentils",
                                "localizedName": "lentils",
                                "image": "lentils-brown.jpg"
                            },
                            {
                                "id": 11564,
                                "name": "turnip",
                                "localizedName": "turnip",
                                "image": "turnips.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404794,
                                "name": "stove",
                                "localizedName": "stove",
                                "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                            },
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 22,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
                        "ingredients": [
                            {
                                "id": 10511297,
                                "name": "fresh parsley",
                                "localizedName": "fresh parsley",
                                "image": "parsley.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 99.42338562011719,
        "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
    }
    const summary = HTMLReactParser(recipe?.summary)

    console.log("Paramns", recipe)
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
                            recipe?.extendedIngredients?.map((rec, i) => (
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
                        recipe?.analyzedInstructions?.map((rec, i) => (
                            <div key={i} className='w-full'>
                                <p className='text-center text-xl uppercase'>{rec?.name || "Instruction"}</p>
                                <div className='px-5 w-full'>
                                    {
                                        rec?.steps?.map((step, i) => (
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

export default page