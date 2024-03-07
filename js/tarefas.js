document.addEventListener("DOMContentLoaded", function () {
    const botaoCriar = document.querySelector(".botao")
    const inputTarefa = document.querySelector(".input-task")
    const listTasks = document.querySelector(".list-tasks")

    botaoCriar.addEventListener("click", function () {
        if (inputTarefa.value.trim() !== "") {
            const novaTarefa = document.createElement("li")
            novaTarefa.classList.add("card")
            novaTarefa.innerHTML = `
                <div class="texto">${inputTarefa.value}</div>
            `
            listTasks.appendChild(novaTarefa)
            inputTarefa.value = "" 
        }
    })
})