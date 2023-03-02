import { 
    createContext, 
    useState,
    useContext
} from 'react';
import { AuthContext } from '../auth';

const SearchContext = createContext<TSearchContext>(null);

const SearchProvider = ({ children }) => {
    const { allPasswords, allCategories } = useContext(AuthContext);
    const [searchText, setSearchText] = useState<string>('');

    const allPasswordsFiltered = allPasswords.filter(p => 
        searchText != '' ? 
        p.login.toLowerCase().indexOf(searchText.toLowerCase()) != -1 || 
        p.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 
        : true
    )

    return (
        <SearchContext.Provider
            value={{
                searchText,
                setSearchText,
                allPasswords: allPasswordsFiltered,
                allCategories
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
export { SearchProvider };