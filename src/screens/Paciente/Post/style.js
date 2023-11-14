import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191970',
  },
  imagem: {
    width: '100%',
    height: 250, 
    resizeMode: "contain",
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '100%',
  },
  inputDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    width: 150,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white',
  },
  sendButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    width: '30%',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  square: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
  },
  ActButton: {
    backgroundColor: 'gray', 
  },
});

export default styles;
