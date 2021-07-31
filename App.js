import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: "",
      ans: "",
    };
  }
  calculate = () => {
    if(this.state.hours=="")
    {
     Alert.alert("Input cannot be empty.Please enter an hour")
    }
    else{
      var a = 8760 / this.state.hours;
      var b = Math.round(a);
      this.setState({
        ans: b,
      });
    }
   
    console.log(b);
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./meteor_bg1.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <Header
            centerComponent={{
              text: "Rotation vs Revolution",
              style: { fontSize: 22, fontWeight: "bold" },
            }}
          ></Header>
          <Text style={{fontSize:18,fontWeight:"bold",marginTop:130,color:"#00FFEF",marginLeft:20}}>
            This app will help you to enter the nuber of hours you want in a day
            and will show you how many days would be there in a year with the
            number of hours entered
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder={"Enter Hours"}
            onChangeText={(input) => {
              this.setState({
                hours: input,
              });
            }}
            keyboardType={"number-pad"}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.calculate();
            }}
          >
            <Text>Calculate</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Number of days in a year as per the number of hours entered:{this.state.ans}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    width: "80%",
    height: 40,
    marginTop: 150,
    borderWidth: 5,
    marginLeft: 50,
    textAlign: "center",
    backgroundColor: "#63C5DA",
  },
  button: {
    marginLeft: 150,
    marginTop: 50,
    borderRadius: 15,
    borderWidth: 3,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0492C2",
    borderColor: "white",
    height: 45,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 50,
    marginTop: 50,
    color: "#82EEFD",
  },
});
