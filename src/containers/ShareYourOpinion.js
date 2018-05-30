import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';

// localFiles //
import { Images } from './../Themes';
import masterStyle from './masterStyle';
import Container from './Components/container';
import OpinionRow from './opinionRow';


export default class ShareYourOpinion extends Component {
  state = {
    questionsData: [
      { id: 1, questionText: 'سؤال 1', 
        answer1: 'الاجابة الاولى', answer2: 'الاجابة الثانية', answer3: 'الاجابة الثالثة'
      },
      { id: 2, questionText: 'سؤال 2', 
        answer1: 'الاجابة الاولى', answer2: 'الاجابة الثانية', answer3: 'الاجابة الثالثة'
      },
      { id: 3, questionText: 'سؤال 3', 
        answer1: 'الاجابة الاولى', answer2: 'الاجابة الثانية', answer3: 'الاجابة الثالثة'
      },
    ], 
  }
  ////////////////////////////////
  renderRow = ({ item }) => {
    return (
      <OpinionRow item={item} />
    );
  } 
  ////////////////////////////////
  render() {

    return (
      <View style={[masterStyle.container]}>
        <Container title='شاركنا رأيك' >
          {/* // vertical list // */}
          <FlatList
            data={this.state.questionsData}
            keyExtractor={item => `${item.id}`}
            renderItem={this.renderRow}
          />
          {/* /// btn ///  */}
          <TouchableOpacity style={[styles.btnStyle]}>
            <ImageBackground 
            source={Images.btnBackground} 
            style={[styles.btnImage]}
            resizeMode='cover'
            >
              <Text style={[styles.btnText]}>التأكيد</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Container>
      </View>
    )
  }
};
const styles = {
  btnStyle: {
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginBottom: 20
  },
  btnImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: 'transparent',
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
};