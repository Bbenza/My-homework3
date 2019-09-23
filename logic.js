var password = [];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var upChar = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];  
var lwChar = ["a,b,c,d,e,f,g,h,i,j,k,l,n,m,o,p,q,r,s,t,u,v,w,x,y,z"]; 
var splChar = ["!,@,#,$,%,&,*"];
var passwordLength= 8;
function pwsr (){
    for(var i=0; i < 9 ; i++ ){
        console.log(numbers);
        console.log(upChar);
        console.log(lwChar);
        console.log(splChar);
        
    }
    button = prompt(numbers,upChar,lwChar,splChar);

    if(button === 'numbers','upChar','lwChar','splChar') {
        pwsr.generate();
    }
    alert

    return Math.floor(Math.random() 


