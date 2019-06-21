import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch
} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { ThemeContext } from "./App";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilconsIcon from "react-native-vector-icons/EvilIcons";
import FoundationIcon from "react-native-vector-icons/Foundation";
class HomeScreen extends React.Component {
  state = { switchValue: true };

  render() {
    const Consumer = ThemeContext.Consumer;
    return (
      <Consumer>
        {value => (
          <View
            style={{
              flex: 1,
              backgroundColor: value.theme === "dark" ? "#000" : "#fff",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 50,
                elevation: 2,
                backgroundColor: value.theme === "dark" ? "#000" : "#fff"
              }}
            >
              <View style={styles.headerButton}>
                <TouchableOpacity>
                  <FeatherIcon
                    name="camera"
                    color={value.theme === "dark" ? "#fff" : "#000"}
                    style={{ fontSize: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.title}>
                  <Text
                    style={{ color: value.theme === "dark" ? "#fff" : "#000" }}
                  >
                    Instagram
                  </Text>
                </View>
              </View>
              <View style={styles.headerButton}>
                <TouchableOpacity>
                  <FeatherIcon
                    name="tv"
                    color={value.theme === "dark" ? "#fff" : "#000"}
                    style={{ fontSize: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerButton}>
                <TouchableOpacity>
                  <EntypoIcon
                    name="paper-plane"
                    color={value.theme === "dark" ? "#fff" : "#000"}
                    style={{ fontSize: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerButton}>
                <Switch
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  onValueChange={() => {
                    value.toggleTheme();
                    this.setState({
                      switchValue: value.theme === "dark" ? false : true
                    });
                  }}
                  value={this.state.switchValue}
                />
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: value.theme === "dark" ? "#161616" : "#fff"
                }}
              >
                <ScrollView
                  style={{
                    height: 80,
                    backgroundColor:
                      value.theme === "dark" ? "#161616" : "#fff",
                    width: "100%",
                    borderBottomWidth: 0.4,
                    borderBottomColor: "#757575"
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                >
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/real_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Real Madrid
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/ac_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Ac Milan
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/liverpool_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Liverpool
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/barca_logo.png")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Barcelona
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/bayern_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      FC Bayern
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/manutd_logo.png")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      ManUtd
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#000" : "#fff"
                      }}
                      source={require("./img/chelsea_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Chelsea
                    </Text>
                  </View>
                  <View style={styles.storyContainer}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        borderWidth: 0.4,
                        borderColor: value.theme === "dark" ? "#fff" : "#000"
                      }}
                      source={require("./img/uv_logo.jpg")}
                    />
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontSize: 12,
                        paddingTop: 4
                      }}
                    >
                      Juventus
                    </Text>
                  </View>
                </ScrollView>
                <View style={styles.feedsContainer}>
                  <View style={styles.feedTitle}>
                    <Image
                      style={styles.feedTitleImage}
                      source={require("./img/j_profile.jpg")}
                    />

                    <View
                      style={{
                        height: "100%",
                        width: "82%",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          marginLeft: 14
                        }}
                      >
                        James_10
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <EntypoIcon
                        name="dots-three-vertical"
                        color={value.theme === "dark" ? "#fff" : "#000"}
                        style={{ fontSize: 25 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.feedPhoto}>
                    <Image source={require("./img/james.jpg")} />
                  </View>
                  <View style={styles.feedUnderPhotoContainer}>
                    <View
                      style={{
                        width: 90,
                        height: "100%",
                        marginLeft: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="heart"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <EvilconsIcon
                          name="comment"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 32 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <EntypoIcon
                          name="paper-plane"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View
                      style={{
                        width: 40,
                        height: "100%",
                        marginRight: 15,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="bookmark"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      1,100 likes
                    </Text>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      James_10 {"  "}
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          fontSize: 16,
                          fontWeight: "normal"
                        }}
                      >
                        Here we go
                      </Text>
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        height: 40,
                        alignItems: "center",
                        width: "100%"
                      }}
                    >
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 20
                        }}
                        source={require("./img/profile.png")}
                      />
                      <TextInput
                        placeholderTextColor={
                          value.theme === "dark" ? "#64b5f6" : "#616161"
                        }
                        fontSize={12}
                        style={{
                          marginLeft: 2,
                          color: value.theme === "dark" ? "#64b5f6" : "#616161"
                        }}
                        placeholder={"Add a comment..."}
                      />
                    </View>
                    <View
                      style={{
                        height: 10,
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#64b5f6" : "#616161",
                          fontSize: 9
                        }}
                      >
                        25 minutes ago
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.feedsContainer}>
                  <View style={styles.feedTitle}>
                    <Image
                      style={styles.feedTitleImage}
                      source={require("./img/ninja.png")}
                    />

                    <View
                      style={{
                        height: "100%",
                        width: "82%",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          marginLeft: 14
                        }}
                      >
                        Ninja
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <EntypoIcon
                        name="dots-three-vertical"
                        color={value.theme === "dark" ? "#fff" : "#000"}
                        style={{ fontSize: 25 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <Image
                    style={{ height: "60%", width: "100%" }}
                    source={require("./img/fortnite.jpg")}
                  />

                  <View style={styles.feedUnderPhotoContainer}>
                    <View
                      style={{
                        width: 90,
                        height: "100%",
                        marginLeft: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="heart"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <EvilconsIcon
                          name="comment"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 32 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <EntypoIcon
                          name="paper-plane"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View
                      style={{
                        width: 40,
                        height: "100%",
                        marginRight: 15,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="bookmark"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      1,001 likes
                    </Text>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      Ninja {"  "}
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          fontSize: 16,
                          fontWeight: "normal"
                        }}
                      >
                        i love this game
                      </Text>
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        height: 40,
                        alignItems: "center",
                        width: "100%"
                      }}
                    >
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 20
                        }}
                        source={require("./img/profile.png")}
                      />
                      <TextInput
                        placeholderTextColor={
                          value.theme === "dark" ? "#64b5f6" : "#616161"
                        }
                        fontSize={12}
                        style={{
                          marginLeft: 2,
                          color: value.theme === "dark" ? "#64b5f6" : "#616161"
                        }}
                        placeholder={"Add a comment..."}
                      />
                    </View>
                    <View
                      style={{
                        height: 10,
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#64b5f6" : "#616161",
                          fontSize: 9
                        }}
                      >
                        31 minutes ago
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.feedsContainer}>
                  <View style={styles.feedTitle}>
                    <Image
                      style={styles.feedTitleImage}
                      source={require("./img/girl.png")}
                    />

                    <View
                      style={{
                        height: "100%",
                        width: "82%",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          marginLeft: 14
                        }}
                      >
                        1_Girl
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <EntypoIcon
                        name="dots-three-vertical"
                        color={value.theme === "dark" ? "#fff" : "#000"}
                        style={{ fontSize: 25 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <Image
                    style={{ height: "60%", width: "100%" }}
                    source={require("./img/ccoupe.png")}
                  />

                  <View style={styles.feedUnderPhotoContainer}>
                    <View
                      style={{
                        width: 90,
                        height: "100%",
                        marginLeft: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="heart"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <EvilconsIcon
                          name="comment"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 32 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <EntypoIcon
                          name="paper-plane"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View
                      style={{
                        width: 40,
                        height: "100%",
                        marginRight: 15,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <TouchableOpacity>
                        <FeatherIcon
                          name="bookmark"
                          color={value.theme === "dark" ? "#fff" : "#000"}
                          style={{ fontSize: 25 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      2,242 likes
                    </Text>
                    <Text
                      style={{
                        color: value.theme === "dark" ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      1_Girl {"  "}
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#fff" : "#000",
                          fontSize: 16,
                          fontWeight: "normal"
                        }}
                      >
                        C coupe 2018 AMG
                      </Text>
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        height: 40,
                        alignItems: "center",
                        width: "100%"
                      }}
                    >
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 20
                        }}
                        source={require("./img/profile.png")}
                      />
                      <TextInput
                        placeholderTextColor={
                          value.theme === "dark" ? "#64b5f6" : "#616161"
                        }
                        fontSize={12}
                        style={{
                          marginLeft: 2,
                          color: value.theme === "dark" ? "#64b5f6" : "#616161"
                        }}
                        placeholder={"Add a comment..."}
                      />
                    </View>
                    <View
                      style={{
                        height: 10,
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: value.theme === "dark" ? "#64b5f6" : "#616161",
                          fontSize: 9
                        }}
                      >
                        1 hour ago
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </Consumer>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    const Consumer = ThemeContext.Consumer;
    return (
      <Consumer>
        {value => (
          <View
            style={{
              flex: 1,
              backgroundColor: value.theme === "dark" ? "#161616" : "#fff",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: value.theme === "dark" ? "#fff" : "#000",
                fontSize: 40
              }}
            >
              Search Screen
            </Text>
          </View>
        )}
      </Consumer>
    );
  }
}

class AddPhotoScreen extends React.Component {
  render() {
    const Consumer = ThemeContext.Consumer;
    return (
      <Consumer>
        {value => (
          <View
            style={{
              flex: 1,
              backgroundColor: value.theme === "dark" ? "#161616" : "#fff",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: value.theme === "dark" ? "#fff" : "#000",
                fontSize: 40
              }}
            >
              Add Photo Screen
            </Text>
          </View>
        )}
      </Consumer>
    );
  }
}
class LoveScreen extends React.Component {
  render() {
    const Consumer = ThemeContext.Consumer;
    return (
      <Consumer>
        {value => (
          <View
            style={{
              flex: 1,
              backgroundColor: value.theme === "dark" ? "#161616" : "#fff",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: value.theme === "dark" ? "#fff" : "#000",
                fontSize: 40
              }}
            >
              Love Screen
            </Text>
          </View>
        )}
      </Consumer>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    const Consumer = ThemeContext.Consumer;
    return (
      <Consumer>
        {value => (
          <View
            style={{
              flex: 1,
              backgroundColor: value.theme === "dark" ? "#161616" : "#fff",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: value.theme === "dark" ? "#fff" : "#000",
                fontSize: 40
              }}
            >
              Profile Screen
            </Text>
          </View>
        )}
      </Consumer>
    );
  }
}

//Bottom Navigator:::::::::::::::::::::::::::::
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AddPhotoStack = createStackNavigator({
  AddPhoto: {
    screen: AddPhotoScreen,
    navigationOptions: {
      header: null
    }
  }
});

const LoveStack = createStackNavigator({
  Love: {
    screen: LoveScreen,
    navigationOptions: {
      header: null
    }
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  }
});

const TabBarComponent = props => {
  return <BottomTabBar {...props} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Search: SearchStack,
      AddPhoto: AddPhotoStack,
      Love: LoveStack,
      Profile: ProfileStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === "Home") {
              return (
                <FoundationIcon name={"home"} size={25} color={tintColor} />
              );
            } else if (routeName === "Search") {
              return (
                <EvilconsIcon name={"search"} size={32} color={tintColor} />
              );
            } else if (routeName === "AddPhoto") {
              return (
                <FeatherIcon name={"plus-square"} size={25} color={tintColor} />
              );
            } else if (routeName === "Love") {
              return (
                <EvilconsIcon name={"heart"} size={32} color={tintColor} />
              );
            } else if (routeName === "Profile") {
              return (
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 15
                  }}
                  source={require("./img/profile.png")}
                />
              );
            }
          }
        };
      },
      tabBarOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        showLabel: false
      },
      TabBarComponent: props => (
        <TabBarComponent
          {...props}
          style={{
            backgroundColor:
              props.screenProps.theme === "dark" ? "#000" : "#fff"
          }}
        />
      )
    }
  )
);

//----------------------------------SSTYLEEE -------------------------------
const styles = StyleSheet.create({
  storyContainer: {
    width: 80,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: "#000"
  },
  feedsContainer: {
    width: "100%",
    height: 630
  },
  feedTitle: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  feedTitleImage: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 15
  },
  feedPhoto: {
    height: "60%",
    width: "100%"
  },
  feedUnderPhotoContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  headerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50
  },

  title: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginLeft: 5
  }
});
