import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import Calculate from '../components/calculate';
import ClockScreen from '../screens/clockScreen';



//https://www.npmjs.com/package/react-datepicker  -datepicker to use date input!!    4
//https://reactdatepicker.com/#example-custom-day-class-name  - gu

//https://github.com/henninghall/react-native-date-picker -have to test    3

//https://hosseinshabani.github.io/react-native-modern-datepicker/ - test first o   2

//https://github.com/xgfe/react-native-datepicker   1
export default class Input extends Component {
	state = {
		start: '11',
		inputStart: '',
		final: '11',
		inputFinal: '',
	};

	submitBtn = () => {
		this.setState({ start: this.state.inputStart });
		this.setState({ final: this.state.inputFinal });
				
		return (
			<ClockScreen start={this.state.start} final={this.state.final}/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>TextInput 가지고 놀아보자</Text>
				<View style={styles.bodyContainer}>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							this.setState({ inputStart: text });
						}}
						placeholder="입대일"
					/>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							this.setState({ inputFinal: text });
						}}
						placeholder="전역일"
					/>
					<Button title="제출" onPress={this.submitBtn} />
				</View>
					<Text style={styles.showText}>{this.state.start}</Text>
					<Text style={styles.showText}>{this.state.final}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEAD0',
		paddingHorizontal: 30,
		flex: 1,
	},
	headerText: {
		paddingTop: 50,
		alignItems: 'center',
		fontSize: 30,
	},
	bodyContainer: {
		backgroundColor: '#FDF5DC',
		paddingHorizontal: 20,
		marginVertical: 30,
		flex: 1,
	},
	textInput: {
		marginTop: 20,
		marginBottom: 10,
		paddingHorizontal: 10,
		height: 40,
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
	},
	showText: {
		marginTop: 10,
		fontSize: 25,
	},
	card: {
		backgroundColor: '#fff',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
	},
});