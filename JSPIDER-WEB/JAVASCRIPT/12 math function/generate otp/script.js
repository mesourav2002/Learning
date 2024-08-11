// let  generateOtp =()=>{
//     console.log(Math.floor(Math.random()*9999) + 1000)
// }

// generateOtp()

let  generateOtp =()=>{
    let randomNum =Math.random()*10000

    let otp = Math.floor(randomNum)

    if (otp>=1000 && otp<10000) {
        document.write(otp)
    }
    else{
        generateOtp()
    }
}

// generateOtp()

