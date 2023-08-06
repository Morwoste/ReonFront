import './Search.css';

const Search = ({setSearch}) => (
        <div className="search_wrapper">
            <input 
                className="search" 
                type="text" 
                placeholder="Поиск..." 
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
)

export default Search