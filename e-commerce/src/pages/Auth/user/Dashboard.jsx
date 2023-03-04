import React from "react";
import Layout from "../../../components/Layout/layout/Layout";
import UserMenu from "../../../components/Layout/usermenu/Usermenu";
import { useAuth } from "../../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
