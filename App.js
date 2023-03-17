function Test()
{
    let myObject = {name:"Madras"};
    let newObject= myObject;
    myObject.name="Chennai"
    let myArray=["a","e","i","o","u"]
    let vowelArray=myArray;
    myArray.push("u");
    console.log(myArray)
    const ECE=()=>{alert("Check the console output")}
    return<div><button onClick={ECE}>Reference data types use same memory</button></div>
}

ReactDOM.render(<Test/>,document.getElementById('mydiv'))