import React from "react";
import { Analytics, Graph, Navbar, Orders, Sidebar, TopPlatforms } from "./components";

import "./assets/css/main.css";

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <main>
        <Sidebar />

        <div className="main-body">
          <Navbar />

          <div className="body py-3">
            <div className="col-12 mb-4">
              <div className="d-flex gap flex-column flex-lg-row flex-lg-row-reverse">
                <div className="col-12 col-lg-6">
                  <Analytics />
                </div>

                <div className="col-12 col-lg-6">
                  <Graph />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex gap flex-column flex-lg-row">
                <div className="col-12 col-lg-6">
                  <Orders />
                </div>

                <div className="col-12 col-lg-6">
                  <TopPlatforms />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
