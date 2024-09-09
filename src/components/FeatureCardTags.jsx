import React from 'react'

function FeatureCardTags({ name, styleClass = "" }) {
    return (
        <div className="tags flex flex-wrap pt-6 gap-2">
            {
                name.map((item, index) => (
                    <button className={`px-[10px] py-2 text-zinc-900 bg-[#ffffff] border-black border-r-50 border-[0.105vw] flex items-center rounded-full gap-9 text-[1vw] uppercase font-medium ${styleClass}`}>{item}</button>
                ))
            }
        </div>
    );
}

export default FeatureCardTags