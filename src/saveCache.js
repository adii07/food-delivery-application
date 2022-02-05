export const saveCache=(credentials)=>{
    const{name,email,city}=credentials
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("city",city);
    console.log(name,email,city);
}