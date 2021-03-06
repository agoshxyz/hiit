import React, { Component, useEffect}  from 'react'
import { Text, View, Button, Animated, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function Counter(){ 
  const obj = {
   "Workout_name":"Upper Body",
   "Number_of_moves":2,
   "mouvements":[
      {
         "Duration":"5",
         "Mouvement_name":"Mov 1",
         "Rest_Duration":"8",
         "index":"0"
      },
      {
         "Duration":"30",
         "Mouvement_name":"Mouv 2",
         "Rest_Duration":"7",
         "index":"1"
      }
   ]
};



function updatemove(){
  const movements = obj.mouvements;
          const len = parseInt(obj.Number_of_moves);
          const index = parseInt(currentmove.index)
          if(index>-1 && index < len){

            setTimeout(()=>{setCurrentMove(prev => obj.mouvements[index+1])}, parseInt(currentmove.Rest_Duration)*1000) 
            
            return [true, parseInt(currentmove.Rest_Duration)*1000]
          }
          else{
            return[false]
          }
}




 const [isPlaying, setIsPlaying] = React.useState(true)
 const [currentmove, setCurrentMove] = React.useState(obj.mouvements[0])


  return (    
    <View style={styles.container}>
    <Text style ={styles.title}> {obj.Workout_name} </Text>
    {currentmove?
    <View>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        key={currentmove.Mouvement_name}
        duration={parseInt(currentmove.Duration)}
        colors={[
          ['#6142B7', 0.4],
          ['#2C2085', 0.4],
          ['#1E177F', 0.2],
        ]}
        onComplete={() =>{ 
          updatemove()
          
        }}
    >
    
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
    <Text style={styles.move} > {currentmove.Mouvement_name} </Text>
    {currentmove.index+1<=parseInt(obj.Number_of_moves)?
    
    <View>
    <Text style={styles.move} > Coming Up: </Text>
    <Text style={styles.move} > {obj.mouvements[parseInt(currentmove.index+1)].Mouvement_name} </Text>
    <Text style={styles.move} > Duration : {parseInt(obj.mouvements[parseInt(currentmove.index+1)].Duration)}s </Text>
</View>
 :null}
    <Button title="Pause" onPress={() => setIsPlaying(prev => !prev)}/>

    </View>
    :<Text style={styles.move} > Congratulations on completing you {obj.Workout_name} workout! </Text>}
    </View>
  )
      }


    const styles = StyleSheet.create({

      
  title:{
    fontSize:30,
    marginBottom:50,
    marginTop:45,
    color: '#2C2085',
    borderBottomWidth:5,
    borderColor:'#19928F'
    
  },
  move:{
    fontSize:25,
    
    marginTop:10,
    color: 	'#FFFFFF',
    
    
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#01233E',
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});

export default Counter