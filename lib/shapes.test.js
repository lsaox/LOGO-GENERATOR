const { Circle, Triangle, Square }= require("./shapes")

test("should render black circle svg", ()=>{
    const svgEl='<circle cx="150" cy="100" r="80" fill="black"/>'
    const circle= new Circle()
    circle.setColor("black")

    expect(circle.render()).toEqual(svgEl)
})

test("should render black triangle svg", ()=>{
    const svgEl='<polygon points="150, 18 244, 182 56, 182" fill="black" />'
    const triangle= new Triangle()
    triangle.setColor("black")

    expect(triangle.render()).toEqual(svgEl)
})

test("should render black square svg", ()=>{
    const svgEl='<rect x="90" y="40" width="120" height="120" fill="black"/>'
    const square= new Square()
    square.setColor("black")

    expect(square.render()).toEqual(svgEl)
})