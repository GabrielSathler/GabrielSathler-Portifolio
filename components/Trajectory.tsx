import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { trajectory } from "@/data";

const Trajectory = () => {
    return (
        <div className="md:py-5" id="trajetoria">
            <h1 className="heading pb-12">
                Um pouco sobre minha{" "}
                <span className="text-purple">Carreira como Desenvolvedor.</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 max-lg:mt-10">
                <InfiniteMovingCards
                    items={trajectory}
                />
            </div>
        </div>

    )
}

export default Trajectory;