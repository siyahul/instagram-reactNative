import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: "100%",
    height: "98%",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    backgroundColor: "#000",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  name: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "white",
    marginHorizontal: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
  },
  timeInfo: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "lightgray",
    marginHorizontal: 10,
  },
});

export default styles;
