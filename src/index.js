import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <ToastContainer />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
