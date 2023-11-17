import { AppRegistry } from 'react-native';
import App from './App'; // O nome do arquivo principal do seu aplicativo
import { name as appName } from './app.json';

// Define o nome do componente principal
AppRegistry.registerComponent(appName, () => App);

// Registra o aplicativo para a web
if (window.document) {
    const rootTag = document.getElementById('root') || document.getElementById('app');
    AppRegistry.runApplication(appName, { rootTag });
}
