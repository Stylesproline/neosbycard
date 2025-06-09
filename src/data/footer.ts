import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Заказывайте прямо сейчас.",
    quickLinks: [
        {
            text: "Описание",
            url: "#features"
        },
        {
            text: "Цены",
            url: "#pricing"
        },
        {
            text: "Как пользоваться?",
            url: "#testimonials"
        }
    ],
    email: ' ',
    telephone: ' ',
    socials: {
        // github: 'https://github.com',
         x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}
