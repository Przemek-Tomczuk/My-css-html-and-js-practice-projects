var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(data) {
    if (this.readyState == 4 && this.status == 200) {
        var todos = JSON.parse(xhttp.responseText)
        for (var i = 1; i < 11; i++) {
            $(document.createElement('div')).attr('id', i).appendTo("#main")
            $("<h2></h2>").html("User " + i).appendTo("#"+i)
            
        }
        for (var todo of todos) {
            if (todo.completed){
                $(document.createElement('p')).html("✔️ " + todo.title).appendTo("#"+todo.userId)
            }else {
                $(document.createElement('p')).html("☐ " + todo.title).appendTo("#"+todo.userId)
            }
        }

        
        
    }
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
