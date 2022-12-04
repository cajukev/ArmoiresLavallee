import { writable } from 'svelte/store';
export const lang = writable('fr');
export const page = writable('');
export const heroImg = writable(1)
export const visible = writable(false)
export const navigated = writable(false)