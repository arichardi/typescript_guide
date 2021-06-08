const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const fromTo = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener( 'submit', e => {
    e.preventDefault
    console.log(
        type.value,
        fromTo.value,
        details.value,
        amount.value
    )
});

