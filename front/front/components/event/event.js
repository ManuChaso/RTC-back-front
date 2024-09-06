import './event.css'

export default function eventCard(event, parent){
    const eventContainer = document.createElement('div');
    eventContainer.className = 'event-conteiner';

    const eventName = document.createElement('h3');
    eventName.className = 'event-name';
    eventName.textContent = event.name;

    const eventDescription = document.createElement('p');
    eventDescription.className = 'event-description';
    eventDescription.textContent = event.description;

    const eventDate = document.createElement('p');
    eventDate.className = 'event-date';
    eventDate.textContent = event.date;

    const eventAddress = document.createElement('p');
    eventAddress.className = 'event-address';
    eventAddress.textContent = event.address;

    eventContainer.append(eventName, eventDescription, eventAddress, eventDate);

    parent.appendChild(eventContainer)
}