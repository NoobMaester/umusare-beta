import {createContext, useContext, useEffect, useState, ReactNode} from 'react';
import {auth} from '../services/firebase';
import {onAuthStateChanged, User} from 'firebase/auth';
import Spinner from '../components/Spinner'

interface AuthContextType {
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

interface AuthProviderProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export const AuthProvider = ({children, fallback = null}: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return fallback || <Spinner/>;

    return (
        <AuthContext.Provider value={{user, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);