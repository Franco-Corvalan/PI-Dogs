//import '../styles/Pagination.css'; // Importa estilos CSS para el componente

function Pagination({ currentPage, totalPages, onPageChange }) {
    // Declara el componente de paginación como una función que toma tres propiedades como argumentos

    const pageNumbers = []; // Declara un array para almacenar los números de página

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i); // Llena el array con números de página del 1 al totalPages
    }

    return (
        <nav>
            <ul className='pagination'> {/* Crea una lista desordenada con la clase 'pagination' */}
                {currentPage > 1 && (
                    <li className='page-item'>
                        <button onClick={() => onPageChange(currentPage - 1)}> &laquo; </button>
                        {/* Renderiza un botón 'Anterior' solo si la página actual es mayor que 1 */}
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        {/* Mapea y renderiza una lista de números de página */}
                        <button onClick={() => onPageChange(number)}>{number}</button>
                        {/* Cada número de página es un botón y llama a la función onPageChange cuando se hace clic */}
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li className="page-item">
                        <button onClick={() => onPageChange(currentPage + 1)}>&raquo;</button>
                        {/* Renderiza un botón 'Siguiente' solo si la página actual es menor que totalPages */}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Pagination; // Exporta el componente Pagination
