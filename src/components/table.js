import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native'
import {
	Table,
	TableWrapper,
	Row,
	Rows,
	Col,
	Cols,
	Cell,
} from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
			widthArr: [400],
			tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
		}	
	}
	
	_alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 1; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
		}
		
		const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
 
    // return (
    //   <View style={styles.container}>
    //       <View>
    //         <ScrollView style={styles.dataWrapper}>
    //           <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
    //             {
    //               tableData.map((rowData, index) => (
    //                 <Row
    //                   key={index}
    //                   data={rowData}
    //                   widthArr={state.widthArr}
    //                   style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
    //                   textStyle={styles.text}
    //                 />
    //               ))
    //             }
    //           </Table>
    //         </ScrollView>
    //       </View>
    //   </View>
		//)
		
		return (
      <View style={styles.container}>
				<View>
					<ScrollView style={styles.dataWrapper}>
						<Table borderStyle={{borderColor: 'transparent'}}>
							{
								tableData.map((rowData, index) => (
									<TableWrapper key={index} style={styles.row}>
										{
											rowData.map((cellData, cellIndex) => (
												<Cell key={cellIndex} data={element(cellData, index)} textStyle={styles.text}/>
											))
										}
									</TableWrapper>
								))
							}
						</Table>
					</ScrollView>
				</View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { height: '100%', width: '100%', padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});