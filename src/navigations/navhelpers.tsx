import {
  ParamListBase,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<ParamListBase>();

const navigate = (name: string, params?: Record<string, any>) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
};

const resetnavigation = (
  resetRouteName: string,
  params?: Record<string, any>,
) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: resetRouteName, params}],
    });
  } else {
    console.log('Navigator is not ready yet.');
  }
};

export {navigate, getCurrentRoute, resetnavigation, navigationRef};
