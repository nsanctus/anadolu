import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "Ateş",
    },
    social: {
        github: "Ateş",
        discord: "1095353068343787621"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projeler' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "5 Animasyonlu Armas İnfinity",
            description: "Anadolu Modding Team Olarak Gerçeği İle Birebir Aynı 5 Animasyonlu Armas İnfinity Projemiz",
            image: "/projects/portfolio-app.png",
            technologies: ["sWest", "Ellunait", "Maxis"],
            github: "https://discord.gg/anadolumoddingteam",
            demo: "https://www.youtube.com/watch?v=Zzr5tNavwHQ"
        },
        {
            id: 2,
            title: "Ek Polis Karakolu",
            description: "Çok sevgili arkadaşlar kendi yapımımız olan Türk Polis Ek Karakolunu sizlerin huzuruna sunuyoruz. Satın alım için ticket oluşturunuz. Karakolun görünüşünü bu linkten ulaşabilirsiniz;",
            image: "/projects/code-share-app.png",
            technologies: ["sWest", "Maxis"],
            demo: "https://youtu.be/MFTs09EJYxc"
        }
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "fr3zy",
            link: `https://discord.com/users/1155137511954337887`
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@fr3zy",
            link: `https://github.com/fr3zyy`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "fr3zy@example.com",
            link: "mailto:fr3zy@example.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Turkey",
            link: null
        }
    ]
}
