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
    height: '75%',
    resizeMode: "contain",
    alignSelf: 'center',
    

  },

  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,

  },

  Text: {
    color: 'white',
    marginRight: 10,
    marginLeft: 10,
  },


  containerButton: { top: -90 },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },

  column: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },

  ButtonText: {
    backgroundColor: 'black',
    color: 'black',
    fontSize: 50
  },

  customButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },

  buttonGet: {
    backgroundColor: '#3498db',
  },

  buttonPost: {
    backgroundColor: '#2ecc71',
  },

  buttonPut: {
    backgroundColor: '#e67e22',
  },

  buttonDelete: {
    backgroundColor: '#e74c3c',
  },

  buttonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;