import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const cellWidth = windowWidth * 0.15;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191970',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    width: '90%',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  cell: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    width: cellWidth,
  },
  header: {
    flex: 4,
    backgroundColor: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: cellWidth,
  },
});

export default styles;
