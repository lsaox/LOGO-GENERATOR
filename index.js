const inquirer= require("inquirer")
const { Circle, Triangle, Square }= require("./lib/shapes")
const Logo= require("./lib/logo")
const fs= require("fs")


function init(){
    inquirer.prompt([
        {
            type:"list",
            name:"shapeType",
            message:"Which Shape would you like?",
            choices:["Circle", "Triangle", "Square"]
        },
        {
            type:"input",
            name:"shapeColor",
            message:"Enter a color for your shape:"
        },
        {
            type:"input",
            name:"textLetters",
            message:"Enter text with no more than 3 characters:",
            validate:(textLetters)=> textLetters.length <=3 || "Text cannot be more than 3 characters"
        },
        {
            type:"input",
            name:"textColor",
            message:"Enter a color for your text:"
        },


    ]).then(({shapeType, shapeColor, textLetters, textColor})=>{
        let shape;
        switch (shapeType) {
            case "Circle":
                shape= new Circle()
                break;
            case "Triangle":
                shape= new Triangle()
                break;
            default:
                shape= new Square()
                break;
        }
        shape.setColor(shapeColor)

        const logo= new Logo();
        logo.setText(textLetters, textColor)
        logo.setShape(shape)
        return fs.writeFileSync("./examples/logo.svg", logo.render())
    }).then(()=> console.log("logo generated!"))
    .catch((err)=>{
        console.error(err)
        console.log("Something went wrong!");
    })
}

init()