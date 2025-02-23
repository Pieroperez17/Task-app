import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Loading_Comp = () => {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    const animateDots = () => {
        const createAnimation = (dot, delay) => {
            return Animated.sequence([
                Animated.delay(delay),
                Animated.timing(dot, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(dot, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]);
        };

        Animated.loop(
            Animated.parallel([
                createAnimation(dot1, 0),
                createAnimation(dot2, 300),
                createAnimation(dot3, 600),
            ])
        ).start();
    };

    useEffect(() => {
        animateDots();
    }, []);

    const scale1 = dot1.interpolate({
        inputRange: [0, 0.5],
        outputRange: [0.5, 1],
    });
    const scale2 = dot2.interpolate({
        inputRange: [0, 0.5],
        outputRange: [0.5, 1],
    });
    const scale3 = dot3.interpolate({
        inputRange: [0, 0.5],
        outputRange: [0.5, 1],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.dot, { transform: [{ scale: scale1 }] }]} />
            <Animated.View style={[styles.dot, { transform: [{ scale: scale2 }] }]} />
            <Animated.View style={[styles.dot, { transform: [{ scale: scale3 }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: '#A77CFC',
        marginHorizontal: 4,
    },
});

export default Loading_Comp;