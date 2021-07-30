const CargosEx = require('../models/CargosEx');
const fs = require('fs');

exports.getAll = async (req, res, next) => {
  try {
    const data = fs.readFileSync(__dirname+'/../files/CargosEx.txt', 'utf8');
    res.status(200).json(data.split('\n'));
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.insertTable = async (req, res, next) => {
  try {
    const data = fs.readFileSync(__dirname+'/../files/CargosEx.txt', 'utf8');
    const arr=data.split('\n');
    arr.forEach(async(e) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;s
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');
      const CargosEx_model = {
        keycargoex: parseInt(arr3[0]),
        nombrecargo: arr3[1],
        designcolor: arr3[2],
      };
      const user = await CargosEx.create(CargosEx_model);
    });
    res.status(200).json({acabado:'acabado'});
  } catch (error) {
    return res.status(500).json(error);
  }
};



