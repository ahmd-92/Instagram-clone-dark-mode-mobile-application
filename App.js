import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export const ThemeContext = React.createContext(null);
const ThemeProvider = ThemeContext.Provider;

class App extends React.Component {
  state = { theme: "dark" };
  toggleTheme = () => {
    if (this.state.theme === "light") this.setState({ theme: "dark" });
    else this.setState({ theme: "light" });
  };
  render() {
    return (
      <ThemeProvider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        <AppContainer screenProps={{ theme: this.state.theme }} />
      </ThemeProvider>
    );
  }
}
export default App;
