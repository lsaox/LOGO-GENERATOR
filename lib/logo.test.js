const Logo=require("./logo")
const { Triangle }= require("./shapes")

test("should render an svg with a width of 300 and a height of 200", ()=>{
    const svgEL='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
    const logo= new Logo()
    expect(logo.render()).toEqual(svgEL)
})

test("should append text and color on svg element", ()=>{
    const svgEL='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>'
    const logo= new Logo()
    logo.setText("ABC", "red")
    expect(logo.render()).toEqual(svgEL)
})

test("text should not exceed 3 characters- show error ", ()=>{
    const svgEL='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABCD</text></svg>'
    const logo= new Logo()
    
    expect(()=> logo.setText("ABCD", "red")).toThrow(new Error("Text cannot be more than 3 characters"))
})

test("should append shape to svg", ()=>{
    const svgEL='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="hotpink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ABC</text></svg>'
    const logo= new Logo()
    logo.setText("ABC", "green")
    const triangle=new Triangle()
    triangle.setColor("hotpink")
    logo.setShape(triangle)
    expect(logo.render()).toEqual(svgEL)
})
