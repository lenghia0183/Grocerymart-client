import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as routes from './routes/routes';
import { Fragment } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {routes.publicRoutes.map((route, index) => {
              const Page = route.element;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
