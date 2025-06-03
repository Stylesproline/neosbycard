import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Подносим карту к телефону',
        role: 'Первое действие',
        message: `Клиент прикладывает свой телефон к вашей персональной карте.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Автоматическое открытие',
        role: 'Второе действие',
        message: `У клиента автоматически открывается ссылка с Вашей страницей отзывов (например на Яндекс|Google картах).`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Клиент оставляет отзыв',
        role: 'Итоговое действие',
        message: `Клиент при Вас оставляет отзыв или ставит отметку ⭐️⭐️⭐️⭐️⭐️ на Вашей странице`,
        avatar: '/images/testimonial-3.webp',
    },
];
