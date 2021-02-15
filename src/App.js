import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider } from '@material-ui/core/styles';
import  {defaultTheme} from './style/theme'
import Header from "./components/Header";
import Routes from './routes/index.routes'
import {store,persistor} from './store'
import GloablStyle from './style'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={defaultTheme}>
        
        <GloablStyle />
        <Header />
        <Routes /> 
      </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
