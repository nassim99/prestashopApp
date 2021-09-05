// import { ThemeContext } from '../helpers/theme-provider';
// import { useContext } from 'react';

// const useTheme = () => {
//   const themeContext = useContext(ThemeContext);
//   return themeContext;
// };

// export default useTheme;
import { useContext } from 'react';
import { ThemeContext } from '../helpers/theme-provider';

export default function useTheme<T extends object = Record<string, any>>() {
  const theme = useContext(ThemeContext as unknown as React.Context<T | undefined>);
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<NativeBaseProvider />`',
    );
  }

  return theme;
}
