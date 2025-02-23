import React from "react";
import Card from "./Card";
import Controls from "./controls";

function Board() {
    return (
        <div className="p-5 flex items-center justify-center w-full h-full overflow-hidden">
            <Controls />
            <div className="border-2 p-5 grid grid-cols-5 gap-2 w-full h-full overflow-hidden items-center justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            
            </div>
        </div>
    )
}

export default Board;