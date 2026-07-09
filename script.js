document.addEventListener('DOMContentLoaded', () => {
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

    document.getElementById('presidente-11').addEventListener('click', () => changeName('presidente-11', data.presidentes));
    document.getElementById('orador-11').addEventListener('click', () => changeName('orador-11', data.oradores));
    document.getElementById('leitor-11').addEventListener('click', () => changeName('leitor-11', data.leitores));
});
