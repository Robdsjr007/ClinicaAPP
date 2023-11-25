import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
    marginLeft: 10,
  },
  input: {
    color: 'white',
    marginBottom:10,
    padding:5,
    borderRadius:10,
    borderColor: 'white',
    borderWidth: 2
  },
  sendButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    width: '40%',
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
