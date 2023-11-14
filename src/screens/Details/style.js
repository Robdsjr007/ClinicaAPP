import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#141A29',
        alignItems: 'center',
        height: '100vh'
      },

    texto: {
        color: 'white'
    },

    desc: {
        color: 'white',
        fontSize: 14
    },

    imagem:{
        width: '100%',
        height: 170,
        borderRadius: 8
    },

    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      }


});

export default styles;