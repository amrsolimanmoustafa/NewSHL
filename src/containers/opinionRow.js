import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';

// style //
const {
  appGreenBgColor,
  appGreenColor,
  appBlueBgColor,
  appBlueColor,
  appGrayColor,
} = masterStyle;

class OpinionRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      answerSelected: 'answer1',
    }
  }

  render () {
    const { item } = this.props;
    const { answerSelected } = this.state;
    return (
      <View style={[styles.rowStyle]}>
        <View style={[styles.questionRowStyle]}>
          <View style={styles.dotOfQustion} />
          <Text style={[styles.textStyle, appBlueColor, { fontSize: 18 }]}>
            {item.questionText}
          </Text>
        </View>
        <View style={[styles.answerRowStyle]}> 
          <TouchableOpacity 
            style={[styles.answerContainer]}
            onPress={() => this.answerPress('answer1')}          
          >
            <View style={answerSelected === 'answer1'? styles.dotSelectedStyle : styles.dotWhiteStyle}/>
            <Text style={[styles.textStyle]}>
              {item.answer1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.answerContainer]}
            onPress={() => this.answerPress('answer2')}          
          >
            <View style= {answerSelected === 'answer2'? styles.dotSelectedStyle : styles.dotWhiteStyle}/>
            <Text style={[styles.textStyle]}>
              {item.answer2}
            </Text>
         </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.answerContainer]}
            onPress={() => this.answerPress('answer3')}          
          >
            <View style= {answerSelected === 'answer3'?  styles.dotSelectedStyle : styles.dotWhiteStyle}/>
            <Text style={[styles.textStyle]}>
              {item.answer3}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  answerPress(answer){
    this.setState({
      answerSelected: answer
    });
  }
}

const styles = {
  rowStyle: {
    marginTop: 15,
  },
  questionRowStyle: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  answerRowStyle: {
    marginTop: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',  
    justifyContent: 'space-between' 
  },
  dotOfQustion: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginLeft: 10,
  },
  dotSelectedStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'gray',
    marginLeft: 10,    
  },
  dotWhiteStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,    
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'right',
    color: 'gray',
  },
  answerContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',  
    // marginLeft: 10
  }
};

export default OpinionRow;