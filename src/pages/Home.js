import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
//usamos el metodo .map de para iterar cada persona con el template y así se crea un array igual 
//que el template pero para cada personaje
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}"/>
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}

        </div>
    `;
    //usamos .join('') al final porque nos devuelve un array y necesitamos que todo este junto
    //porque los array usamo comillas para separa los elementos para el render join hace eso
    return view
};

export default Home;