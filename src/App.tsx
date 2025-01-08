import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
// import Clients from "./pages/ClientPages/Clients";
// import Invitations from "./pages/Invitations";
// import Analytics from "./pages/Analytics/Analytics";
// import Prefixed_Prompts from "./pages/Prefixed/Prefixed_Prompts";
// import Invite_Mail_Settings from "./pages/settings/Invite_Mail_Settings";
// import Profile_Settings from "./pages/settings/Profile_Settings";
// import Users from "./pages/UserPages/Users";
// import UserDetails from "./pages/UserPages/UserDetails";
// import ClientDetails from "./pages/ClientPages/ClientDetailsPage";
import { lazy } from "react";

const Clients = lazy(() => import("./pages/ClientPages/Clients"));
const Invitations = lazy(() => import("./pages/Invitations"));
const Analytics = lazy(() => import("./pages/Analytics/Analytics"));
const Prefixed_Prompts = lazy(
  () => import("./pages/Prefixed/Prefixed_Prompts")
);
const Invite_Mail_Settings = lazy(
  () => import("./pages/settings/Invite_Mail_Settings")
);
const Profile_Settings = lazy(
  () => import("./pages/settings/Profile_Settings")
);
const Users = lazy(() => import("./pages/UserPages/Users"));
const UserDetails = lazy(() => import("./pages/UserPages/UserDetails"));
const ClientDetails = lazy(
  () => import("./pages/ClientPages/ClientDetailsPage")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Users />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/clients" element={<Clients />} />
          <Route
            path="/clients/client-details/:id"
            element={<ClientDetails />}
          />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/prefixed prompts" element={<Prefixed_Prompts />} />
          <Route
            path="/invite mail settings"
            element={<Invite_Mail_Settings />}
          />
          <Route path="/profile settings" element={<Profile_Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
