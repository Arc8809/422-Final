const fs = require('fs');
const path = require('path');
const { parse } = require('csv');
const {output, setWatched,setOutput,setProcessed} = require("../src/parser");
const watch  = require("../src/watcher");
const { processChange } = require('../src/parser');

console.info("attempting wrong file test");
test('checks a non cs file',()=>{
    expect(processChange('../test_data/patient_data_5.json')).toBe(false);}
)


