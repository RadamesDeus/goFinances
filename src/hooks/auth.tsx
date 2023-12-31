import React, {ReactNode, createContext, useContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface IAuthContextData {
  username: string;
  log(ard: string): void;
  signGoogle(): void;
}

const AuthContext = createContext({} as IAuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

const testelog = (arg: string) => {
  console.log(' RADA CoNTEXT', arg);
};

function AuthProvider({children}: AuthProviderProps) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1066204659891-g2jothbc02dlf7ti015jgoh0p1bpn17n.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    });
  }, []);

  const handlesignGoogle = async () => {
    try {
      console.log('handlesignGoogle start');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error) {
      console.log('handlesignGoogle erro', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username: 'Radames Deus',
        log: testelog,
        signGoogle: handlesignGoogle,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  return ctx;
}

export {AuthProvider, useAuth};
