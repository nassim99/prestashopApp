import ThemeProvider from './src/helpers/theme-provider';
import useTheme from './src/hooks/useTheme';
import React from 'react';
import { SafeAreaView } from 'react-native';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const [isDark, setIsDark] = React.useState(false);

  let theme = {
    isDark: false,
    colors: {
      primary: 'blue',
      secondary: 'green',
    },
  };
  if (isDark) {
    theme = {
      isDark: true,
      colors: {
        primary: 'yellow',
        secondary: 'gray',
      },
    };
  }

  // const theme = isDark ? dark : light;
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView></SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
