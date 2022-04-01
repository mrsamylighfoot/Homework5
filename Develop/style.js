var today = moment().format('MMMM DD, YYYY');
console.log(today);
function current(){
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = today;
}

current();
console.log();