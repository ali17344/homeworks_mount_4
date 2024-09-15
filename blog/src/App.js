import { useState } from "react";
import { CreateBlog } from "./component";
function App() {
  const [text,setText] = useState()
  const add = (text) => {
    setText(text)
  }
  return (
    <div className="App">
      <CreateBlog add={add} />
    </div>
  );
}

export default App;
