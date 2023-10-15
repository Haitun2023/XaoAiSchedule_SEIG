async function scheduleHtmlProvider() {
await loadTool("AIScheduleTools")
let result=[]
a:while(true){
const userId = await AISchedulePrompt({
  titleText: '请输入账户', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
  tipText: '请输入账户', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，也可以不传就不显示
  defaultText: '', // 文字输入框的默认内容，不传会显示版本号，所以空内容要传个''
  validator: value => { // 校验函数，如果结果不符预期就返回字符串，会显示在屏幕上，符合就返回false
   
    if (value.length<10) {return '学号长度不对'
    console.log(value)
}
    return false
}})


const userPwd = await AISchedulePrompt({
  titleText: '请输入密码', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
  tipText: '请输入密码', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，也可以不传就不显示
  defaultText: '', // 文字输入框的默认内容，不传会显示版本号，所以空内容要传个''
  validator: value => { // 校验函数，如果结果不符预期就返回字符串，会显示在屏幕上，符合就返回false
   
    if (value.length<6) {return '密码长度不对'
    console.log(value)
}
    return false
}})

try{
const res = await fetch(
				"https://scheduler.seig.nanxicloud.xyz/api/v2/student/schedule?stu_num="+userId +"&stu_pwd="+userPwd ,
				{
					method: "Get",
					
				})
				.then((response) => response.json())
				.then((data) => {
                                        result = data

				})
}
catch{
      await AIScheduleAlert("服务器错误")
      result={"success": false,"errcode":-999,"msg":"服务器爆炸了"}
	}
switch(result.errcode) {
     case 0:
            await AIScheduleAlert("密码错误")
        break
     case -1:
    
            await AIScheduleAlert("账号错误")
            break
     case 1:
        
        break a
     default:
      await AIScheduleAlert("未知错误")
        break
			} 
//死循环
  }

console.log(result.errcode)
return JSON.stringify(result)

}


