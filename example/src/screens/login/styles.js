import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
  },
  greeting: {
    color: '#40739e',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caption: {
    color: '#40739e',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#40739e',
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default styles;
