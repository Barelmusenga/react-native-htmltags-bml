import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
  ImageBackground,
} from "react-native";

import Colors from "./constants/colors";

export const H1 = ({ alignCenter, alignRight, ...props }) => {
  return (
    <View>
      {alignCenter ? (
        <Text style={{ ...styles.textCenter, ...styles.h1, ...props.style }}>
          {props.children}
        </Text>
      ) : (
        <View>
          {alignRight ? (
            <Text style={{ ...styles.textRight, ...styles.h1, ...props.style }}>
              {props.children}
            </Text>
          ) : (
            <Text style={{ ...styles.h1, ...props.style }}>
              {props.children}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export const H2 = ({ alignCenter, alignRight, ...props }) => {
  return (
    <View>
      {alignCenter ? (
        <Text style={{ ...styles.textCenter, ...styles.h2, ...props.style }}>
          {props.children}
        </Text>
      ) : (
        <View>
          {alignRight ? (
            <Text style={{ ...styles.textRight, ...styles.h2, ...props.style }}>
              {props.children}
            </Text>
          ) : (
            <Text style={{ ...styles.h2, ...props.style }}>
              {props.children}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export const H3 = ({ alignCenter, alignRight, ...props }) => {
  return (
    <View>
      {alignCenter ? (
        <Text style={{ ...styles.textCenter, ...styles.h3, ...props.style }}>
          {props.children}
        </Text>
      ) : (
        <View>
          {alignRight ? (
            <Text style={{ ...styles.textRight, ...styles.h3, ...props.style }}>
              {props.children}
            </Text>
          ) : (
            <Text style={{ ...styles.h3, ...props.style }}>
              {props.children}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export const Title = ({ alignCenter, alignRight, ...props }) => {
  return (
    <View>
      {alignCenter ? (
        <Text style={{ ...styles.textCenter, ...styles.title, ...props.style }}>
          {props.children}
        </Text>
      ) : (
        <Text style={{ ...styles.title, ...props.style }}>
          {props.children}
        </Text>
      )}
    </View>
  );
};

export const BodyText = ({ alignCenter, alignRight, justify, ...props }) => {
  return (
    <View>
      {alignCenter ? (
        <Text style={{ ...styles.textCenter, ...styles.text, ...props.style }}>
          {props.children}
        </Text>
      ) : (
        <View>
          {alignRight ? (
            <Text
              style={{ ...styles.textRight, ...styles.text, ...props.style }}
            >
              {props.children}
            </Text>
          ) : (
            <View>
              {justify ? (
                <Text
                  style={{
                    ...styles.textJustify,
                    ...styles.text,
                    ...props.style,
                  }}
                >
                  {props.children}
                </Text>
              ) : (
                <Text style={{ ...styles.text, ...props.style }}>
                  {props.children}
                </Text>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

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

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  text: {
    // fontFamily: "open-sans",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textJustify: {
    textAlign: "justify",
  },
  container: {
    width: "100%",
  },
  imageStyle: {
    height: 150,
    backgroundColor: Colors.lightGray,
  },
  cardWell: {
    borderRadius: 0,
  },
  well: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  card: {
    height: 250,
    width: "100%",
    backgroundColor: Colors.lightGrey,
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
    color: Colors.default,
    textAlign: "center",
    fontWeight: "bold",
  },
});
