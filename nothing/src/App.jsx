import { useEffect,useState } from 'react'
import './App.css'

function App() {
 

  
  return (
    <>

      <div style={{backgroundColor:"#dfe6e9", height:"100vh",display:"flex", justifyContent:"center"}}>
        <div>

          
          <PostCom
            name ={"Priyanka Das"}
            images={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh--jVCN1FxGv7tkgtHWAmOgyprBghmyppSQ&s'}
            follower = {"20,888 follower"}
            time ={"12m ago"}
            description={"How to get hired in 2024?"}
          />
          <PostCom 
            name ={"Sushanta Ruidas "}
            images={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzvSGBY7hGX-6HwG9HlwOR3nHRk1RC4kvpQ&s"}
            follower = {"21,848 follower"}
            time ={"12m ago"}
            description ={"what to know how to win hig? Check out how these folks won $6000 in hounstis"}
          />
          <PostCom
            name ={"Sovana jana"}
            images ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V2ml_PBf6stJ1m3gfj9BxQXnDpOIxJ4cQOkFX5KlX5kLK_epTj4ulMieXwqusxOktTw&usqp=CAU"}
            follower = {"25,828 follower"}
            description={"I lost my job in 2023."}
          />

          <div >
            <Toggle/>
          </div>
        </div>

        
      </div >
      
      

    </>
  )
}


function PostCom( {name,images,follower,description,time}){
  return <div style = {{backgroundColor:"white", color:"black", width:200,height:107,  borderRadius:20, padding:20, margin:20}}>
  <div style={{display:"flex"}}>
    <img src={images} style ={{
      width:25,
      height:25,
      borderRadius:25,
    }}/>

    <div style={{marginLeft:10}}>
      <div>
        <b>
          {name}
        </b>
      </div>
      {time !==undefined && <div style = {{fontSize:12}}>{follower}</div>}
      <div style = {{fontSize:12}}>{time}</div>
      
    </div>

  </div>
  

  <div>
    {description}
  </div>

  </div>

}


function Toggle(){

   const [isVisible,setisVisible]=useState(true);
  function Toggle(){
        setisVisible(!isVisible)

      }

  return <div style ={{display:"flex",justifyContent:"center"}}>
     <button onClick={Toggle} style = {{
      backgroundColor:"#dfe6e9",
      borderEndStartRadius:4,
      borderTopRightRadius:4,
      borderColor:"red",
      justifyContent:"center",

     }}>Toggle massage</button>
      {isVisible && <p>This massage is conditionally rendered</p>}
  </div>
 

}



export default App
