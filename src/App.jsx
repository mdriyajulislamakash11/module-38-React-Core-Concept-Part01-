import "./App.css";
import Todo from "./components/toDo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Explore React" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      {/* <Device name="leptop" price="28530"></Device>
      <Students name="akash" age="23" proff="developer" address="dhaka"></Students>
      <Device name="mobile" price="17000"></Device>
      <Students></Students>
      <Device name="watch" price="1000"></Device>
      <Product></Product>
      <Person></Person>
      <PropExplore /> */}
    </>
  );
}

function Product() {
  return (
    <div className="box">
      <h3 className="box">Hello buyer</h3>
      <p className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab eius a
        vel ipsam, natus doloribus mollitia magni. Blanditiis ab, consequatur
        totam natus fugit libero eligendi eveniet obcaecati modi asperiores.
      </p>
    </div>
  );
}

// 38-3 JSX, its rules and add dynamic content to JSX in your first component

function Person() {
  const age = 22;
  const name = "akash";
  const student = { clg: "Dhabi", school: "sat Collage", madrasha: "aliya" };

  return (
    <div className="box">
      <p className="box">
        my name is: {name}, my age: {age}, im a sutdent: {student.clg}
      </p>
      <p className="box">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
        distinctio, nobis adipisci quia atque aliquam! Dolore error magnam
        libero placeat cumque consequatur non consectetur. Sed autem doloremque
        labore est itaque!
      </p>
    </div>
  );
}

// 38-4 Explore JSX and Props basics

// JSX
function PropExplore() {
  const developer = {
    margine: "2px",
    padding: "6px",
    border: "2px solid green",
    borderRadius: "12px",
  };

  return (
    <div style={developer}>
      <h2 style={developer}>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa autem
        et, impedit dolorem voluptatibus doloribus magni possimus. Minima
        placeat cupiditate, ullam commodi et deserunt ducimus pariatur cum
        nostrum molestias animi.
      </p>
    </div>
  );
}

// props
function Device(props) {
  console.log(props);
  return (
    <div className="box">
      <p>
        This Device is: {props.name}, price: {props.price}
      </p>
    </div>
  );
}

// props
function Students(props) {
  console.log(props);
  const { name, age, proff, address } = props;

  return (
    <div className="box">
      <h3>This is Students</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>proffesion: {proff}</p>
      <p>address: {address}</p>
    </div>
  );
}

// 38-6 Read only props Two way of conditional rendering

export default App;
