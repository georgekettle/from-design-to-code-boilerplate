// app/javascript/controllers/movie_card_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["content"]

  connect() {
    //   console.log('moviecard')
    // console.log(this.contentTarget)
  }

  revealContent() {
    //   console.log('revealContent')
      this.contentTarget.classList.remove("d-none")
  }
}