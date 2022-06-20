import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar, ThemeProvider
} from '@ui5/webcomponents-react';
import './App.css';
import { MyApp } from "./MyApp";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    /*     <>
          <ShellBar primaryTitle="UI5 Web Components for React Template" />
          <FlexBox
            style={{ width: '100%', height: '100vh' }}
            direction={FlexBoxDirection.Column}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
          >
            <MyApp />
          </FlexBox>
        </> */
    <HashRouter>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
