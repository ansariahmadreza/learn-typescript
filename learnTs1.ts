const inputTask = document.querySelector('#inputTask') as HTMLInputElement;
const boxTask = document.querySelector('.boxTask') as HTMLDivElement;

type priority = "low" | "medium" | "high";

interface task {
    readonly id: number | string;
    title: string;
    completed: priority;
};


function notes(note: task): string {
    return `Task #${note.id}: "${note.title}" [${note.completed}]`
}


function createElement() {
    let pElem = document.createElement('p');
    let btnElem = document.createElement('button');
    pElem.append(btnElem)
    return pElem
}

type ApiResponse =
    | { success: true; data: string }
    | { success: false; error: string };


function domTask(): task[] {
    let arryTask = [];
    const objTask: task = {
        id: arryTask.length + 1,
        title: inputTask.value.trim(),
        completed: "medium"
    };
    if (inputTask.value !== "") {
        arryTask.push(objTask)
        console.log(arryTask)
    }
    return arryTask
}



domTask()

function fetchUser(isOk: boolean): ApiResponse {
  if (isOk) {
    return { success: true, data: "User info here" };
  } else {
    return { success: false, error: "Failed to fetch user" };
  }
}



window.addEventListener('click', domTask)
