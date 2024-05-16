function getdata(){
    fetch("http://localhost:3000/students",
    {
        method:"GET"
    })
    .then((res)=>{if(!res.ok) throw new Error("not found end point") 
        return res.json()})
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

function updatedata(){
    fetch("http://localhost:3000/students/1",
        {
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "loc":"warangal"
            })
        })
        .then((res)=>{if(res!=ok) throw new Error("not found")
            return res.json()})
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    
}

function deletedata(){
    fetch("http://localhost:3000/students",
        {
            method:"DELETE"
        }
    )
}