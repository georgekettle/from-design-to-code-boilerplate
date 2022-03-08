// app/javascript/controllers/movie_card_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ['infos', 'form', 'card']
    connect() {
        // console.log(this.infosTarget)
    }

    displayForm(event) {
        this.formTarget.classList.remove('d-none')
        this.infosTarget.classList.add('d-none')
    }

    // this.inputTarget.addEventListener('keyup', this.update.bind(this))

    update(event) {
        event.preventDefault()
        console.log('stopped from submitting form')
        const url = this.formTarget.action
        fetch(url, {
            method: "PATCH",
            headers: { "Accept": "text/plain" },
            body: new FormData(this.formTarget)
        })
            .then(response => response.text())
            .then(‘data’, () => {
                console.log(this.data)
            })
            // .then((data) => {
            //     this.cardTarget
            //     // 👆🏻 is wrong as it this is the wrong context (It refers to callback now, not the stimulus class (controller))
            // }.bind(this))
            // .then(this.replaceCard.bind(this))
    }

    replaceCard(data) {
        this.element.outerHTML = data
    }
}