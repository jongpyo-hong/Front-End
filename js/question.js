// Q.반복문 1부터 10까지의 숫자중 짝수만 출력해보세요

// for(var i=1; i<=10; i++)
// console.log(i)





// Q. 사칙연산 함수를 만들어 보세요
// 함수이름은 add(+), substract(-), multiply(*), divide(/)
// 함수의 return값을 변수에 담아 출력해보세요

// function add(a,b){
//     return a+b ;
// }
// function sub(a,b){
//     return a-b ;
// }
// function mul(a,b){
//     return a*b ;
// }
// function div(a,b){
//     return a/b ;
// }
// console.log(add(1,2))
// console.log(sub(1,2))
// console.log(mul(1,2))
// console.log(div(1,2))


// Q. 콘솔에 현재시간을 알려주는 시계를 만들어보세요
// setInterval(callback, ms)
// ms간격으로 callback 실행
// 1s = 1000ms
// console.log(new Date().toLocaleTimeString());

// setInterval(function(){
//     var time = new Date().toLocaleTimeString()
//     console.log(time)
// },1000)




// Q. 1부터 10까지의 숫자로 이루어진 배열을 만들어보세요
// var arr = []
// for(i=0; i<10; i++){
//     arr[i] = i+1
// }
// console.log(arr)


// Q. 숫자를 대입하면 4칙연산의 결과값을 return하는 함수를 만들어보세요


// Object를 이용한 방법

// const cal = {
//     add : function(a,b){
//         return a+b
//     },
//     sub : function(a,b){
//         return a-b
//     },
//     mul : function(a,b){
//         return a*b
//     },
//     div : function(a,b){
//         return a/b
//     }
// }
// console.log(cal.add(1,2))
// console.log(cal.sub(1,2))
// console.log(cal.mul(1,2))
// console.log(cal.div(1,2))

// Array를 이용한 방법



// function cal(a,b){
//     return {
//         add : a+b,
//         sub : a-b,
//         mul : a*b,
//         div : a/b
//     }
// }
// console.log(cal(1,2))


// Q. 15살 소녀가 CU에서 술을 사려고 한다. 
// 커스텀에러를 발생시켜서 (어른으로서) 이 상황을 중단시켜보세요

// try{
//     var age = 15
//     console.log("15세 소녀가 cu에 술을 사러가고 있다")
//     if(age<19){
//         const err = {
//             name : "나이제한",
//             message : "미성년자는 이용할 수 없습니다"
//         }
//         throw err;
//     }
//     console.log("술을 샀다")
// }catch(err){
//     console.error(err)
// }













// Q. 삼산동에 살고있는 하얀색 말티즈를 생성하기 위한 템플릿을 작성해보세요


// class SamsanMaltese {
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     type = "maltese"
//     color = "white"
//     sound() {
//         return "bark"
//     }
// }
// const dog = new SamsanMaltese("john",2)
// console.log(dog)
// console.log(dog.sound())



// Q. 평리단길에 있는 고양이를 생성하기 위한 템플릿을 생성해보세요
// 메서드에 인자를 전달해보세요

// class Cat {
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     location = "pyeungridangil"
//     sound(x){
//         return x
//     }
// }
// const cat1 = new Cat("kitty",3)
// console.log(cat1)
// console.log(cat1.sound("야옹"))









// Q. 빌트인 클래스인 RangeError의 인스턴스를 사용해서 
// 15세 소녀가 CU에서 술을 사려고 하는 것을
// 막아보세요

// try {
//     age = 15
//     console.log("15세 소녀가 cu에 술을 사러간다")

//     if(age < 19) {
//         const err = new RangeError("미성년자는 이용할 수 없습니다")
//         throw err;
//     } console.log("술을 샀다")
// }catch(err){
//     console.error(err)
// }






// // Q. slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어보세요
// const arr = ["a", "b", "c", "d", "e", "f", "g"];

// const i = arr.slice(1,6)
// console.log(i)


// Q. 
// 1 origin으로만 구성된 String Array를 만들어보세요 (map)
// 2 유럽 맥주로만 구성된 Array를 만들어보세요 (filter)

// const beers = [
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Kloud", origin: "S.Korea" },
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Asahi", origin: "Japan" }
// ]

// const i = beers.map(function(beer){
//     return beer.origin
// })
// console.log(i)

// const eu = beers.filter(function(beer1){
//     if(beer1.origin === "Netherlands" || beer1.origin == "Ireland"){
//         return beer1
//     }
// })
// console.log(eu)










// Q. 다음과 같은 문장을 출력하는 함수를 정의해보세요 (구조분해할당을 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland.
const irishBeer = { name: "Guinness", origin: "Ireland" };

f(irishBeer)
    function f (name,origin) {
        console.log(name + "is originated in the brewery at" + origin)
    }















// // Q. 원산지에 일치하는 맥주이름의 변수를 만들어보세요 (구조분해할당 사용)
// const origins = ["Netherlands", "S.Korea", "Ireland", "Japan"];
// const [Heineken, Kloud, Guinness, Asahi] = origins;











// Q. Spread 문법을 사용하여 일본 맥주를 추가해 보세요
// const beers = [
//   {name: "Heineken", origin: "Netherlands"},
//   {name: "Kloud", origin: "S.Korea" },
//   {name: "Guinness", origin: "Ireland"}
// ]










// Q. dutchBeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성
// available: true를 추가해보세요
// (Object의 Spread 문법 사용)
// const dutchBeer = {name: "Heineken", origin: "Netherlands"}




// Q. 기네스 맥주가 재입고가 되었다
// (map() 메서드와 Spread 문법을 사용해서 상태를 구현해보세요)




