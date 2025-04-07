
import './App.css'

function App() {


  return (
    <>
      
       
      <h1>Vite + React</h1>
      <Product></Product>
    </>
  )
}

function Product (){
  return(
    <div className='box'>
      <h3 className='box'>Hello buyer</h3>
      <p className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab eius a vel ipsam, natus doloribus mollitia magni. Blanditiis ab, consequatur totam natus fugit libero eligendi eveniet obcaecati modi asperiores.</p>
    </div>
  )
}

export default App
