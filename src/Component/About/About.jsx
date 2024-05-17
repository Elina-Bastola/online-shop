import React from 'react'
import imgg from "../../assets/about_img.jpg"
import { Link } from 'react-router-dom'
import aboutsign from '../../assets/About_Signature.png'
import teammember1 from '../../assets/Team_1.jpg'
import teammember2 from '../../assets/Team_2.jpg'
import teammember3 from '../../assets/Team_3.jpg'
import teammember4 from '../../assets/Team_4.jpg'
import customerimg1 from '../../assets/customer_1.jpg'
import customerimg2 from '../../assets/customer_2.jpg'
import './About.scss'
import 'animate.css';
function About() {
  return (
    <>
    <div className="container">
      <div className="pages d-flex gap-2 m-4">
     <Link to='/'> <p className='text-dark'>Home / </p></Link>
     <Link to='/About'> <p className='text-dark'> About Us</p> </Link>
      </div>
   </div>
    <div className="Aboutimg">
      <img src={imgg} alt="" className='rounded-3 shadow w-100 opacity-75' />
      </div>
      {/* <div className="App">
      <div className="photo-profile"></div>
      <div className="numbers">
        <Counter number={105} title="Posts" />
        <Counter number={5175} title="Followers" />
        <Counter number={468} title="Following" />
      </div>
    </div>
    <Counter/> */}
    <div className="About-section ">
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
          <div className="about-contain text-secondary ">
            <p className='m-4 p-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

               <p className='m-4 p-4 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          </div>
 </div>
          <div className="about-sig  text-center p-4 m-4">
            <img src={aboutsign} alt="" />
         
        </div>
        </div>
      <div className="team px-2 m-3 ">
        <h4 className='fs-2 fw-bold'>Meet Our Team</h4>
      </div>
     
 <div className="team-section d-flex justify-content-between ">
 <div className="row">
          <div className="col-lg-3 col-md-6">    
<div className="card rounded-4 shadow my-3">
  <div className="team-img">
  <img src={teammember1} alt="" className='card-img-top '/>
  </div>
  <div className="card-body">
    <h4 className="card-title" >Dr. Allison</h4>
    <div className="cl-job text-uppercase text-secondary">
    Heart Specialist
    </div>
   <div className="hr-line"></div>
   <p className='card-text text-secondary'>Lorem Ipsum is simply dummy text of theprinting and typesetting industry.</p>
  </div>
</div>


  </div>
  <div className="col-lg-3 col-md-6 ps-2">    
<div className="card rounded-4 shadow  my-3">
  <div className="team-img">
  <img src={teammember2} alt="" className='card-img-top ' />
  </div>
  <div className="card-body">
    <h4 className="card-title" >Dr. Michael</h4>
    <div className="cl-job text-uppercase text-secondary">
  Surgeon general
    </div>
   <div className="hr-line"></div>
   <p className='card-text text-secondary'>Lorem Ipsum is simply dummy text of theprinting and typesetting industry.</p>
  </div>
</div>


  </div>
  <div className="col-lg-3 col-md-6 ps-2 ">    
<div className="card rounded-4 shadow my-3">
  <div className="team-img">
  <img src={teammember3} alt="" className='card-img-top'/>
  </div>
  <div className="card-body">
    <h4 className="card-title" >Dr. Jackson</h4>
    <div className="cl-job text-uppercase text-secondary">
 general physician
    </div>
   <div className="hr-line"></div>
   <p className='card-text text-secondary'>Lorem Ipsum is simply dummy text of theprinting and typesetting industry.</p>
  </div>
</div>


  </div>
  <div className="col-lg-3 col-md-6  ps-2">    
<div className="card rounded-4 shadow my-3">
  <div className="team-img">
  <img src={teammember4} alt="" className='card-img-top img-fluid' />
  </div>
  <div className="card-body">
    <h4 className="card-title" >Dr. Jackson</h4>
    <div className="cl-job text-uppercase text-secondary">
    Heart Specialist
    </div>
   <div className="hr-line"></div>
   <p className='card-text text-secondary'>Lorem Ipsum is simply dummy text of theprinting and typesetting industry.</p>
  </div>
</div>


  </div>
  </div>

        </div>
       


</div>
       
</div>
      
     
        <div className="testinomials  ">
          <div className="container">
            <div className="row">
              
              <h2 className='pt-5 mt-5 '>Testinomials</h2>
             
              <div className=" testinomials-item d-flex justify-content-between my-2 py-2 flex-sm-wrap ">
                <div className="col-lg-6 col-12">
           <div className="card mb-3 shadow rounded-3 " style={{maxWidth: 580}}>
  <div className="row  g-3">
    <div className="col-md-4 col-lg-4 col-4 " >
      <img src={customerimg1} className="img-fluid rounded-start m-2" alt="..." />
    </div>
    <div className="col-md-8 col-lg-8 col-8  px-4 text-start">
      <div className="client-body">
     <h5 className="client-name pt-2">   <i class="bi bi-quote text-secondary fs-1"></i>  John Lemeo </h5>
   
        <p className="client-quote py-3">“It’s so good! And I had really been missing wine. Now it’s my go to gift for all my friends and sometimes I drink it still just because I love the taste.”</p>
       
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-6 col-12  d-lg-ps-4 d-ps-0">
    <div className="card mb-3 shadow rounded-3" style={{maxWidth: 580}}>
  <div className="row g-3">
    <div className="col-md-4 col-lg-4 col-4">
      <img src={customerimg2} className="img-fluid rounded-start m-2" alt="..." />
    </div>
    <div className="col-md-8 col-lg-8 col-8 px-4 text-start ">
      <div className="client-body ">
        <h5 className="client-name pt-2"> <i class="bi bi-quote text-secondary fs-1"></i> Michal Kors</h5>
        <p className="client-quote py-3">“It’s so good! And I had really been missing wine. Now it’s my go to gift for all my friends and sometimes I drink it still just because I love the taste.”</p>
        
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
 
</div>
</div>
    </div>

              
            
        
       
    </>
  )
  }


export default About
