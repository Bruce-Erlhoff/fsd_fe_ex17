
// create the root where the components will be rendered (reactdiv)
let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

// Functional component
let MyFunComponent = (props) => {
    return (
       <fragment>
            <h1>Exercise 17</h1>
            <br></br>
            <h1 className="text-primary">Hello {props.name}, this is Functional component</h1>
            <ul>
                <li>My name is {props.name}</li>
                <li>I am a {props.breed}</li>
                <li>I am {props.age} years old</li>
                <li>My hobbies are: {props.hobbies}</li>
            </ul>

       </fragment>
    )
}

// Class component with props
class MyClassComponent extends React.Component {

    render (props) {
        return (<fragment>
                    <h1 className="text-danger"> Hey {this.props.name}, this is a Class component</h1>
                    <ul>
                    <li>My name is {this.props.name}</li>
                    <li>I am a {this.props.breed}</li>
                    <li>I am {this.props.age} years old</li>
                    <li>My hobbies are: {this.props.hobbies}</li>
                    </ul>
                </fragment>);
    }

}

// since you can only render once, render both components in an array
root.render ([<MyFunComponent 
                name = "Shanti" breed="Husky" age="5" hobbies = {["walking ", "digging ", "belly-rubs"]}/>,
            <MyClassComponent name = "Bruce" breed="human" age="many" hobbies = {["hiking ", "golf ", "coding "]}/>]);



let calculatedData="56275";

root.render(<MyEmployeeComp empid="123" wageph="80" contactnumber="123" age={35} uscitizen={false} dept={['ac','hr']} hra={calculatedData}/>); 
