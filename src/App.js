import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router";
import Customer from "./components/Customer";
import Company from "./components/Company";

const members = [
  {
    id: "1",
    name: "Pedro",
    type: "pf",
  },
  {
    id: "2",
    name: "André",
    type: "pf",
  },
  {
    id: "3",
    name: "Cantina da esquina",
    type: "pj",
  },
  {
    id: "4",
    name: "Lanches Ogro",
    type: "pj",
  },
  {
    id: "5",
    name: "Antunes",
    type: "pj",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
          <Route exact path="/">
            {members.map((item) => (
              <Home
                item={item}
                key={item.id}
                to={
                  item.type === "pj"
                    ? `/company/${item.id}`
                    : `/customer/${item.id}`
                }
                members={members}
              />
            ))}
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
