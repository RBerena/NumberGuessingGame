import {View, Text, StyleSheet, Pressable} from 'react-native';

function PrimaryButton({children}){
    function pressHandler(){
        console.log("Press detected!");
    }
    return( 
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({pressed}) => 
                pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer} 
                onPress={pressHandler}>
            <Text style={styles.buttonText} >{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin:5,
        borderRadius: 28,
        overflow: "hidden",
    },
    buttonInnerContainer:{
        backgroundColor:"#1c9202ff",
        paddingHorizontal: 16,
        paddingVertical:8,
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    pressed:{
        opacity: 0.75,
        
    }
})