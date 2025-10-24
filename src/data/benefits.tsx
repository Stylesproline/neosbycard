import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";
import { TbMapStar } from "react-icons/tb";
import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Карты для отзывов ",
        description: "Увеличение количества отзывов ⭐️⭐️⭐️⭐️⭐️ на Yandex Maps|Google Maps за считанные секунды. Всего в одно касание🛜 клиенты смогут оставить отзывы, помогая вам построить сильную онлайн репутацию и привлечь новых клиентов.Мы решаем проблему: Большинство локальных бизнесов либо получают слишком мало отзывов, либо не могут отреагировать на них", 
        bullets: [
            {
                title: "Неповторимый опыт",
                description: "Наши NFC-карты позволяют клиентам без труда оставлять отзывы. Просто приложите их к смартфону, и в нем сразу откроется Yandex Maps| Google Maps страница отзывов вашей компании в считанные секунды!",
                icon: <SiGooglemaps size={26} />
            },
            {
                title: "Повышайте свою видимость",
                description: "Положительные отзывы имеют решающее значение для SEO. Больше отзывов означает более высокие рейтинги на Yandex Maps, Google Maps, что делает легче потенциальным клиентам найти вас.",
                icon: <TbMapStar size={26} />
            },
            {
                title: "Отслеживайте успех",
                description: "Узнавайте больше о взаимодействиях с клиентами и анализируйте тенденции, что поможет вам совершенствовать свои маркетинговые стратегии.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Электронные визитки🪪",
        description: "Передача ваших контактов  в одно касание смартфона📲",
        bullets: [
            {
                title: "Делитесь своими контактами",
                description: "Диктовать их зачастую долго и неудобно.Наши NFC-карты позволяют клиентам делиться ими без труда🛜",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Визитка всегда под рукой",
                description: "Бумажные визитки могут закончиться.Электронная визитка никогда не закончиться,т.к. она остается у вас.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Революционный маркетинговый инструмент",
                description: "Ваш контакт остается в смартфоне клиента.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Брендированная визитка",
        description: "Нанесение вашего логотипа и QR кода",
        bullets: [
            {
                title: "Индивидуальный подход",
                description: "Выбор материала:пластик и т.п.",
                icon: <FiLock size={26} />
            },
            {
                title: "Различные интеграции",
                description: "Варианты выбора:ссыки на социальные сети |мессенжеры,отзывы на геосервисах,личная электронная визитка",
                icon: <FiUser size={26} />
            },
            {
                title: "Обновление за секунду",
                description: "Современный прогрессивный сервис,применяя который вы становитесь заметнее,выделяясь среди конкурентов",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.webp"
    },
]
