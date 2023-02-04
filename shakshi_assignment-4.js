var a= {
    "meeting_slots": {
        "first": {
            "monday": 2,
            "allowed_department": [3,4]
        },
        "second": {
            "wednesday": 4,
            "allowed_department": [1,5]
        },
        "third": {
            "thursday": 5,
            "allowed_department": [2,3]
        },
        "fourth": {
            "sunday": 1,
            "allowed_department": [3,1]
        }
    },
    "transport":["fourth","second"],
}

var b={
    "department": [
        {
            "department_name": "admin",
            "department_id": 1
        },
        {
            "department_name": "marketing",
            "department_id": 2
        },
        {
            "department_name": "cleaner",
            "department_id": 3
        },
        {
            "department_name": "hr",
            "department_id": 4
        },
        {
            "department_name": "driver",
            "department_id": 5
        }
    ],
    "chair": [
        {
            "first": 5
        },
        {
            "second": 2
        },
        {
            "third": 3
        },
        {
            "fourth": 1
        }
    ]

}

const x = 4

b.department.map(ele=>{
    // console.log(ele.department_id)
    if(ele.department_id==x){
        console.log("Department Name : " +ele.department_name)
    }
})

Object.values(a.meeting_slots).map(ele=>{
    // console.log(Object.keys(ele)[0])
    // console.log(ele.allowed_department)
    ele.allowed_department.map(depele=>{
        if(depele==x){
            // console.log(Object.values(ele)[0])
           Object.values(b.chair).map(Barr=>{
                // console.log(Object.values(Barr))
                Object.values(Barr).map(Barrele=>{
                    // console.log(Barrele)
                    if(Barrele==Object.values(ele)[0]){
                        // console.log("valid")
                        // console.log(Object.values(Barr))
                        //  console.log(Object.keys(ele)[0])
                        console.log("Slot Available on day : " + (Object.keys(ele)[0]) + " and Seats Available : " + Object.values(Barr))
                        a.transport.map(tran=>{
                            if(Object.keys(Barr)==tran){
                                console.log('Transport Available for Day')
                            }                     
                        })  
                        // console.log(Object.keys(Barr))
                    }                   
                })
           })
        }       
    })  
})
