import React from 'react'
interface FeatureCardTagsProps {
    name: Array<string>;
    styleClass ?: string;
}
function FeatureCardTags({ name, styleClass = "" }: FeatureCardTagsProps) {
    return (
        <div className="tags flex flex-wrap pt-6 gap-2">
            {
                name.map((item: string, index: number) => (
                    <button className={`px-[10px] py-2 text-zinc-900 bg-[#ffffff] border-black border-r-50 border-[0.105vw] flex items-center rounded-full gap-9 text-[1.8vh] md:text-[1vw] uppercase font-medium transition-all hover:bg-black hover:text-white duration-500 ease-in-out  ${styleClass}`}>{item}</button>
                ))
            }
        </div>
    );
}

export default FeatureCardTags