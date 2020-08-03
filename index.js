import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  text: {},
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textJustify: {
    textAlign: "justify",
  },
});
