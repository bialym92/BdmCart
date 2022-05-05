import React, { Fragment } from "react";
import TabCart from "./Components/CartComponents/TabCart";
import ProductTable from "./Components/ProductTable";

/******************  sidebar - https://www.npmjs.com/package/react-sidebar  *********************/
import Sidebar from "react-sidebar";



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
      <Fragment>
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          sidebar={
          <TabCart />
          }
        >

          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
        <div>
          <TabCart />
          <ProductTable />
        </div>
      </Fragment>
    );
  }
}

export default App;

/******************  sidebar   *********************/

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
