const x={
    "students_detail": [
      {
        "student_id": 1,
        "name": "abc",
        "roll_number": 10
      },
      {
        "student_id": 2,
        "name": "pqr",
        "roll_number": 12
      }
    ],
    "subject_details": [
      {
        "subject_id": 1,
        "subject_name": "math"
      },
      {
        "subject_id": 2,
        "subject_name": "english"
      }
    ],
    "exam_details": [
      {
        "exam_id": 1,
        "exam_name": "Prelim"
      },
      {
        "exam_id": 2,
        "exam_name": "Main"
      }
    ],
    "mark_details": [
      {
        "id": 1,
        "exam_id": 1,
        "subject_id": 2,
        "student_id": 1,
        "mark": 51
      },
      {
        "id": 2,
        "exam_id": 1,
        "subject_id": 2,
        "student_id": 2,
        "mark": 61
      }
    ]
  }
let student_mark_detail=[]
let detail=[]
let obj={}
let stud_obj={}
let final_obj={}

  x.students_detail.map(stud=>{
    // console.log(stud.name)
    // console.log(stud.roll_number)
    obj['roll_number']=stud.roll_number
    x.mark_details.map(mark=>{
    // console.log(mark.student_id)
    if(mark.student_id==stud.student_id){
        x.exam_details.map(exam=>{
            // console.log(exam.exam_id)
            if(exam.exam_id==mark.exam_id){
                // console.log(exam.exam_name)
             
                // console.log(mark.mark)
                x.subject_details.map(sub=>{
                    // console.log(sub.subject_id)
                    if(sub.subject_id==mark.subject_id){
                        // console.log(sub.subject_name)
                        // SubjectName=sub.subject_name
                        detail.push({
                            subject_name:sub.subject_name,
                            mark:mark.mark
                        })
                        obj[exam.exam_name]=detail
                    }

                })
            }
        })
        stud_obj[stud.name]=obj
    }
    })

})
student_mark_detail.push(stud_obj)

final_obj['student_mark_detail']=student_mark_detail

let t=JSON.stringify(final_obj.student_mark_detail)

// console.log(final_obj.student_mark_detail)
console.log(t)

