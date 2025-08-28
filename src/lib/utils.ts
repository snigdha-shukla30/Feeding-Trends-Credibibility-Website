// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import { type ClassValue, clsx } from "clsx" //Multiple classes ko merge karega
import { twMerge } from "tailwind-merge" //Conflicting Tailwind classes ko resolve karega

export function cn(...inputs: ClassValue[]) { // cn function input argument accept krega
  return twMerge(clsx(inputs))
}
//Pehle clsx sab classes ko merge karega , Phir twMerge Tailwind conflicts resolve karega