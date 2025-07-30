import clear from "./clear.js";
import css from "./css";

const content = ["Hungry?",
    "Place an order with us.",
    "Est. 1999",];

export default () => {
    clear();

    const home = document.createElement("div");
    css(home, {
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

    const header = document.createElement('span');
    header.textContent = "Tony's Pizza";
    home.append(header);

    content.forEach((str) => {
        let line = document.createElement('span');
        line.textContent = str;
        home.append(line);
    });

    document.querySelector('#content').appendChild(home);
}