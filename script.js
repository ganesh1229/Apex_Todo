/* Theme Toggle */

function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

/* Contact Form Validation */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let valid = true;

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
            /^[0-9]{10}$/;

        document.getElementById("firstError").innerText = "";
        document.getElementById("lastError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("messageError").innerText = "";

        if (firstName === "") {
            document.getElementById("firstError")
                .innerText = "First name required";
            valid = false;
        }

        if (lastName === "") {
            document.getElementById("lastError")
                .innerText = "Last name required";
            valid = false;
        }

        if (!emailPattern.test(email)) {
            document.getElementById("emailError")
                .innerText = "Enter valid email";
            valid = false;
        }

        if (!phonePattern.test(phone)) {
            document.getElementById("phoneError")
                .innerText = "Enter valid phone number";
            valid = false;
        }

        if (message === "") {
            document.getElementById("messageError")
                .innerText = "Message required";
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });
}

/* Todo CRUD */

function addTask() {

    const taskInput =
        document.getElementById("taskInput");

    const taskText =
        taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    /* Current Date & Time */

    const now = new Date();

    const time =
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

    const date =
        now.toLocaleDateString();

    const li =
        document.createElement("li");

    li.classList.add("task-item");

    li.innerHTML = `
        <div>

            <span class="task-text">
                ${taskText}
            </span>

            <p class="task-time">
                Added on ${date} at ${time}
            </p>

        </div>

        <div class="task-buttons">

            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>
    `;

    /* Delete */

    li.querySelector(".delete-btn")
        .addEventListener("click", function() {

            li.remove();
    });

    /* Edit */

    li.querySelector(".edit-btn")
        .addEventListener("click", function() {

            const currentTask =
                li.querySelector(".task-text");

            const updatedTask =
                prompt(
                    "Edit your task",
                    currentTask.innerText
                );

            if (
                updatedTask !== null &&
                updatedTask.trim() !== ""
            ) {

                currentTask.innerText =
                    updatedTask;

                li.querySelector(".task-time")
                    .innerText =
                    `Edited on ${date} at ${time}`;
            }
    });

    document
        .getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}
