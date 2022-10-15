import { Dimensions } from "react-native";


const params = {
    blockSize:30,
    borderSize:5,
    fonteSize:15,
    headerRatio: 0.15, //Proporção do painel superior da tela
    difficultLevel:0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },
    getRowsAmount(){
        const totalHeigth = Dimensions.get('window').height
        const boardHeight = totalHeigth * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize);

    }
}


export default params