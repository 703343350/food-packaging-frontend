const TextField = (props) => {

    const {setText, text, label, textColor} =props

    return         <div>
    <label for="first_name" class="block my-2 text-sm font-medium text-gray-900 dark:text-white" style={{color:"white"}}>{label}</label>
    <input type="text"  name={label} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={label} onChange={(e)=> setText(e.target.value, e.target.name)} required value={text}/>
</div>


}


export default TextField