import { useEffect } from "react";
import List from "../List/List";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => console.log(res.data))
      .catch();
  }, []);

  return (
    <div>
      <List />
    </div>
  );
}

export default App;
