import { writable } from "svelte/store"

export const toDoItems = writable([
  {text: "Take out trash", status: true},
  {text: "Study programming", status: false},
  {text: "Text Lucy", status: false}
])