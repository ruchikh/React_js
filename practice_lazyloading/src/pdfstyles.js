import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  viewer: {
    margin: 10,
    padding: 50,
  },

  page: {
    width: 100,
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 50,
    marginBottom: 10
  },
  story:{
    fontSize: 20,
    margin: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    fontSize: 50
  }
});

export default styles;