import React from "react";
import { OrdersData } from "../../utils/data";
import { DocumentDownload } from "../../svgs";
import { useStore } from "../../utils/StoreProvider";

const Orders: React.FC<{}> = () => {
  const { theme } = useStore();

  return (
    <div className="row">
      <div className="col-12">
        <div className={`card ${theme}`}>
          <div className="px-1">
            <div className="platform-tittle d-flex align-items-center justify-content-between mb-3 pb-0 pt-1">
              <h2>Last Orders</h2>
              <a href="#">See all</a>
            </div>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {OrdersData.map((order, index) => (
                    <tr key={`order-${index}`}>
                      <td>
                        <div className="table-user d-flex align-items-center">
                          <img src={order.picture} alt={order.name} />
                          <h4>{order.name}</h4>
                        </div>
                      </td>
                      <td style={{ color: "#606060" }}>{order.date}</td>
                      <td>${order.amount.toLocaleString()}</td>
                      <td>
                        <span className={order.status.toLowerCase()}>{order.status}</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center" style={{ gap: "0.6rem" }}>
                          <DocumentDownload />
                          <span>View</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
