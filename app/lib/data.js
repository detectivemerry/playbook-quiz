import { resolve } from 'path';

const readXlsxFile = require('read-excel-file/node');
var fs = require('fs');
const FILE_PATH = `${process.cwd()}/input/questions.xlsx`;

const schema = {
    'question_id' : {
        type : Number,
        prop : 'question_id',
        required : true
    },
    'prompt' : {
        type : String,
        prop : 'prompt',
        required : true
    },
    'ans_one' : {
        type : String,
        prop : 'ans_one',
        required : true
    },
    'ans_one_type' : {
        type : String,
        prop : 'ans_one_type',
        required : true
    },
    'ans_two' : {
        type : String,
        prop : 'ans_two',
        required : true
    },
    'ans_two_type' : {
        type : String,
        prop : 'ans_two_type',
        required : true
    },
    'question_img_name' : {
        type : String,
        prop : 'question_img_name',
        required : true
    }
}

export const getDataFromXlsx = () => {
    return readXlsxFile(FILE_PATH, { schema })
    .then(({rows, errors}) => {
        if(errors.length === 0) return rows;
        else throw Error("There was a problem reading the xlsx file.");
    })
    .catch((error) => {
        console.error(error)
    })
}



