import clear from "./clear.js";
import css from "./css.js";

const content = [
    "Phone: 862-867-5309","Email: bigtone@tonyspizza.com","Address: 42 Market St. Paterson, NJ 07505","DoorDash, UberEats, Grubhub"
]

export default () => {
    clear();

    const contact = document.createElement("div");
    css(contact, {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'align-items': 'center',

        'background-color': 'antiquewhite',

        'border-style': 'solid',
        'border-color': 'black',
        'border-width': '24px',

        'padding-top': '10%',
        'padding-bottom': '10%',

        'box-sizing': 'border-box',

        'width': '50%',
        'height': '100%',
    });

    // const header = document.createElement('span');
    // header.textContent = "Order from us!";
    // contact.append(header);

    content.forEach((str) => {
        let line = document.createElement('span');
        line.textContent = str;
        contact.append(line);
    });

    document.querySelector('#content').appendChild(contact);
}