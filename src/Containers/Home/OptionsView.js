import React, { useState } from 'react'

const homeCook = [
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cook: 'HOME COOK',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cook: 'HOME COOK',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cook: 'HOME COOK',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cook: 'HOME COOK',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cook: 'HOME COOK',
        provider: 'PROVIDER 1'
    },
]
const Cafeteria = [
    {
        image: "Img/cafeteria1.png",
        cafeteria: 'CAFETERIA',
        provider: 'PROVIDER 1'
    },
    {
        image: "Img/cafeteria2.png",
        cafeteria: 'CAFETERIA',
        provider: 'PROVIDER 1'
    },
    {
        image: "Img/cafeteria3.png",
        cafeteria: 'CAFETERIA',
        provider: 'PROVIDER 1'
    },
    {
        image: "Img/cafeteria4.png",
        cafeteria: 'CAFETERIA',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        cafeteria: 'CAFETERIA',
        provider: 'PROVIDER 1'
    },
]
const Restaurant = [
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        restaurant: 'RESTAURANT',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        restaurant: 'RESTAURANT',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        restaurant: 'RESTAURANT',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        restaurant: 'RESTAURANT',
        provider: 'PROVIDER 1'
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1",
        restaurant: 'RESTAURANT',
        provider: 'PROVIDER 1'
    },
]
function OptionsView(props) {
    const { type, currentType, setCurrentType, cafeData } = props;
    const [toggleButton, setToggleButton] = useState(1)

    const toggleCooks = (value) => {
        // setCurrentSearch(currentSearch=> ({...currentSearch,type:value }))
        setCurrentType(value)
    }

    if (currentType === "") {
        return null
    }
    return (
        <div className="m-4">
            <div className='grid grid-cols-7 gap-2 mx-6 m-1'>
                <div className=''>
                    <div className='mx-6' onClick={() => toggleCooks("homecook")}>HOME COOK</div>
                    <div className={currentType === "homecook" ? "h-2 w-40 rounded-full bg-slate-600" : "h-2 w-40 rounded-full bg-slate-400"}></div>
                </div>
                <div className=''>
                    <div className='mx-10' onClick={() => toggleCooks("Cafeteria")}>CAFETERIA</div>
                    <div className={currentType === "Cafeteria" ? "h-2 w-40 rounded-full bg-slate-600" : "h-2 w-40 rounded-full bg-slate-400"}></div>

                </div>
                <div className=''>
                    <div className='mx-8' onClick={() => toggleCooks("restaurant")}>RESTAURANT</div>
                    <div className={currentType === "restaurant" ? "h-2 w-40 rounded-full bg-slate-600" : "h-2 w-40 rounded-full bg-slate-400"}></div>
                </div>
            </div>
            <div className={currentType === "homecook" ? "block border -mt-1 border-slate-400  relative my-4 w-full p-2 pt-4 shadow-md" : "hidden"}>
                <div className='grid grid-cols-5 gap-10 mx-6'>
                    {
                        homeCook.map((items) => {
                            return (
                                <div
                                    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0.3,0.3,0.3,0.07),0_10px_20px_-2px_rgba(0.2,0.2,0.2,0.05)] dark:bg-neutral-700">
                                    <div><img src={items.image} /></div>
                                    <div className="p-6 text-center">
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.cook}
                                        </h5>
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.provider}
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={currentType === "Cafeteria" ? "block border -mt-1 border-slate-400  relative my-4 w-full p-2 pt-4 shadow-md" : "hidden"}>
                <div className='grid grid-cols-5 gap-3 mx-6'>
                    {
                        cafeData.map((items) => {
                            return (
                                <div
                                    className="block overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0.3,0.3,0.3,0.07),0_10px_20px_-2px_rgba(0.2,0.2,0.2,0.05)] dark:bg-neutral-700">
                                    <div><img src={"https://tse4.mm.bing.net/th/id/OIP.6E_PFk7fIH63eRoUnsnGTQHaE7?pid=ImgDet&rs=1"} /></div>
                                    <div className="p-6 text-center">
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.name}
                                        </h5>
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.name}
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={currentType === "restaurant" ? "block border -mt-1 border-slate-400  relative my-4 w-full p-2 pt-4 shadow-md" : "hidden"}>
                <div className='grid grid-cols-5 gap-3 mx-6'>
                    {
                        Restaurant.map((items) => {
                            return (
                                <div
                                    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0.3,0.3,0.3,0.07),0_10px_20px_-2px_rgba(0.2,0.2,0.2,0.05)] dark:bg-neutral-700">
                                    <div><img src={items.image} /></div>
                                    <div className="p-6 text-center">
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.restaurant}
                                        </h5>
                                        <h5
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {items.provider}
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default OptionsView