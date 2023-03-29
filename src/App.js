import Matrix from "./components/Matrix";
import './components/matrix.css'
function App() {
  return (
      <>
        <Matrix/>
          <div className="name">
              <h1 style={{ zIndex: 1, color:"white", display: "flex",alignItems: "center"}}> Lungu Daniel</h1>
          </div> <div className="name" style={{marginTop: "40px"}}>
              <h2 style={{ zIndex: 1, color:"white", display: "flex",alignItems: "center"}}>UNDER MAINTENANCE</h2>
          </div>
      </>
  );
}

export default App;
