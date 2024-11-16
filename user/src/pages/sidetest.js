// import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
// import { Link } from 'react-router-dom';


// function Sidebar() {
//   return (
//     <Menu>
	
//   <aside id="sidebar" class="sidebar">

//     <ul class="sidebar-nav" id="sidebar-nav">

//       <li class="nav-item">
//         <Link to ="/Header">
//           <i class="bi bi-grid"></i>
//           <span>Grow Smart</span>
      
//         </Link>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-menu-button-wide"></i><span>Agriculture</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           {/* <li>
//           <Link to="/Login"><i class="bi bi-circle"></i>

// <span>Login</span>
// </Link>
//           </li> */}
//           <li>
//             <Link to="/Registration">Registration</Link>
//           </li>
//           <li>
//           <Link to="/Login">Login</Link>
//           </li>
//           <li>
            
//               <i class="bi bi-circle"></i><span>Monsoon Agriculture</span>
           
//           </li>
          
        
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-journal-text"></i><span>Fruit farming</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="forms-elements.html">
//               <i class="bi bi-circle"></i><span>Summer Fruits</span>
//             </a>
//           </li>
//           <li>
//             <Link to="/Postshow">hello</Link>
//           </li>
//           <li>
//             <a href="forms-editors.html">
//               <i class="bi bi-circle"></i><span>Winter farming</span>
//             </a>
//           </li>
         
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-layout-text-window-reverse"></i><span>Vagetable farming</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="tables-general.html">
//               <i class="bi bi-circle"></i><span>Summer Vagetables</span>
//             </a>
//           </li>
//           <li>
//             <a href="tables-data.html">
//               <i class="bi bi-circle"></i><span>Winter Vagetables</span>
//             </a>
//           </li>
//           <li>
//             <a href="tables-general.html">
//               <i class="bi bi-circle"></i><span>Monsoon farming</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-bar-chart"></i><span>Gardaning</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//           <li>
//             <a href="charts-chartjs.html">
//               <i class="bi bi-circle"></i><span>Flowers</span>
//             </a>
//           </li>
//           <li>
//             <a href="charts-apexcharts.html">
//               <i class="bi bi-circle"></i><span>plants</span>
//             </a>
//           </li>
   
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-gem"></i><span>Fertilizers</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//         <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Organic Fertilizer</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Nitrogen Fertilizer</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-remix.html">
//               <i class="bi bi-circle"></i><span>Phosphorus Fertilizer</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-boxicons.html">
//               <i class="bi bi-circle"></i><span>Potassium Fertilizer</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Sulphur Fertilizer</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Calcium Fertilizer</span>
//             </a>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <a class="nav-link collapsed" data-bs-target="#icons-brr" data-bs-toggle="collapse" href="#">
//           <i class="bi bi-gem"></i><span>DiseaseControl & Management</span><i class="bi bi-chevron-down ms-auto"></i>
//         </a>
//         <ul id="icons-brr" class="nav-content collapse " data-bs-parent="#sidebar-nav">
//         <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span></span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-bootstrap.html">
//               <i class="bi bi-circle"></i><span>Flower Disease</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-remix.html">
//               <i class="bi bi-circle"></i><span>Vagetable Disease</span>
//             </a>
//           </li>
//           <li>
//             <a href="icons-boxicons.html">
//               <i class="bi bi-circle"></i><span>Land Disease</span>
//             </a>
//           </li>
       
       
//         </ul>
//       </li>
    
//     </ul>

//   </aside>
//     </Menu>
//   );
// }export default Sidebar