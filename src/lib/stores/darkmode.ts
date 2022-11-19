import { writable, type Writable } from "svelte/store";

export const toggleDarkmode: Writable<boolean> = writable(false);