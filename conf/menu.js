const {app, Menu} = require('electron');

const template = [{
    label: app.name,
    submenu:[
        {role: 'about'}
    ]
}
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);