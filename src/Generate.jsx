import React from "react";


export default function Generate({ onGenerateClick }) {

    // Run when the Generate button is clicked. 
    const handleGenerateClick = () => {
        // Call the parent component's callback function when the button is clicked
        onGenerateClick();
      };

    return (
        <>
            <div className="flex justify-center  ">
            <button className="bg-slate-50 hover:bg-slate-200 text-black font-bold p-1 rounded w-generate-button active:bg-slate-400" 
            onClick={handleGenerateClick}
            >Generate</button>
            </div>
        </>
    )
}