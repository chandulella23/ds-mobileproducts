let moblieData = require('./moblie.json')
const fs = require('fs')
let filterData=[]
let obj={}
moblieData.productInfoList.map((ele)=>{
let data = ele.productBaseInfoV1.title.replace(/\d*(gb|ram)|\(.*\)/gmi,'').trim()
 if(obj[data] === undefined){
   obj[data]=data
   filterData.push(ele)
 }
})
console.log(moblieData.productInfoList.length)
console.log(filterData.length)
if(filterData){
  moblieData.productInfoList= filterData
  fs.writeFileSync('./data.json',  JSON.stringify(moblieData, null , 2)  , 'utf-8'); 
}
