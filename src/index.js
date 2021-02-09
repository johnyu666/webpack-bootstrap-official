import $ from "expose-loader?exposes=$,jQuery!jquery"; //引入全局变量'$',此项目中并不是必须的
import 'bootstrap'
// bootstrap的主css文件
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap-icons组件
import 'bootstrap-icons/font/bootstrap-icons.css'

$(function(){
    $('#lan').on('click',()=>{
        console.log($("#exampleModal"))
        $("#exampleModal").modal()
    })
})
