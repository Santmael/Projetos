
import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"


export function Widget(){

const [isWidgetOpen,setIsWidgetOpen] = useState(false)
    function toggleWidgetVisible(){
        setIsWidgetOpen(!setIsWidgetOpen)
    }
    return ( 
        
    <div className="absolute bottom-5 right-5">
       
     { }
        <button onClick={toggleWidgetVisible} className="bg-brand-500 
        rounded-full
        px-3 h-12 text-white flex items-center group" >

        <ChatTeardropDots className="w-6 h-6"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
            <span className="pl-2"></span>
            FeedBack
            </span>
        </button>
    </div>
    )
}
   
    