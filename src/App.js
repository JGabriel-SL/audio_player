import AudioPlayer from './components/AudioPlayer';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.container}>
          <img src="/escravidao.jpg" alt="escravidao"  style={styles.image}/>
          <h2 style={styles.title}>Projeto 48: A perpecussão da reforma Dantas no Brasil</h2>
          <AudioPlayer />
          <div style={styles.containerDetails}>
              <h3>Equipe: </h3>
              <div style={styles.containerMembers}>
                <span>Ana Luiza</span>
                <span>Ana Patrícia</span>
                <span>Mayra Lavinne</span>
                <span>Jefferson</span>
                <span>Geovanna Esther</span>
                <span>Paulo Adryan</span>
                <span>Rebeca Souza</span>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f7d0",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    color: "#333",
    textAlign: "center"
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    margin: "20px 0",
    border: "1px solid #222"
  },
  containerDetails: {
    maxWidth: "600px",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
  },
  containerMembers: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#666",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0"
  }
};

export default App;
