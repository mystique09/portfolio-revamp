import { getRepo } from "./utils";

export type Project = {
	name: string;
	description: string;
	repo: string;
	demo: string;
	tags: string[];
};

export const projectList: Project[] = [
	{
		name: "Discord Bot",
		description:
			"Discord manager bot, can manage server roles, ban, kick, greet and automatically add Roles for new members. (under development).",
		tags: ["Rust", "Bot"],
		repo: getRepo("void"),
		demo: getRepo("void"),
	},
	{
		name: "Github Status",
		description:
			"Github status for your README.md Made with [Go, Echo, Entgo, Postgresql]. (under development)",
		tags: ["Web", "Go"],
		repo: getRepo("gh-stats"),
		demo: "https://profile-status.herokuapp.com",
	},
	{
		name: "The tree command clone, made with Rust.",
		description:
			"I made this cli so that I can see the content of a directory in a tree format.",
		tags: ["Rust"],
		repo: getRepo("lls"),
		demo: getRepo("lls"),
	},
	{
		name: "Brainf*ck interpreter, made with Rust.",
		description: "A basic brainf*ck interpreter made with rust.",
		tags: ["Rust"],
		repo: getRepo("brainfck"),
		demo: getRepo("brainfck"),
	},
	{
		name: "Inventory System (frontend)",
		description:
			"My first not so big personal project an Inventory system, can manage products, create, read, update, and delete(CRUD). Requires authentication to use the system. Stack: [Sveltekit, TailwindCSS] (under development)",
		tags: ["Svelte", "Web"],
		repo: getRepo("inventory-system"),
		demo: getRepo("inventory-system"),
	},
	{
		name: "Inventory System (backend)",
		description: "Inventory System backend. Stack: [Go, Echo, Gorm]",
		tags: ["Go"],
		repo: getRepo("inventory-system-go"),
		demo: getRepo("inventory-system-go"),
	},
	{
		name: "Confessit (frontend)",
		description:
			"Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]",
		tags: ["Svelte", "Web"],
		repo: getRepo("confessit"),
		demo: "https://confessit.vercel.app",
	},
	{
		name: "Confessit (backend)",
		description:
			"The backend of my Sayout clone, made with: [Sveltekit, Go, Postgresql, Gorm, Echo]",
		tags: ["Go"],
		repo: getRepo("confessit-backend"),
		demo: "https://confessit.vercel.app",
	},
	{
		name: "Class Management (frontend)",
		description:
			"My first big personal project an Inventory system, can manage products, create, read, update, and delete(CRUD). Requires authentication to use the system. Stack: [Sveltekit, TailwindCSS] (under development)",
		tags: ["Svelte", "Web"],
		repo: getRepo("class-manager"),
		demo: "https://class-management.vercel.app",
	},
	{
		name: "Class Management (backend)",
		description:
			"The backend of Class Management. Stack: [Go, Echo] (under development)",
		tags: ["Go"],
		repo: getRepo("class-manager-backend"),
		demo: "https://class-management.vercel.app",
	},
	{
		name: "Codegram (frontend)",
		description:
			"A simple social media website, can do CRUD operations. Stack: [NextJS, TailwindCSS] (under development)",
		tags: ["Web"],
		repo: getRepo("codegram"),
		demo: getRepo("codegram"),
	},
	{
		name: "Codegram (backend)",
		description:
			"Backend for my Codegram website. Stack: [Go, EntGo, Echo] (under development)",
		tags: ["Go"],
		repo: getRepo("codegram-go"),
		demo: getRepo("codegram-go"),
	},
	{
		name: "To-Do in Golang (backend)",
		description:
			"Backend for my To-Do website. Stack: [Go(net/http), Gorm, Echo] (under development)",
		tags: ["Go"],
		repo: getRepo("todo-go"),
		demo: getRepo("todo-go"),
	},
	{
		name: "Portfolio v1",
		description:
			"My first portfolio website made from scratch. Stack: [Scss, Js, Html5]",
		tags: ["Web"],
		repo: getRepo("porfolio-scratch"),
		demo: "https://benjiev1.vercel.app/",
	},
	{
		name: "Portfolio v2",
		description:
			"My second portfolio website made from scratch. Stack: [Scss, Typescript, Vite]",
		tags: ["Web"],
		repo: getRepo("portfolio"),
		demo: "https://benjieben.tk/",
	},
	{
		name: "Portfolio v3",
		description:
			"My third portfolio website made with Sveltekit and TailwindCSS. Stack: [Sveltekit, Typescript, TailwindCSS]",
		tags: ["Web", "Svelte"],
		repo: getRepo("portfolio-revamp"),
		demo: "https://benjieben-garcia.vercel.app",
	},
	{
		name: "Spotify Clone",
		description: "Spotify clone website. Stack: [Svelte, TailwindCSS]",
		tags: ["Svelte", "Web"],
		repo: getRepo("musify"),
		demo: "https://musify-puce.vercel.app",
	},
	{
		name: "Crypto Status",
		description:
			"Crypto Status viewer (not realtime). Stack: [Svelte, TailwindCSS]",
		tags: ["Svelte", "Web"],
		repo: getRepo("crypto_status"),
		demo: "testrepolink",
	},
];
