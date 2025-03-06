import WhiteButton from "../components/WhiteButton"
import BottonBorder from "../components/BottonBorder"
import { SERVISES_PAGE_TEXT } from "@/constants/text"

export default function Servises() {
    const t = SERVISES_PAGE_TEXT;
    return (
        <>
            <div className="pt-6 pb-32 relative">
                <div className="relative z-10 container mx-auto" id="servises-first">
                    {/* Первый отсек */}
                    <div className="flex flex-row items-center my-8 pb-16">
                        {/* Текст и кнопка */}
                        <div className="flex flex-col">
                            <h3 className="font-extralight text-4xl text-zinc-500 mb-4">/01</h3>
                            <h4 className="mb-4">{t.servises.first.title}</h4>
                            <p className="mb-4 max-w-2xl">{t.servises.first.description.full}</p>
                            <ul className="mb-10">
                                {/* придумать что вставить */}
                            </ul>
                            <WhiteButton>Order</WhiteButton>
                        </div>
                    </div>
                    <BottonBorder />
                    <div className="flex flex-row items-center my-8 pb-16" id="servises-second">
                        {/* Текст и кнопка */}
                        <div className="flex flex-col">
                            <h3 className="font-extralight text-4xl text-zinc-500 mb-4">/02</h3>
                            <h4 className="mb-4">{t.servises.second.title}</h4>
                            <p className="mb-4 max-w-2xl">{t.servises.second.description.full}</p>
                            <ul className="mb-10">
                                {/* придумать что вставить */}
                            </ul>
                            <WhiteButton>Order</WhiteButton>
                        </div>
                    </div>
                    <BottonBorder />
                    <div className="flex flex-row items-center my-8 pb-16" id="servises-third">
                        {/* Текст и кнопка */}
                        <div className="flex flex-col">
                            <h3 className="font-extralight text-4xl text-zinc-500 mb-4">/03</h3>
                            <h4 className="mb-4">{t.servises.third.title}</h4>
                            <p className="mb-4 max-w-2xl">{t.servises.third.description.full}</p>
                            <ul className="mb-10">
                               {/* придумать что вставить */}
                            </ul>
                            <WhiteButton>Order</WhiteButton>
                        </div>
                    </div>
                </div>
            </div>
            <BottonBorder />
        </>
    )
};