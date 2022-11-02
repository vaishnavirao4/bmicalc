import React, { Component }from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

class Inputs extends Component {
     state = {
     height: '',
     weight: '',
     bmi: '',
     BmiResult: '',
  } 
  handleHeight = (text) => {
     this.setState({ height: text })
  }
  handleWeight = (text) => {
     this.setState({ weight: text })
  }
  calculate = (height, weight) => {
     //calculation
     var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
     result = result.toFixed(2);

     //display result
     this.setState({ bmi: result })
     if(result<18.5){
        this.setState({BmiResult:'You are Underweight'})
     }
     else if(result>=18.5&&result<25){
        this.setState({BmiResult:'Your weight is Normal 😄'})
     }
     else if(result>=25&&result<30){
        this.setState({BmiResult:'You are Overweight'})
     }
     else if(result>=30){
        this.setState({BmiResult:'You are Obese ⚠️'})
     }
     else{
        alert('Incorrect Input!');
        this.setState({BmiResult:''})
     }
  }


render() {
  return (
    <View style={styles.container}>
    
    <Text style={styles.title}>BMI Calculator</Text>
            
            <Text  style = {styles.label}>Height</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Height (In Cms)"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
            <Text  style = {styles.label}>Weight</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Weight (In Kgs)"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>

            <Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>

    </View>
  );
}
}

export default Inputs
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#e6ffe6',
      width: '100%',
      height: '100%',
      padding: 30,
      
   },

   input: {
      margin: 20,
      height: 40,
      fontWeight:"bold",
      borderWidth: 1.5,
      padding: 10,
   },

   submitButton: {
      backgroundColor: '#f26a3e',
      padding: 10,
      margin: 20,
      height: 40,
   },

   submitButtonText:{
      textAlign: "center",
      color: 'white',
      fontWeight:"bold",
      fontSize: 18,
   },

   output:{
      textAlign: "center",
      fontWeight:"bold",
      fontSize: 40,
   },

   title:{
      paddingTop:60,
      paddingBottom:20,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
      color:'#ff9900'
   },

   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontWeight:"bold",
      fontSize: 30,
      color: '#8e254e'
   },

   label:{
      marginLeft: 15,
   }
});



