// const firstNameChange = (e) => {
//     const val = e.target.value;
//     if(val.length>1){
//         console.log('correct');
//     }
// }

function submitForm(e){
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    
    for(let i=0; i<t.length; i++){
        const ty = t[i].type;
        if(ty!='submit'){
            const vl = t[i].value;
            const nm = t[i].name;
            
            if(ty=='checkbox' && t[i].checked){
                res.hobbies.push(vl);
            }
            if(ty!='checkbox'){
                res[nm] = vl;
            }
        }
    }
    console.log(res);
}