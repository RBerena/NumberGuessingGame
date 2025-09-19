import {TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return <View style={styles.inputContainer}> 
        <TextInput 
        keyboardType='number-pad' 
        maxLength={2} 
        style={styles.numberInput}
        autoCapitalize='none'
        autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:100,
        marginHorizontal:24,
        borderRadius: 10,
        padding:16,
        backgroundColor:'#136001ff',
        shadowColor: 'white',
        shadowOffset:{width:0,height:10},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput:{
        height: 50,
        width: 45,
        fontSize:32,
        borderBottomColor:"white",
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        fontWeight:'bold',
        textAlign:'center'
    },
    textContainer:{
        
    }
});