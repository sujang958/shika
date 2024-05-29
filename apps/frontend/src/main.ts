import { IS_IOS } from "./constants"
import "./style.css"

const keyboardOffButton = document.getElementById("keyboard-off-button")
const textNoteDiv = document.getElementById("text-note")

const main = () => {
  if (
    !(textNoteDiv instanceof HTMLDivElement) ||
    !(keyboardOffButton instanceof HTMLButtonElement)
  )
    return // TODO: show some erorr messages

  if (IS_IOS) keyboardOffButton.style.display = "block"

  keyboardOffButton.addEventListener("click", () => {
    document.querySelectorAll("input").forEach((element) => element.blur())
    textNoteDiv.blur()
  })

  textNoteDiv.addEventListener(
    "input",
    () => {
      console.log(textNoteDiv.innerText)
    },
    false
  )
}

main()
