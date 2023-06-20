import logo from "./logo.svg";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserList from "./pages/UserList/UserList";
import ItemList from "./pages/Itemlist/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        {/* page */}
        <Dashboard />
        {/* <UserList /> */}
        {/* <ItemList /> */}
      </main>
    </div>
  );
}

export default App;
