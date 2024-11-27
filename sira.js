
let question = window.question;
let answer = window.answer;
let title = window.title;
let summary = window.summary;
let edit = window.edit;
let titles = window.titles;
let summarys = window.summarys;
let ale = window.ale;
let n = 1;
let p = 1;

function add(){
     if(question.value !== "" && answer.value !== ""){
          summary.innerHTML += "<p>*س " + n + ":* " + question.value + "؟<br>*ج " + n + ":* " + answer.value + " .</p>";
          ++n;
          question.value = "";
          answer.value = "";
          aler.innerHTML = "";
     } else{
          aler.innerHTML = "رجاء، أضف سؤالا !";
     }
}

function tm(){
     if(title.value !== ""){
          titles.innerHTML = "*" + title.value + "* ";
          title.innerHTML = "";
          title.value = "";
          ale.innerHTML = "";
     } else {
          ale.innerHTML = "رجاء، أضف عنوانا !";
     }
}

function edit_summary(){
     if(p == 1){
          summarys.setAttribute("contenteditable","true");
          summarys.focus();
          edit.innerHTML = "إنهاء التعديل";
          p = 0;
     } else {
          summarys.setAttribute("contenteditable","false");
          edit.innerHTML = "تعديل";
          p = 1;
     }
}

function copy() {
     let range = document.createRange();
     range.selectNodeContents(summarys);
     let selection = window.getSelection();
     selection.removeAllRanges();
     selection.addRange(range);

     try {
         var successful = document.execCommand('copy');
          summary.innerHTML = "";
          titles.innerHTML = "";
          title.value = "";
     } catch (err) {
         
     }

     // إزالة التحديد بعد النسخ
     selection.removeAllRanges();
 }
