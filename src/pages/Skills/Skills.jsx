import React from 'react';
import './Skills.css';
import MiniRectangle from '../../components/MiniRectangle/MiniRectangle';

export default function Skills() {
   return (
      <section className="h-wrapper" id='skills'>
         <div className="skills flexCenter paddings innerWidth h-container">
            <div className='s-title'>These my Skills</div>
            <div className='s-description'>After years of learning and gaining practical knowledge, I have cultivated a wide array of skills that empower me to approach intricate problems with assurance and ingenuity. Below are a few examples of the skills I have acquired and honed.</div>
            <div className='s-body'>
               <MiniRectangle image='./assets/photo/Icon-React.png' title='React' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-Node.png' title='Node' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-Flutter.png' title='Flutter' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-Bootstrap.png' title='Bootstrap' status='Advanced' />
               <MiniRectangle image='./assets/photo/Icon-HTML.png' title='HTML' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-CSS.png' title='CSS' status='Beginner' />
               <MiniRectangle image='./assets/photo/Icon-Javascript.png' title='Javascript' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-PHP.png' title='PHP' status='Beginner' />
               <MiniRectangle image='./assets/photo/Icon-Dart.png' title='Dart' status='Intermediate' />
               <MiniRectangle image='./assets/photo/Icon-MySQL.png' title='MySQL' status='Beginner' />
               <MiniRectangle image='./assets/photo/Icon-Figma.png' title='Figma' status='Advanced' />
               <MiniRectangle image='./assets/photo/Icon-Gitlab.png' title='Gitlab' status='Beginner' />
            </div>
         </div>
      </section>
   )
}