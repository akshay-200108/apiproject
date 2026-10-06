async function apicall(){
    let res = await fetch('https://meowfacts.herokuapp.com/')
    let finalres=await res.json()
    document.getElementById('box').innerHTML=finalres.data[0]
    console.log(finalres)
}