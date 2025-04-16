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
    contactInfo: [
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "Anadolu Modding Team",
            link: `https://discord.gg/anadolumoddingteam`
        },
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Car / Clothing / Texture",
            value: "Ateş",
            link: `https://discord.com/users/1095353068343787621`
        },
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Ymap / Car",
            value: "sWest",
            link: `https://discord.com/users/918501966731165696`
        },
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "3D Artist",
            value: "Polizontal",
            link: `https://discord.com/users/985910996185002076`
        },
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "3D Artist",
            value: "Maxis",
            link: `https://discord.com/users/1319938769238888489`
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Turkey",
            link: null
        }
    ]
}
