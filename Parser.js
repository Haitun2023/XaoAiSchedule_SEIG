function scheduleHtmlParser(html) {
  let data = JSON.parse(html)
  let result =[]
  arr=data.timetable

  for(var i = 0; i < arr.length; i++) { 
// 纵向 i== 节数
       array1= arr[i]
       
	for(var j = 0; j < array1.length; j++) {
	//横向 j==星期 array 有5个元素
            try{
                     //课程名
                 let tmp={}  
                   
                   tmp.name=array1[j][0]+array1[j][1]//课程名称//课程代码
                   
                   tmp.teacher=array1[j][2]//老师名字
                   tmp.position=array1[j][3]//上课位置
                   tmp.weeks=array1[j][4]//上课数组
                   tmp.day=j//星期
                   let sectionx=[]
                   sectionx.push(i+1)
                   tmp.sections=sectionx//节
                   console.log(tmp)
                   result.push(tmp)
		}catch{
                   continue
             
     			 }
      //for 2
              			 }  
//for 
	}

return result
}