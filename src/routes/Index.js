import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

//creamos un objeto donde pondremos las rutas
const routes = {
    // '/' esto es la ruta inicial, el home
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

//Vamos a crear el manejador de las rutas "Router"
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
};

export default router;