import {FaReact,FaNode} from "react-icons/fa"
import {SiCss3,SiHtml5,SiMongodb} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import assets



import Majestic from '../assets/Majestic Interiors Homepage.png'

import Dastefarakh1 from '../assets/DF1'
import Dastefarakh2 from '../assets/DF2'




import chicandcozy1 from '../assets/Chick&Cozy1.png'
import chicandcozy2 from '../assets/Chick&Cozy2.png'
import chicandcozy3 from '../assets/Chick&Cozy3.png'
import chicandcozy4 from '../assets/Chick&Cozy4.png'


import cofee from '../assets/cofee.png'


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

/* <-------------------------------------------------1 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
  <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
    <SplideSlide>
     <img src={Dastefarakh1} alt="DasteFarakh Screenshot 1"/>
    </SplideSlide>
    <SplideSlide>
     <img src={Dastefarakh2} alt="DasteFarakh Screenshot 2"/>
    </SplideSlide>
  </Splide>
</div>

<div>

  <h3 className="about_project">DasteFarakh</h3>

  <p className='project__description'>
   DasteFarakh is a non-profit organization dedicated to supporting underprivileged communities through charitable initiatives and social welfare programs. The website provides information about ongoing projects, donation opportunities, and ways to get involved, making it easy for visitors to contribute and support the cause.
  </p>

  <ul className='project__stack' >
   <li className='project__stack-item' id='stacks'>
    <SiHtml5 size={40} />
    <IoLogoJavascript size={40} />
    <SiCss3 size={40}/>
    <FaReact size={50}/>
   </li>
  </ul>

  <div id='b'>
   <a href="https://dastefarakh.org/" target="_blank">
    <span type='button' className='btn btn--outline'>  Watch Live </span>
   </a>
   {/* <a href="https://github.com/Atteq786/DasteFarakh" target="_blank" >
    <span type='button' className='btn btn--outline'>  View Code </span>
   </a> */}
  </div>

</div> 

</div>}

</div>


</div> 


      </div>}
      

      {/* --------------------------------------------------------------------------------------- */}
      

    {/* <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Rpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Rpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Rpreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Hotel Reservation App</h3>

        <p className='project__description'>
 The Beach Resort App is a Web application focused on providing a seamless booking experience for beachside accommodations. It allows users to easily reserve rooms, check availability, and access essential information about the resort, ensuring a convenient stay.      </p>
   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <FaReact size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://resortsbyahsaan-550a33.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/ahsaanullah0088/React-resorts" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div> */}

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={chicandcozy1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={chicandcozy2} alt="Image 2"/>
           </SplideSlide>
           <SplideSlide>
           <img src={chicandcozy3} alt="Image 3"/>
           </SplideSlide>
           <SplideSlide>
           <img src={chicandcozy4} alt="Image 4"/>
           </SplideSlide>



        </Splide>
</div>

<div>

  <h3 className="about_project">Chic & Cozy Ecommerce</h3>

  <p className='project__description'>
  Chic & Cozy is a premium online store offering high-quality home furnishings at affordable prices. The website features a user-friendly interface with sections for Home, Products, About, and Contact, providing a seamless shopping experience. Customer testimonials highlight the exceptional quality, timely delivery, supportive customer service, and hassle-free return policy.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://chicandcozy.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          {/* <a href="https://github.com/ahsaanullah0088/Notepad"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
     */}
     </div>


</div> 


</div>

{/* ----------------------------Project 3------------------------------- */}
<div className='project' id='project'>

<div>
  <Splide 
    options={ { rewind: true, gap: '1rem', heightRatio: .53 } } 
    aria-label="React Splide Example"
  >
    <SplideSlide>
      <img src={Majestic} alt="MajesticInteriors"/>
    </SplideSlide>
  </Splide>
</div>

<div>

  <h3 className="about_project">Majestic Interiors</h3>

  <p className='project__description'>
  Welcome to Majestic Interiors, your destination for elegance and sophistication. Our site features Popular Places, Design Trends, Online Packages, Register, and Start Your Journey pages. Dive into luxurious design inspirations and transform your spaces with style.
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://majestic-interiors.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          {/* <a href="https://github.com/ahsaanullah0088/Tours"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a> */}
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}

{/* <div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
              <img src={cc1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={cc2} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <img src={cc3} alt="Image 3" />
            </SplideSlide>
            <SplideSlide>
              <img src={cc4} alt="Image 4" />
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Chic & Cozy</h3>

  <p className='project__description'>
            Chic & Cozy is a sophisticated home decor project offering exclusive and contemporary pieces designed to transform living spaces. It provides unparalleled comfort and style, elevating everyday home environments.
            </p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://chic-cozy.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          { <a href="https://github.com/ahsaanullah0088/Genimi_clone"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a> }
    
     </div>


</div> 


</div> */}

{/* <-------------------------------------------------3 start-------------------------------------------> */}

{/* <div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Epreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Epreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Epreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">StartUps</h3>

  <p className='project__description'> This startups website Contain main 4 pages Frist is Home page, Second is About page, Third is Services page and Fourth is Contact page. These pages are fully responsive and user friendly.I use ReactJs for front-end and NodeJs for back-end. I use animations and transitions to make it more attractive.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://monumental-pegasus-1080a3.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>
          

          <a href="https://github.com/ahsaanullah0088/startup"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div> */}

{/* <-------------------------------------------------3 end-------------------------------------------> */}
{/* <div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={cofee} alt="Image 1"/>
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Cofee website</h3>

  <p className='project__description'>
    Its a cofee store website in which i use React js for front-end . I use animations and transitions to make it more attractive. I use tailwind css for styling.
</p>
  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://cofee-websitebyahsaan.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://cofee-websitebyahsaan.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div> */}
{/* <-------------------------------------------------2 end-------------------------------------------> */}
{/* 
<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={IMDB} alt="Image 1"/>
            </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">IMDB</h3>

  <p className='project__description'> ThiS IMDB project contains data which is fetch from api and show on the website. This data is fetched form IMDB api. I use ReactJs for front-end and tailwind css for styling.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://imdbbyahsaaan-7e2f5d.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>
          

          <a href="https://imdbbyahsaaan-7e2f5d.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div> */}

    </section>
  )
}

export default Projects