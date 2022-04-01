import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import LoginForm from "./Login";

import RegistrationForm from "./Registration";

export default function LoginTabs() {
  return (
    <>
      <div className="tabs__container">
        <div className="tabs__content">
          <Tabs
            defaultActiveKey="login"
            id="tab__title"
            className="btn--transparent"
          >
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="register" title="Register">
              <RegistrationForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
