import fetchApi from '../../utils/fetchApi';
import './eventForm.css'

export default function eventForm(parent){
    const eventModal = document.createElement('div')
    eventModal.className = 'event-modal';

    const form = document.createElement('form')
    form.className = 'event-form';

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Name';
    nameInput.className = 'form-inputs'

    const description = document.createElement('textarea');
    description.placeholder = 'Description';
    description.className = 'form-textarea';

    const addressInput = document.createElement('input');
    addressInput.placeholder = 'Address';
    addressInput.className = 'form-inputs';

    const dateInput = document.createElement('input');
    dateInput.placeholder = 'Date';
    dateInput.type = 'date'
    dateInput.className = 'form-inputs';

    const submitForm = document.createElement('button')
    submitForm.className = 'form-button';
    submitForm.textContent = 'Crear'

    form.append(nameInput, description, addressInput, dateInput, submitForm)

    eventModal.appendChild(form)

    parent.appendChild(eventModal)



    submitForm.addEventListener('click', async (e) => {
        
        const body = {
            name: nameInput.value,
            description: description.value,
            address: addressInput.value,
            date: dateInput.value
        }

        const response = await fetchApi('/create-event', 'POST', JSON.stringify(body));

    })
}