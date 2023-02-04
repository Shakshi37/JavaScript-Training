const x= {
    "company_details": [
      {
        "company_name": "Raj Exports",
        "company_code": 1206,
        "contact_person": [
          {
            "name": "Rakesh Patel",
            "phone_number": 987654321,
            "fax_number": 98765
          },
          {
            "name": "Kevin Desai",
            "phone_number": 987650000,
            "fax_number": 75757
          },
          {
            "name": "Trushal Desai",
            "phone_number": 7778886667,
            "fax_number": 46464
          }
        ],
        "company_country": "India",
        "company_address": [
          {
            "main_address":{"building_number": "#78",
            "street_name": "royal road",
            "landmark": "next to tea shop",
            "remark": "own building",
            "country": "India",
            "state": "Gujarat",
            "city": "Surat",
            "pin": 395005
          }
          },
          {
            "other_address": {
              "building_number": "E-3456",
              "street_name": "Ring road",
              "landmark": "-",
              "remark": "blue shop",
              "country": "India",
              "state": "Maharastra",
              "city": "Mumbai",
              "pin": 398887
            }
          }
        ]
      },
      {
        "company_name": "T-Rax Exports",
        "company_code": 8974,
        "contact_person": [
          {
            "name": "John F",
            "phone_number": 5555665556,
            "fax_number": 98765
          },
          {
            "name": "Revin TD",
            "phone_number": 6664456556,
            "fax_number": 75757
          },
          {
            "name": "Dsuza Ron",
            "phone_number": 776533456,
            "fax_number": 46464
          }
        ],
        "company_country": "Canada",
        "company_address": [
          {
            "building_number": "U-897",
            "street_name": "Wallferd Street",
            "landmark": "Next to Rose gold",
            "remark": "-",
            "country": "Canada",
            "state": "New Bronsweak",
            "city": "New Bronsweak",
            "pin": "UAD-332"
          },
          {
            "other_address": {
              "building_number": "E-3456",
              "street_name": "Fiona Street",
              "landmark": "-",
              "remark": "Tea Blue",
              "country": "UK",
              "state": "Wales",
              "city": "Wales",
              "pin": "UK-332"
            }
          }
        ]
      }
    ]
  }
let country;
let company_name;
let final_address=[]
let Output1=[]
let c_address
let c_code
let c_person
let Output2=[]
let country_name=[]


 x.company_details.map(cdetail=>{
    // console.log(cdetail.company_address)
    country=cdetail.company_country
    country_name.push(cdetail.company_country)
    company_name=cdetail.company_name
    c_address=cdetail.company_address
        //  console.log(cdetail.company_code)
        c_code=cdetail.company_code
        //  console.log(cdetail.contact_person)
         c_person=cdetail.contact_person
        Output1.push({
            "country:":country,
            "company_name":company_name ,
            "company_wise_address":c_address      
     })
     

     Output2.push({
        "company_code:": c_code,
        "cp_name_list:":c_person
     })
    })


//  var t=JSON.stringify(Output1)
// console.log(Output2)
console.log(JSON.stringify({
    "company_name_list": Output1,
    "cp_data":Output2,
    "country_list":country_name
}))
// console.log(final_address)