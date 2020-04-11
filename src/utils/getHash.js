const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

  export default getHash;





// location: nos la ubicación(URL) del objeto vinculado
// hash: nos devuelve en identificador de URL pero con un # así: #/1/
// slide(): Con esta función quitamos un elemento del objeto vinculado y en este caso sería
// el # del has  quedaría así: /1/
//toLocateLowerCase(): hacemos que el contenido siempre este en minúsculas.
// split(): recibo un objeto tipo string y nos devuelve una array dividio, pasando el '/'
// por los paréntesis  los elimina y nos devuelve solo el id pero así ['', '1' ,''], para
// tomar solo el número o el id los bucamos la posicion array[1], ya que esta de segundo en el array