import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av"; //npx expo install expo-av

export default function Music() {
  playSound = async (url) => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync({ uri: url }, { shouldPlay: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Play the Alphabet Song👇</Text>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}>
        <View style={{ flex: 0.0 }}>
        </View>
        <TouchableOpacity
          onPress={() => {
            var url = "https://cdn.glitch.global/1e4b9673-7b94-436b-87b3-17eb95c260ee/AtoZ.mp3?v=1670777527928";
            playSound(url);
          }}>
          <Image style={styles.Button} source={require("../Images/Icons/2.png")} />
        </TouchableOpacity>
        <View style={{ flex: 0.0 }}>
          <TouchableOpacity
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Image style={styles.Button1} source={require("../Images/Icons/3.png")} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Text style={styles.Text}>Play the Number Song👇</Text>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.buttonDesign]}
          onPress={() => {
            var url = "https://cdn.glitch.global/cf89aa8d-adad-49fb-81f9-a9ed0f0ae26c/Dream%20English%20Lets%20Count%201%20to%201001.mp3?v=1672325633979";
            playSound(url);
          }}>
          <Image style={styles.Button2} source={require("../Images/Icons/2.png")} />
        </TouchableOpacity>

        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            style={[styles.buttonDesign1, { marginTop: 1 }]}
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Image style={styles.Button3} source={require("../Images/Icons/3.png")} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#915fa0",
    justifyContent: 'center',
    alignItems: 'center',
  },

  Text: {
    marginTop: 30,
    fontSize: 30,
    color: 'white',
    fontWeight: 'Bold',
  },

  Button: {
    marginTop: 30,
    height: 50,
    width: 170,
    backgroundColor: 'white',
  },

  Text1: {
    marginTop: 10,
    fontSize: 30,
  },

  Button1: {
    marginTop: 25,
    height: 50,
    width: 170,
    backgroundColor: 'white',
  },

  Button2: {
    marginTop: 30,
    height: 50,
    width: 170,
    backgroundColor: 'white',
  },

  Button3: {
    marginTop: 30,
    height: 50,
    width: 170,
    backgroundColor: 'white',
  },
});