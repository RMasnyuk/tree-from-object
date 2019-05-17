let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

let container = document.querySelector('#container');

function checkChildren(data) {
    for (key in data) {
        return true;
    }
    return false;
}

function createTree(container, obj) {
    let ul = document.createElement('ul');
    for (prop in obj) {
        let li = document.createElement('li');
        li.innerHTML = prop;
        ul.append(li);
        if (checkChildren(obj[prop])) {
            createTree(li, obj[prop]);
        }
    }
    container.append(ul);
}

createTree(container, data);






