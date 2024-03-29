import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Projects = () => {
  return (
    <div className='gradient'>
    <div className='main_projects'>
    <p className='projects'>PROJECTS</p>
      <div>
        
         <Card className='shadow-lg p-3 mb-5 bg-body-tertiary rounded cards'>
      <CardMedia
        className='individualCards'
        image="https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      
      />
      <CardContent>
        <Typography className='typography'>
          <p className='project-title'>Thali App</p>
        </Typography>
        
      </CardContent>
      <CardActions>
        <button size="" className="button-6" onClick={()=> window.open("https://thethaliapp.netlify.app/", "_blank")}>Visit</button> 
        <button size="" className="button-6" onClick={()=> window.open("https://github.com/muraliaari/Mini-Project", "_blank") }>Repo</button>
      </CardActions>
    </Card>

      </div>

      <div>
           <Card className='shadow-lg p-3 mb-5 bg-body-tertiary rounded cards'>
      <CardMedia
        className='individualCards'
        image="https://i.ytimg.com/vi/U69WL9jInW0/maxresdefault.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography className='typography'>
          <p className='project-title'>Login & Signup(MERN)</p>
        </Typography>
       
      </CardContent>
      <CardActions>
        <button  className="button-6" onClick={()=> window.open("https://login-signups.netlify.app/", "_blank")}>Visit</button>
        <button  className="button-6" onClick={()=> window.open("https://github.com/muraliaari/Signup-and-Login", "_blank")}>Repo</button>
            </CardActions>
            </Card>
        
     </div>

     <div>
           <Card className='shadow-lg p-3 mb-5 bg-body-tertiary rounded cards'>
      <CardMedia
        className='individualCards'
        image="https://static.vecteezy.com/system/resources/thumbnails/005/441/358/small/inventory-management-with-goods-demand-and-stock-supply-tiny-person-concept-vector.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography className='typography'>
          <p className='project-title'>User Inventory(MERN)</p>
        </Typography>
       
      </CardContent>
      <CardActions>
        <button  className="button-6" onClick={()=> window.open("https://muraliaari-user-inventory.netlify.app/", "_blank")}>Visit</button>
        <button  className="button-6" onClick={()=> window.open("https://github.com/muraliaari/Inventory.git", "_blank")}>Repo</button>
            </CardActions>
            </Card>
        
     </div>

    </div>
    </div>
  )
}

export default Projects