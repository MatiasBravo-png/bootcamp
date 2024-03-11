const logged= sessionStorage.getItem("auth")

if(!logged){
    location.href="../../paginas ancladas/login/login.html"
}