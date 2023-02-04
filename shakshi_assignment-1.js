let obj = {
    "user_master": [
        {
            "user_code": 1,
            "user_name": "Rakesh"
        },
        {
            "user_code": 4,
            "user_name": "Krishna"
        },
        {
            "user_code": 7,
            "user_name": "Rajesh"
        },
        {
            "user_code": 5,
            "user_name": "Kapadiya"
        },
        {
            "user_code": 6,
            "user_name": "Gupta"
        },
        {
            "user_code": 2,
            "user_name": "John"
        },
        {
            "user_code": 3,
            "user_name": "Mishra"
        },
        {
            "user_code": 8,
            "user_name": "Lokesh"
        },
        {
            "user_code": 9,
            "user_name": "Thalaiva"
        },
        {
            "user_code": 10,
            "user_name": "Martin"
        },
        {
            "user_code": 11,
            "user_name": "Rakesh"
        },
        {
            "user_code": 12,
            "user_name": "Jourge"
        },
        {
            "user_code": 13,
            "user_name": "Tom"
        },
        {
            "user_code": 14,
            "user_name": "Lalit"
        },
        {
            "user_code": 15,
            "user_name": "Guddu"
        },
        {
            "user_code": 16,
            "user_name": "Wasim"
        },
        {
            "user_code": 17,
            "user_name": "Hiren"
        },
        {
            "user_code": 18,
            "user_name": "Ramu"
        },
        {
            "user_code": 19,
            "user_name": "Gopal"
        },
        {
            "user_code": 20,
            "user_name": "Huddu"
        },
        {
            "user_code": 21,
            "user_name": "Niraj"
        },
        {
            "user_code": 22,
            "user_name": "Sohan"
        }
    ],
    "permissions": [
        7,
        88,
        45,
        62,
        96,
        11,
        8,
        34,
        46
    ],
    "department_names": [
        {
            "department_name": "admin",
            "d_id": 1
        },
        {
            "department_name": "marketing",
            "d_id": 2
        },
        {
            "department_name": "cleaner",
            "d_id": 3
        },
        {
            "department_name": "hr",
            "d_id": 4
        },
        {
            "department_name": "driver",
            "d_id": 5
        }
    ],
    "user_list": [
        {
            "department_id": 4,
            "name_list": {
                "name": [
                    1
                ],
                "permissions": 7
            }
        },
        {
            "department_id": 1,
            "name_list": {
                "name": [
                    2,
                    3
                ],
                "permissions": 88
            }
        },
        {
            "department_id": 5,
            "name_list": {
                "name": [
                    4,
                    5,
                    6,
                    7
                ],
                "permissions": 11
            }
        },
        {
            "department_id": 2,
            "name_list": {
                "name": [
                    10
                ],
                "permissions": 22
            }
        },
        {
            "department_id": 3,
            "name_list": {
                "name": [
                    8,
                    9
                ],
                "permissions": 34
            }
        },
        {
            "department_id": 5,
            "name_list": {
                "name": [
                    14
                ],
                "permissions": 100
            }
        },
        {
            "department_id": 1,
            "name_list": {
                "name": [
                    20,
                    21,
                    22
                ],
                "permissions": 62
            }
        },
        {
            "department_id": 2,
            "name_list": {
                "name": [
                    11,
                    12
                ],
                "permissions": 8
            }
        },
        {
            "department_id": 3,
            "name_list": {
                "name": [
                    13,
                    15,
                    16
                ],
                "permissions": 45
            }
        },
        {
            "department_id": 2,
            "name_list": {
                "name": [
                    17,
                    18,
                    19
                ],
                "permissions": 77
            }
        }
    ],
    "error_message_department_wise": [
        {
            "error": "admin not allowed",
            "d_id": 1
        },
        {
            "error": "marketing not allowed",
            "d_id": 2
        },
        {
            "error": "cleaner not allowed",
            "d_id": 3
        },
        {
            "error": "hr not allowed",
            "d_id": 4
        },
        {
            "error": "driver not allowed",
            "d_id": 5
        }
    ],
    "no_permission": {
        "not_allowed_user_id_list": [
            87,
            22,
            99,
            75,
            77
        ],
        "error_message": "User do not have department access"
    }
}

let final_obj = {}

let access_not_allowed=[]
let permission_not_found=[];
let allName=[];

obj.user_list.map((subobj) => {
    if(obj.permissions.includes(subobj.name_list.permissions)){
        let user_name=[];
        let dapart_name;
        subobj.name_list.name.map(names => {
            obj.user_master.map(users => {
                if(users.user_code == names){
                     obj.department_names.filter(departs => {
                         return departs.d_id == subobj.department_id
                     })
                    .map(depart_name => {
                        dapart_name = depart_name.department_name
                        user_name.push(users.user_name)
                    })
                }
            })
        })
        allName.push({
            "department_name":dapart_name,
            "user_name":user_name
        })
    }
    
    else if(obj.no_permission.not_allowed_user_id_list.includes(subobj.name_list.permissions))  // FOR ACCES NOT FOUND
    {
        let user_name=[];
        let dapart_name;
        subobj.name_list.name.map(names => {
            obj.user_master.map(users => {
            if(users.user_code == names){
                
                 obj.department_names.filter(departs => {
                     return departs.d_id == subobj.department_id}
                )
                .map(depart_name => {
                    dapart_name=depart_name.department_name,
                    user_name.push(users.user_name)
                })
                
            }
        })
        })
                
        access_not_allowed.push({
            "id":subobj.department_id,
            "error_message": "Permission ID not found in both list",
            "department_name": dapart_name,
            "user_name": user_name
        })
    }
    
    else {     // FOR ACCES PERMISSIONS NOT FOUND
        let user_name=[];
        let depart_name='';
        subobj.name_list.name.map(names => {
            obj.user_master.map(users => {
            if(users.user_code == names){
                
                 obj.department_names.filter(departs => {
                     return departs.d_id == subobj.department_id}
                )
                .map(depart_name => {
                    depart_name=depart_name.department_name,
                    user_name.push(users.user_name)
                })
                
            }
        })
        })
        
        permission_not_found.push({
            "department_name":depart_name,
            "user_name":user_name,
            "error_message":obj.no_permission.error_message
        })
    }
})

final_obj.access_allowed = allName
final_obj.access_not_allowed = access_not_allowed
final_obj.permission_not_found = permission_not_found

console.log(JSON.stringify(final_obj))