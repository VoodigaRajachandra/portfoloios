

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Daprojects from './components/Daprojects';
import Projects from './components/Projects';

function App() {
  return (
   <>
   <div className='container'style={{backgroundColor:'#4ABDAC',height:'auto'}}>
     <h1 className='text-center pt-2 shadow-lg' style={{color:'#000'}}>Welcome to My Portfolio</h1>
     
       <About/>
       <h1 className='text-center pt-2 shadow-lg' style={{color:'#000'}}>Machine Learning Projects</h1>
       <Projects/>
       <h3 className='text-center pt-2 shadow-lg' style={{color:'#000'}}>Machine Learning Skills</h3>
      
         
           <div className=' text-center d-flex justify-content-center'>
           <h6  style={{color:'whitesmoke'}}>1.Problem Formulation</h6>
          <h6 className=' mx-2' style={{color:'whitesmoke'}}>2.Data Tidying</h6>
          <h6  style={{color:'whitesmoke'}}>3.Preprocessing</h6>
          <h6 className=' mx-2' style={{color:'whitesmoke'}}>4.Train Test Split</h6>
          <h6  style={{color:'whitesmoke'}}>5.Model Building</h6>
          <h6 className=' mx-2' style={{color:'whitesmoke'}}>6.Validation and Model Accuracy</h6>
          <h6  style={{color:'whitesmoke'}}>7.Prediction</h6>
           
        
        
          
       </div>
       <h1 className='text-center pt-2 shadow-lg' style={{color:'#000'}}>Data Analysis Projects</h1>
       <Daprojects/>
       <h3 className='text-center pt-2 shadow-lg' style={{color:'#000'}}>Data Analysis Skills</h3>
       <div className=' text-center d-flex justify-content-center'>
           <h6  style={{color:'whitesmoke'}}>1.Data Collection</h6>
          <h6 className=' mx-2' style={{color:'whitesmoke'}}>2.Data cleaning</h6>
          <h6  style={{color:'whitesmoke'}}>3.Exploratory Data Analyis</h6>
          <h6 className=' mx-2' style={{color:'whitesmoke'}}>4.Data Visulaization</h6>
          <h6  style={{color:'whitesmoke'}}>5.Gain Insights</h6>
          
        
        
          
       </div>
       <div className='bg-warning text-success  mt-2 py-2 text-center shadow-lg'>Made By Voodiga Raja chandra &copy; 2022</div>
   </div>
   </>
  );
}

export default App;
