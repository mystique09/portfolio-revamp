import { getRepo } from "./utils";

export type Project = {
    id: number;
    name: string;
    description: string;
    repo: string;
    demo?: string;
    tags: string[];
};

export const projectList: Project[] = [
    {
        id: 1,
        name: "Algory",
        description: "You can pose questions, upvote or downvote answers, and follow users on Algory, a StackOverflow clone.",
        demo: "https://algory.pages.dev",
        tags: ["Web", "Svelte", "Pocketbase"],
        repo: getRepo("algory"),
    },
    {
        id: 2,
        name: "Github Status",
        description: "Github status for your README.md Made with [Go, Echo, Entgo, Postgresql]. (under development)",
        tags: ["Web", "Go"],
        repo: getRepo("gh-stats"),
    },
    {
        id: 3,
        name: "The tree command clone, made with Rust.",
        description: "I made this cli so that I can see the content of a directory in a tree format.",
        tags: ["Rust"],
        repo: getRepo("lls"),
    },
    {
        id: 4,
        name: "Brainf*ck interpreter, made with Rust.",
        description: "A basic brainf*ck interpreter made with rust.",
        tags: ["Rust"],
        repo: getRepo("brainfck"),
    },
    {
        id: 5,
        name: "Confessit",
        description: "Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]",
        tags: ["Svelte", "Web", "Frontend"],
        repo: getRepo("confessit"),
        demo: "https://cnfs.vercel.app",
    },
    {
        id: 6,
        name: "Confessit",
        description: "The backend of my Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]",
        tags: ["Go", "Backend"],
        repo: getRepo("confessit-server"),
        demo: "https://github.com/mystique09/confessit-server",
    },
    {
        id: 7,
        name: "Portfolio v1",
        description: "My first portfolio website made from scratch. Stack: [Scss, Js, Html5]",
        tags: ["Web"],
        repo: getRepo("porfolio-scratch"),
        demo: "https://benjiev1.vercel.app/",
    },
    {
        id: 8,
        name: "Portfolio v2",
        description: "My second portfolio website made from scratch. Stack: [Scss, Typescript, Vite]",
        tags: ["Web"],
        repo: getRepo("portfolio"),
        demo: "https://benjieben.tk/",
    },
    {
        id: 9,
        name: "Portfolio v3",
        description:
            "My third portfolio website made with Sveltekit and TailwindCSS. Stack: [Sveltekit, Typescript, TailwindCSS]",
        tags: ["Web", "Svelte"],
        repo: getRepo("portfolio-revamp"),
        demo: "https://benjieben-garcia.pages.dev",
    },
    {
        id: 10,
        name: "Spotify UI Clone",
        description: "Spotify clone website. Stack: [Svelte, TailwindCSS]",
        tags: ["Svelte", "Web"],
        repo: getRepo("musify"),
        demo: "https://musify-puce.vercel.app",
    },
    {
        id: 11,
        name: "Crypto Status",
        description: "Crypto Status viewer (not realtime). Stack: [Svelte, TailwindCSS]",
        tags: ["Svelte", "Web"],
        repo: getRepo("crypto_status"),
    },
];
