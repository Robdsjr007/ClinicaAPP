import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191970',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 100
  },
  buttonText: {
    color: 'white',
    fontWeight: 'Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
