import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "30% +",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Увеличилось количество обращений клиентами"
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Оценили компанию клиенты при использовании карты."
    },
    {
        title: "100+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Партнеров используют наш сервис для своего бизнеса."
    }
];
