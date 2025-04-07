import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Product></Product>
      <Person></Person>
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

function Person() {
  const age = 22;
  const name = "akash";
  const student = {clg: "Dhabi", school: "sat Collage", madrasha:"aliya"};

  return <div className="box">
    <p>my name is: {name}, my age: {age}, im a sutdent: {student.clg}</p>
  </div>;
}

export default App;
