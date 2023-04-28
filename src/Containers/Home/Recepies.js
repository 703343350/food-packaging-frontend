import React from 'react'
let colors = ["#df966b", "#5c7734", "#9caeb0", "#826d63", "#eda661", "#55707c"]


const Recepies = (props) => {

  const { handleRecepieSelect, recepies, toggleState } = props;

  return <div className=" bg-slate-50">

    <div className="border border-slate-400 relative w-full shadow-md">
      <div className=" bg-[#30649b] p-4">
        <h2 className="text-6xl text-[#25a5bd] font-medium leading-tight ">Recipes</h2>
      </div>
      <div className="grid grid-cols-6 gap-1">
        {recepies.map((recepie, index) => {
          return <div
            className={toggleState === index ? "block text-center bg-indigo-500" : "block text-center bg-indigo-500 opacity-75"}
            onClick={() => handleRecepieSelect(index, recepie.name)}
          >
            <div className={toggleState === index ? "h-2 rounded-full bg-white" : "h-2 rounded-full bg-slate-500"}></div>
            <div
              className={toggleState === index ? "border-b-2 border-neutral-100 h-16 pt-5 py-3 dark:border-neutral-600 dark:text-neutral-50 text-white" : "border-b-2 border-neutral-100 h-16 pt-5 py-3 dark:border-neutral-600 dark:text-neutral-50"} style={{ background: colors[index] }}>
              {recepie.name}
            </div>
            <div
              className=""
              data-te-ripple-init
              data-te-ripple-color="light">
              <img
                className="h-48"
                src="https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?s=612x612&w=0&k=20&c=5cAWrCndkNTzBkcFKFqEn3eXvEwBT30uMRkSogaH-oY="
                alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  </div>

}


export default Recepies;