let value: string = 'ahmad'

type n = number

function sum(a: n, b: n): number {
    return a + b
}
//console.log(sum(2, 2))



interface infoStudent { name: string; age: number; isStudent: boolean; };
let student: infoStudent = { name: 'ahmadreza', age: 23, isStudent: true }

function infoStudn(student: infoStudent): string {
    return student.name + " " + student.age + " " + student.isStudent
}
//console.log(infoStudn(student))

const value2: string | number = 12

function getvalue(value2: string | number) {
    if (typeof value2 === 'string') {
        return value2.toUpperCase(); // چون می‌دونیم string هست
    } else {
        return value2 + 10; // چون می‌دونیم number هست
    }
}

console.log(getvalue(value2))

let tup: [string, number, boolean] = ["akbar", 23, true]


enum Status { Start, pause, stop }


let startAli = {
    tex: 'شماره ',
    start: Status.Start,
    pause: Status.pause,
    stop: Status.stop
}
//console.log(startAli)
function formatUserInfo(name: string, age: number, isAdmin: boolean): string {
    return `${name} is ${age} years old - Admin:${isAdmin}`

}

//console.log(formatUserInfo("ali", 23, true))

type ApiResponseStatus = "error" | "success" | "loading"
function handleResponse(error: ApiResponseStatus, success: ApiResponseStatus, loading: ApiResponseStatus): void {
    if (success === "success") {
        console.log("Operation succeeded!")
    } else if (error === "error") {
        console.log("Something went wrong.")
    } else if (loading === "loading") {
        console.log("Please wait...")
    }
}
handleResponse("error", "success", "loading")


function processInput(param: string | number | boolean) {

    if (typeof param === "string") {
        console.log(param.toLocaleUpperCase())
    } else if (typeof param === "number") {
        console.log(param * 2)
    } else if (typeof param === "boolean") {
        console.log(!param)
    }

}

processInput("ahmad")


// function calculateArea(shape: "circle" | "square",value:number):number{

//     return  value ** 2 * 3.14
//     /// تایپ خود تعریف شده است مشکل نوع تایپ داشتم
// }

// calculateArea(4,10)


function registerUser(userName: string, email?: string, role?: string): object {

    if (typeof email === "undefined") {
        console.log("No email provided")
    }
    if (typeof role === "undefined") {
        role = "user"
    }

    return { userName, email, role }
}

//console.log(registerUser('ahmad'))


interface Product { id: string, title: string, price: number, discount?: number }

const products: Product[] = [
    { id: "p1", title: "Book", price: 100, discount: 10 },
    { id: "p2", title: "Pen", price: 20 },
    { id: "p3", title: "Notebook", price: 50, discount: 5 }
];




