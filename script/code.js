const sortList = document.querySelector ("#sort")
const input = document.querySelector(".input") //collecting from input class
const submit_Task = document.querySelector(".submit")
const displayList = document.querySelector ("#displayList")
const edit = document.querySelector ('#edit')
let list = []

//-----------intake of info
submit_Task.addEventListener ("click", (submit) => {
    // event.preventDefault()
    // if (input.value){
    list.push(input.value)
    input.value = ""
    localStorage.setItem("toDoList", JSON.stringify(list))
    })
    
//-------------display of info
submit_Task.addEventListener ("click", (display)=>{
// evnt.preventDefault()
localStorage.setItem("toDoList", JSON.stringify(list))


document.querySelector(".output").innerHTML = ""
list.forEach((list)=>{
    document.querySelector(".output").innerHTML += `
    <div class="card">
    <ul type>${list}</ul type = "checkbox">
        <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
                <i class="bi bi-pencil" data-bs-toggle="modal"  data-bs-target="#exampleModal" id = "edit" style=" color: white;border: 2px solid white; text-align: center;font-weight: 800;margin: 3px;background-color: black;padding:10px;border-radius:4px"></i>
              </div>
              <div class="col">
                <i class="bi bi-trash3-fill"id = "del" style=" color: white;border: 2px solid white; text-align: center;font-weight: 800;margin: 3px;background-color: black;padding:10px;border-radius:4px"></i>
              </div>
            </div>
          </div>
</div>


        `
      
})

})
// sort
function sort(){
    list.sort();
    localStorage.setItem("toDoList", JSON.stringify(list))
    document.querySelector(".output").innerHTML = ""
    list.forEach((list)=>{
        document.querySelector(".output").innerHTML += `
        <div class="card">
        <ul type>${list}</ul type = "checkbox">
            <div class="container text-center">
                <div class="row align-items-center">
                  <div class="col">
                    <i class="bi bi-pencil" data-bs-toggle="modal"  data-bs-target="#exampleModal" id = "edit" style=" color: white;border: 2px solid white; text-align: center;font-weight: 800;margin: 3px;background-color: black;padding:10px;border-radius:4px"></i>
                  </div>
                  <div class="col">
                    <i class="bi bi-trash3-fill"id = "del" style=" color: white;border: 2px solid white; text-align: center;font-weight: 800;margin: 3px;background-color: black;padding:10px;border-radius:4px"></i>
                  </div>
                </div>
              </div>
    </div>
    
    
            `
    
})}
// clear storage
function clearStorage(){
    localStorage.clear();
    location.reload();
}