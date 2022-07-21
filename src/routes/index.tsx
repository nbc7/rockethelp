import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Loading } from '../components/Loading';

export function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((res) => {
      setUser(res);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  if (isLoading) return <Loading />;

  return <NavigationContainer>{user ? <AppRoutes /> : <SignIn />}</NavigationContainer>;
}
