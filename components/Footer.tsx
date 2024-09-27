'use client';

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

import { useState } from "react";

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('gabrielvdfs@gmail.com');

        setCopied(true);
    }

    return (
        <footer className="w-full pb-10 mb-[50px] md:mb-5" id="contato">

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Gostou do meu trabalho e quer <span className="text-purple">entrar em contato</span> comigo?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Me contate no email, ou se conecte em minhas redes sociais abaixo para que possamos entrar em contato.
                </p>
                <a>
                    <MagicButton
                        title={copied ? "Email copiado!" : "Vamos Conversar"}
                        handleClick={handleCopy}
                        otherClasses="!bg-[#161A31]"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Gabriel Sathler.
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(({ id, img, link }) => (
                        <a
                            title={link}
                            href={link}
                        >
                            <div
                                key={id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;