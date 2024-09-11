<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        .todo-item {
            margin-bottom: 10px;
        }
    </style>
    <script>
        let globalId = 1;

        function markAsDone(id) {
            const todo = document.getElementById(id);
            if (todo) {
                todo.children[2].innerHTML = "Done";
            }
        }

        function createChild(title, description, id) {
            const child = document.createElement("div");
            child.className = "todo-item";
            child.setAttribute("id", id);

            const firstGrandchild = document.createElement("div");
            firstGrandchild.innerHTML = title;

            const secondGrandchild = document.createElement("div");
            secondGrandchild.innerHTML = description;

            const thirdGrandchild = document.createElement("button");
            thirdGrandchild.innerHTML = "Mark as Done";
            thirdGrandchild.onclick = function() {
                markAsDone(id);
            };

            child.appendChild(firstGrandchild);
            child.appendChild(secondGrandchild);
            child.appendChild(thirdGrandchild);

            return child;
        }

        function addTodo() {
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const parent = document.getElementById("todos");
            if (title && description) {
                parent.appendChild(createChild(title, description, globalId++));
               
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
            } else {
                alert("Please enter both title and description.");
            }
        }
    </script>
</head>
<body>
    <input type="text" id="title" placeholder="Title"><br><br>
    <input type="text" id="description" placeholder="Description"><br><br>
    <button onclick="addTodo()">Add Todo</button><br><br>
    <div id="todos"></div>
</body>
</html>
