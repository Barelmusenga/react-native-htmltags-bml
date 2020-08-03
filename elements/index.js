import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from "react-native";

export const Well = (props) => {
  return (
    <View style={{ ...styles.well, ...props.style }}>{props.children}</View>
  );
};

export const Card = ({ children, imageUrl, onPress, imageHeight, style }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableComponent onPress={onPress} activeOpacity={0.8}>
        <View>
          <Image
            source={{ uri: imageUrl }}
            style={{ ...styles.imageStyle, height: imageHeight }}
          />
          <Well style={{ ...styles.cardWell, ...style }}>{children}</Well>
        </View>
      </TouchableComponent>
    </View>
  );
};

export const CardWithRowBottom = ({
  title,
  titleBottom,
  imageUrl,
  onPress,
  children,
  style,
}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.card, ...style }}>
      <TouchableComponent onPress={onPress} activeOpacity={0.8}>
        <View>
          <View style={{ ...styles.cardRow, ...styles.cardHeader }}>
            {titleBottom ? (
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.bgImageButton}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.cardTitle} numberOfLines={1}>
                    {title}
                  </Text>
                </View>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.cardTitle} numberOfLines={1}>
                    {title}
                  </Text>
                </View>
              </ImageBackground>
            )}
          </View>
          <View style={{ ...styles.cardDetail, ...styles.cardRow, ...style }}>
            {children}
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export const Button = ({ onPress, style, title, icon, alignIconRight }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={onPress}>
        <View style={{ ...styles.button, ...style }}>
          {alignIconRight ? (
            <View style={{ ...styles.buttonChildren, ...style }}>
              <Text style={{ ...styles.buttonText, ...style }}>{title}</Text>
              {icon ? (
                <Text style={styles.buttonIcon}>{icon}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          ) : (
            <View style={{ ...styles.buttonChildren, ...style }}>
              {icon ? (
                <Text style={styles.buttonIcon}>{icon}</Text>
              ) : (
                <Text></Text>
              )}
              <Text style={{ ...styles.buttonText, ...style }}>{title} </Text>
            </View>
          )}
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageStyle: {
    height: 150,
    backgroundColor: "#f0f0f0",
  },
  cardWell: {
    borderRadius: 0,
  },
  card: {
    height: 250,
    width: "100%",
    backgroundColor: "#b4b4b4",
    marginVertical: 10,
    overflow: "hidden",
  },
  cardRow: {
    flexDirection: "row",
  },
  cardHeader: {
    height: "80%",
  },
  cardDetail: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  bgImageButton: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  well: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#0000ff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonChildren: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#ffff",
  },

  buttonIcon: {
    paddingHorizontal: 10,
  },
});
