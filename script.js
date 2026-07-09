document.addEventListener('DOMContentLoaded', () => {
    const presidenteElement = document.getElementById('presidente');
    const oradorElement = document.getElementById('orador');
    const leitorElement = document.getElementById('leitor');

    const data = {
        presidentes: ["Edivaldo André", "João Marcos"],
        oradores: ["João Lucas", "Bruno Gelinski"],
        leitores: ["Juarez Cruz", "Jhonathan Tomczyk"]
    };

    // Example function to change names
    function changeName(element, nameList) {
        let currentName = element.textContent;
        let index = nameList.indexOf(currentName);
        element.textContent = nameList[(index + 1) % nameList.length];
    }

    // Event listeners for changing names
    presidenteElement.addEventListener('click', () => changeName(presidenteElement, data.presidentes));
    oradorElement.addEventListener('click', () => changeName(oradorElement, data.oradores));
    leitorElement.addEventListener('click', () => changeName(leitorElement, data.leitores));
});
