var quizdata=[
{
        question:" 1.which framework is related to javascript  ?",
        a:'.net',
        b:'html',
        c:'django',
        d:'react',
        correct :'d'
        
 },
{
        question:"2.which framework is  to CSS  ?",
    a:'.net',
    b:'Bootstap',
    c:'django',
    d:'laravel',
    correct :'b'
},
{
        question:"3.which Front-end programing language  ?",
    a:'HTML',
    b:'Javascript',
    c:'MYSQL',
    d:'PHP',
    correct :'b'
},
{
    question:"4.which is popular wordpress plugin  ?",
a:'.net',
b:'Woocomercee',
c:'shop',
d:'schoool vita',
correct :'b'
},
{
    question:"5.what is HTML EXTENSION ?",
a:'Hyper-text-maunual-language',
b:'Hyper-text-modified-language',
c:'Hyper-text-markup-language',
d:'Hyper-transfermed-markup-language',
correct :'c'
}, 
{
    question:"6.PHP mainly used for ...... ",
a:'Back-end language',
b:'Angular-Js',
c:'PHP-MYSQL',
d:'DATAbase',
correct :'a'
},

]
var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll(".answer")
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn=document.getElementById('submit')
var currentQuestion=0
var quizScore=0
loadQuiz()


function loadQuiz() {
    deselect()
    question.innerHTML=quizdata[currentQuestion].question
    option_a.innerHTML=quizdata[currentQuestion].a
    option_b.innerHTML=quizdata[currentQuestion].b
    option_c.innerHTML=quizdata[currentQuestion].c 
    option_d.innerHTML=quizdata[currentQuestion].d
}
function deselect() {
    answer.forEach(answer => answer.checked =false)
}
submitbtn.addEventListener('click',()=>{
    var selectadoption;
    answer.forEach(answer=>{
        if (answer.checked){
            selectadoption =answer.id
}})
    if(selectadoption == quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1
    }   
    currentQuestion=currentQuestion+1
    
    if(currentQuestion==quizdata.length)
    {document.getElementById('quizdiv').innerHTML=`<h1> you have answered  ${quizScore}  correctly out of ${quizdata.length}</h1>`}
    else{loadQuiz()}
}) 