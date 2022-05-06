import React from "react";
import BdmTabCart from "./Components/CartComponents/BdmTabCart";
import BdmProductTable from "./Components/BdmProductTable";

/******************  sidebar - https://www.npmjs.com/package/react-sidebar  *********************/
import Sidebar from "react-sidebar";
import BdmCartProvider from "./store/BdmCartProvider";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <BdmCartProvider>
        <Sidebar
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          sidebar={
          <BdmTabCart />
          }
        >

          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
        <div>
          <BdmProductTable />
        </div>
        </BdmCartProvider>
    );
  }
}

export default App;

/******************  sidebar - end   *********************/

// function App() {
//   return (
//     <Fragment>
//       <h2>Hello</h2>
//       <TabCart/>
//       <ProductTable/>
//     </Fragment>
//   );
// }

// export default App;
