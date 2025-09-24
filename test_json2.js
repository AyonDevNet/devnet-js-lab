 
                      fetch("https://jsonplaceholder.typicode.com/comments")
                      .then(res=>res.json())
                      .then(data=>commentData(data))


                      const commentData=(comments)=>{
                       const cmntID = document.getElementById("main-id")
                       for(const comment of comments){

                         const contianerDiv = document.createElement('div')
                         contianerDiv.classList.add("cards")
                         contianerDiv.innerHTML = `
                         
                          <h3>Post ID : ${comment.postId}</h3>
                           <p>ID Number : ${comment.id}</p> 
                           <p>User Name : ${comment.name}</p>
                           <p>User email : ${comment.email} </p>
                           <p>Comments : ${comment.body}</p>         
                         
                         `
                         
                            cmntID.appendChild(contianerDiv)
                       }

                      }
