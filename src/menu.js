import clear from "./clear.js";
import css from "./css.js";

const content = {
    drinks: [
        ['Water','Free'],['Soda','$2.50'],['Coffee','$1.75'],['Milkshake','$4.95']
    ],
    slices: [
        ['Cheese','$2.25'],['Pepperoni','$2.50'],['Neapolitan','$2.35'],['Carbonara','$2.65'],['Hawaiian','$2.45'],['Kebab','$3.10'],['Supreme','$3.25']
    ],
};

export default () => {
    clear();

    const menu = document.createElement("div");
    css(menu, {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'align-items': 'stretch',

        'background-color': 'antiquewhite',

        'border-style': 'solid',
        'border-color': 'black',
        'border-width': '24px',

        'padding-left': '10%',
        'padding-right': '10%',
        'padding-top': '2.5%',
        'padding-bottom': '5%',

        'width': '50%',
        'height': '100%',
        'box-sizing': 'border-box',
    });

    const header = document.createElement('span');
    header.style.alignSelf = 'center';
    header.style.height = '20%';
    header.textContent = "Menu";
    menu.append(header);

    let container = document.createElement("div");
    css(container, {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'align-items': 'stretch',

        'height': '80%',
    })
    for (const category in content) {
        let items = document.createElement('div');
        css(items, {
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'stretch',
        });
        items.append(document.createElement('span').textContent = `${category}`.toUpperCase());
        content[category].forEach((item) => {
            const entry = document.createElement('div');
            css(entry, {
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'space-between',
                'align-items': 'stretch',

                'white-space': 'nowrap',
            })

            item.forEach((data) => {
                entry.append(document.createElement('span').textContent = `${data}`);
            })

            const dots = document.createElement('div')
            dots.style.justifySelf = 'stretch';
            dots.style.overflow = 'hidden';
            entry.insertBefore(dots, entry.childNodes[1]);
            entry.childNodes[1].textContent = "------------------------------------------------------------------------------------------------------------------------------------------------------------";

            items.append(entry);
        })
        container.append(items);
    }
    container.insertBefore(document.createElement('hr'), container.childNodes[1]);
    menu.append(container);

    document.querySelector('#content').appendChild(menu);
}