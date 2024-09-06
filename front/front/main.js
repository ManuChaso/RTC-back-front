import eventCard from './components/event/event';
import eventForm from './components/eventForm/eventForm';
import './style.css'
import fetchApi from './utils/fetchApi';

const app = document.querySelector('#app')

async function main(){
  const createEvent = document.createElement('button');
  createEvent.className = 'create-event-button';
  createEvent.textContent = 'Crear evento';

  const eventsContainer = document.createElement('section')
  eventsContainer.className = 'events-container';


  const events = await fetchApi('/')


  events.forEach(event => {
      eventCard(event, eventsContainer)
  });


  app.append(createEvent, eventsContainer)

  createEvent.addEventListener('click', () => {
    eventForm(app)
  })
}

main()