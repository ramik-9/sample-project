const n = document.getElementById('input-name');
const a = document.getElementById('input-age');
const s = document.getElementById('input-sex');
const button = document.getElementById('submit');

button.addEventListener('click',function(){
    let name = n.value;
    let age = a.value;
    let sex = s.value;

    if(name.trim() === "" || age.trim() === "" || sex.trim() === "")
    {
        console.log('Warning! Please full fill the form!');
        return;
    }

    if(Number(age) > 18)
    {
        console.log('Name: ' + name);
    console.log('Age: ' + age);
    console.log('Sex: ' + sex)
    alert('Above 18!');
    }
    else{
        console.log('Name: ' + name);
    console.log('Age: ' + age);
    console.log('Sex: ' + sex)
    alert('Under 18!');
    }
})