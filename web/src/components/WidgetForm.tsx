import { CloseButton } from "./CloseButton";

export function WidgetForm (){
    return(
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg
        w-[calc(100vw-2rem)] md:w-auto text-white">

            <header>
                <span className="text-xl leading-6"> Deixe seu FeedBack </span>

            <CloseButton></CloseButton>
            </header>
           
        </div>
    )
}