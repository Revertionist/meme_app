import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react";
import { Card, Container, Navbar } from "react-bootstrap";
import DropDown from "./Components/FrameDes/dropdown";
import NavBar from "./Components/NavBar/navbar";
import { supabase } from "./lib/supabase";


function App() {
  const [memes, setMemes] = useState([])
  useEffect(
    () => {
      supabase.from('memes').select('*')
        .then(({ error, data }) => {
          if (error) {
            console.log(error);
          }
          else {
            setMemes(data)
          }
        })
    }, []
  )
  return (
    <div>
      <NavBar />
      <br />
      <Container>
        {
          memes.map((obj, idx) => {
            return (
              <div key={idx}>
                <Card className="bg-dark text-light">
                  <Card.Header>
                    <div style={{textAlign: "right"}}>
                      <DropDown />
                    </div>
                    {obj.title}
                  </Card.Header>
                  <Card.Body>
                    <img style={{ width: "100%" }} src={obj.img_url}></img>
                  </Card.Body>
                </Card>
                <br />
              </div>
            )
          })
        }
      </Container>
    </div>
  );
}

export default App;
