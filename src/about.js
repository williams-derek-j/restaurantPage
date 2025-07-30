import clear from "./clear.js";
import css from "./css.js";

import tony from "./tony.gif";

export default () => {
    clear();

    const about = document.createElement("div");
    css(about, {
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

    const gif = document.createElement("img");
    gif.src = tony;
    about.append(gif);

    document.querySelector('#content').appendChild(about);
}

