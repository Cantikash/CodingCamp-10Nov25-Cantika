document.getElementById("addBtn").onclick = function () {
    let input = document.getElementById("inputTask");
    let dateInput = document.getElementById("inputDate");

    let text = input.value.trim();
    let selectedDate = dateInput.value;

    if (text === "" || selectedDate === "") return;

    let li = document.createElement("li");

    let taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    let taskText = document.createElement("span");
    taskText.textContent = text;

    let formattedDate = new Date(selectedDate).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    let taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.textContent = formattedDate;

    taskInfo.appendChild(taskText);
    taskInfo.appendChild(taskDate);

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Selesai";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = function () {
        taskText.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(taskInfo);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    dateInput.value = "";
};