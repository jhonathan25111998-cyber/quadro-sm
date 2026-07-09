document.addEventListener('DOMContentLoaded', function() {
    const data = {
        presidentes: ["Edivaldo André", "João Marcos"],
        oradores: ["João Lucas", "Bruno Gelinski"],
        leitores: ["Juarez Cruz", "Jhonathan Tomczyk"]
    };

    function changeName(elementId, nameList) {
        const element = document.getElementById(elementId);
        let currentName = element.textContent;
        let index = nameList.indexOf(currentName);
        element.textContent = nameList[(index + 1) % nameList.length];
    }

    document.getElementById('display-presidente-11').addEventListener('click', () => changeName('display-presidente-11', data.presidentes));
    document.getElementById('display-orador-11').addEventListener('click', () => changeName('display-orador-11', data.oradores));
    document.getElementById('display-leitor-11').addEventListener('click', () => changeName('display-leitor-11', data.leitores));
});
