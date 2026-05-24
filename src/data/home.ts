import { socialIcons, type SocialIconKey } from "./social-icons";

export type BranchLink = {
    name: string;
    icon: SocialIconKey;
    url: string;
    color: string;
};

export type Branch = {
    name: string;
    isAtm?: boolean;
    title: string;
    slogan: string;
    description: string;
    links: BranchLink[];
    accent: string;
    accentClass: string;
    imageSrc: string;
    imageAlt: string;
};

export const branches: Branch[] = [
    {
        name: "Algerian Tech Makers",
        isAtm: true,
        title: "الصفحة التقنية",
        slogan: "شباب واعد يصنع أثرًا تقنيًا",
        description: "صفحة تقنية تضُم شباب واعد، يريد الإسهام في بناء مجتمع تعلّمي يواكب التغيرات في المجال التّقني والتكنولوجي.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/Algeriantechmakersdz2021",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/algeriantechmakers",
                color: "hover:bg-green-400/10",
            },
            {
                name: "يوتيوب",
                icon: "yt",
                url: "https://www.youtube.com/@algeriantechmakers",
                color: "hover:bg-red-500/10",
            },
            {
                name: "لينكد إن",
                icon: "ln",
                url: "https://www.linkedin.com/posts/algerian-tech-makers_atmabrteam-activity-7293728696434122752-gDrm?utm_source=share&utm_medium=member_android&rcm=ACoAACzRbTsB5vBhYwHis8azgdlYWrYcl9pPKys",
                color: "hover:bg-blue-600/10",
            },
            {
                name: "ديسكورد",
                icon: "discord",
                url: "https://discord.com/invite/WF3832TDzA",
                color: "hover:bg-purple-500/10",
            },
        ],
        accent: "#F25C25",
        accentClass: "accent-cyan",
        imageSrc: "/assets/atm.webp",
        imageAlt: "Algerian Tech Makers",
    },
    {
        name: "نفَس طبّي",
        title: "Medical Breath",
        slogan: "صفحة طبية صاعدة",
        description: "نهتم بالتوعية الصحية الجسدية والنفسية، بأسلوب مبسط وموثوق. كما نعمل على تصحيح مفاهيم طبية شائعة.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/medicalbreath",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://www.instagram.com/medical.breath?igsh=aTB0N2Zna2ppMHRr",
                color: "hover:bg-pink-500/10",
            },
        ],
        accent: "#273F69",
        accentClass: "accent-cyan",
        imageSrc: "/assets/medical_breath.webp",
        imageAlt: "نفَس طبّي",
    },
    {
        name: "بعبق القرآن نحيا",
        title: "المبادرة القرآنية",
        slogan: "نور القرآن في تفاصيل حياتنا",
        description: "توعية شباب الأمّة الإسلاميّة بمسؤولياتهم الدّينيّة والأخلاقيّة، وتقوية صلتهم بدينهم، لنكون بذلك بديلا هادفا ونافعا على منصات التّواصل الاجتماعي.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/bi3abaqalquran",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/biaabaqalquran?igsh=MWliZzlwajc2Nm45aQ==",
                color: "hover:bg-pink-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/biabaqelquran",
                color: "hover:bg-green-400/10",
            },
        ],
        accent: "#12416B",
        accentClass: "accent-amber",
        imageSrc: "/assets/bi_ibk_quran.webp",
        imageAlt: "بعبق القرآن نحيا",
    },
    {
        name: "مغلوبة فانتصر",
        title: "العطاء المجتمعي",
        slogan: "قضيتنا قضيةُ كل المسلمين",
        description: "صفحة تهتم بنصرة القضية الشريفة وجميع القضايا العادلة في العالم ومساندتها.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/maghlubah",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/maghlubah?igsh=ejA4bjZ0aXAzNzMx",
                color: "hover:bg-pink-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/maghlubahApv",
                color: "hover:bg-green-400/10",
            },
        ],
        accent: "#EBBA39",
        accentClass: "accent-rose",
        imageSrc: "/assets/maghlouba.webp",
        imageAlt: "مغلوبة فانتصر",
    },
    {
        name: "تذوق كتابا",
        title: "نادي القراءة",
        slogan: "لأن القراءة تصنع وعياً",
        description: "لمحبي الكتب والمطالعة نقدم لكم صفحة تحوي مراجعات واقتباسات وتحديات ومسابقات من أجل تنمية عادة المطالعة في مجتمعنا.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/tadaweqkitab",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/tadaweqkitab?igsh=N21qMm8xZ2NlZHc2",
                color: "hover:bg-pink-500/10",
            },
        ],
        accent: "#4D438D",
        accentClass: "accent-emerald",
        imageSrc: "/assets/tadawk_kitab.webp",
        imageAlt: "تذوق كتابا",
    },
] as const;
