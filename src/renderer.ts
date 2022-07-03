import ReactDOM from 'react-dom/client';
import App from "./render/App";
import "./render/index.css";

function render() {

  const root = ReactDOM.createRoot(

    document.getElementById('root') as HTMLElement

  );
  root.render(
    App()
  );

}

render();
