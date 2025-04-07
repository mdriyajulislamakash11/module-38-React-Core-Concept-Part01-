import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Product></Product>
      <Person></Person>
      <PropExplore />
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
      <p className="box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero distinctio, nobis adipisci quia atque aliquam! Dolore error magnam libero placeat cumque consequatur non consectetur. Sed autem doloremque labore est itaque!</p>
    </div>
  );
}

// 38-4 Explore JSX and Props basics

function PropExplore (){

  const developer = {
    margine: "2px",
    padding: "6px",
    border: "2px solid green",
    borderRadius: "12px"
  }

  return(
    <div style={developer}>
      <h2 style={developer}>Lorem, ipsum.</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa autem et, impedit dolorem voluptatibus doloribus magni possimus. Minima placeat cupiditate, ullam commodi et deserunt ducimus pariatur cum nostrum molestias animi.</p>
    </div>
  )
}

export default App;
