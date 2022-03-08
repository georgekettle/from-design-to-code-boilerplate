// app/javascript/controllers/movie_card_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["form", "input", "list"]
    connect() {
        // console.log(this.listTarget)
    }

    update(event) {
        // console.log('Update list with AJAX')
        // get the value of the input and console
        console.log(this.inputTarget.value)
        console.log('Sending fetch request to replace list with updated version')
        const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
        fetch(url, { headers: { "Accept": "text/plain" } })
            .then(response => response.text())
            .then((data) => {
                // console.log(data)
                this.listTarget.outerHTML = data
            })
    }
}