import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Clients from "./pages/Clients";
import Invitations from "./pages/Invitations";
import Analytics from "./pages/Analytics";
import Prefixed_Prompts from "./pages/Prefixed_Prompts";
import Invite_Mail_Settings from "./pages/settings/Invite_Mail_Settings";
import Profile_Settings from "./pages/settings/Profile_Settings";
import Users from "./pages/Users";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Users />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/invitations" element={<Invitations />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/prefixed-prompts" element={<Prefixed_Prompts />} />
        <Route
          path="/invite-mail-settings"
          element={<Invite_Mail_Settings />}
        />
        <Route path="/profile-settings" element={<Profile_Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>;
};

export default App;
