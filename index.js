const submit=document.getElementById('submit')
const submit1=document.getElementById('submit1')
const answer=document.getElementById('answer')
const date=document.getElementById('exampleInputPassword1')
const inner_text_answer=document.getElementById('inner_text_answer')
const name=document.getElementById('exampleInputEmail1')
const inner_text_answer_bottom=document.getElementById('inner_text_answer_bottom')
const phone_number=document.getElementById('phone_number')
const inner_text_answer_week=document.getElementById('inner_text_answer_week')
const birthDate=document.getElementById('birthDate')
const wrapper=document.getElementById('wrapper')

let futureDateForMessage;
let nameForMessage;
let weeks;
let days;
// set the date input to today
var date1 = new Date();
exampleInputPassword1.value = date1.getFullYear().toString() + '-' + (date1.getMonth() + 1).toString().padStart(2, 0) +
'-' + date1.getDate().toString().padStart(2, 0);

submit.addEventListener('click', function(evt){
    evt.preventDefault();
    if(!date.value)
    {
        alert('אנא הכניסי תאריך')
        return
    }
    if(!name.value)
    {
        alert('אנא הכניסי שם')
        return
    }
    // 
    var ToDate = Date.now();
    let maxDate=Date.parse(date.value)
    // alert(Date.parse(date.value))
    // alert (ToDate)
if (maxDate- ToDate>0) {
    alert("התאריך המקסימלי שניתן להזין הוא היום")
    return false;
}
// var prevTime = new Date(2011,1,1,0,0);  // Feb 1, 2011

    const a=new Date(date.value)
    var thisTime = new Date();              // now
    var diff = thisTime.getTime() - a.getTime();   // now - Feb 1
    weeks=( Math.ceil(diff / (1000*60*60*24)/7)); 
    days=(Math.ceil(diff / (1000*60*60*24)%7)-1)
    if(weeks===1 )
    {
        days=0
    }
    // alert('שבוע מספר '+ weeks + ' יום מספר '+ days)
    answer.classList.remove('display_none')
    a.setDate(a.getDate() + 279);
    // alert(a.getDate())
    let futureDate=a.toLocaleDateString();
    futureDateForMessage=futureDate
    let clientName=name.value;
    nameForMessage=clientName
  
    inner_text_answer.innerHTML=clientName+" המקסימה, <br/> על פי החישוב את נמצא בשבוע "+weeks+" + "+days+" ימים"
    inner_text_answer_bottom.innerHTML="אין דבר מרגש מזה -  <strong>בהבטחה</strong>. שתפי את המשפחה והחברים."
    
    inner_text_answer_week.innerHTML="תאריך הלידה הצפוי הינו : "
    birthDate.innerHTML=futureDate


})



phone_number.addEventListener('input',function changePhoneNumber() {
    
"https://api.whatsapp.com/send?phone=+972"+phone_number.value+"&text= שלא תגידו שלא היה לכם זמן להתכונן! "+nameForMessage.value+" השתמשה במחשבון הלידה שלנו והחליטה לשתף אותך שמועד הלידה הצפוי שלה הוא ב-"+futureDateForMessage+"מעכשיו תוכלו לדעת מתי לפנות זמן לביקור, להכין את עצמכם לעומס בעבודה, וכמובן להתרגש מהציפייה."+"רוצים כבר עכשיו לסגור את הפינה עם המתנה, הכנסו לאתר והזמינו מראש>> https://bit.ly/3wuZq0V"
document.getElementById("whatsapp_link").href = "https://api.whatsapp.com/send?phone=+972"+phone_number.value+"&text= שלא תגידו שלא היה לכם זמן להתכונן! "+nameForMessage+" השתמשה במחשבון הלידה שלנו והחליטה לשתף אותך שמועד הלידה הצפוי שלה הוא ב-"+futureDateForMessage+" מעכשיו תוכלו לדעת מתי לפנות זמן לביקור, להכין את עצמכם לעומס בעבודה, וכמובן להתרגש מהציפייה."+"רוצים כבר עכשיו לסגור את הפינה עם המתנה, הכנסו לאתר והזמינו מראש>> https://bit.ly/3wuZq0V"
;
})
