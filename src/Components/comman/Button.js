import { THEME_COLOR } from "../../Utils/Contants/ThemeColors";

const Button = (props) => {
    let {onClick, title, color, width} = props

    if(!width) width = "fit-content"
    if(!color) color = THEME_COLOR
    return <div style={{backgroundColor: color, color:"white", width: width}} className="p-1 px-4 rounded-xl text-center cursor-pointer" onClick={onClick}>
        {title}
    </div>
}



export default Button;