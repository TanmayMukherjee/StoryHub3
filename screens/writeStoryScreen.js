import React from 'react';
import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            storyTitle:'',
            authorName:'',
            storyWriting:''
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behaviour="padding" enabled>
                <Header
                    centerComponent={{ text: "Write Story", style: { color: '#018081', fontSize: 20, fontWeight: "bold", } }}
                    backgroundColor="#0AEFE9"
                />
                 <TextInput
                        style={styles.inputBox}
                        placeholder={"Enter Story Title"}
                        onChangeText={(text) => {
                            this.setState({
                                storyTitle: text
                            })
                        }}
                        value={this.state.storyTitle}
                    />
                    <TextInput
                        style={styles.inputBox2}
                        placeholder={"Enter Author Name"}
                        onChangeText={(text) => {
                            this.setState({
                                authorName: text
                            })
                        }}
                        value={this.state.authorName}
                    />
                 <TextInput
                        style={styles.inputBox3}
                        multiline
                        numberOfLines={8}
                        placeholder={"                                          Write A Story"}
                        onChangeText={(text) => {
                            this.setState({
                                storyWriting: text
                            })
                        }}
                        value={this.state.storyWriting}
                    />

                       

            </KeyboardAvoidingView>
        

                        



        )

    }



}
const styles=StyleSheet.create({
    inputBox:{
        height:60,
        justifyContent:'center',
        alignSelf:'center',
        width:200,
        fontStyle:'bold',
        padding:5
    },
    inputBox2:{
        height:60,
        justifyContent:'center',
        alignSelf:'center',
        width:200,
        fontStyle:'bold',
        padding:5
    },
    inputBox3:{
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        width:500,
        fontStyle:'bold',
        padding:5
    },
})