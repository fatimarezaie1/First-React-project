import React from "react" 
import picture from './image/fatima.jpg'

export default function InfoComponent(){
    return(
        <div className="info">
            <div className="headers">
                    <img  src={picture} className='picture' height='300px' />
                    <div >
                        <h1>Fatima Rezaie</h1>
                        <h3>Frontend Developer </h3>
                        <h4>laurasmith.website </h4>
                    </div>
            </div>
            <div className="flex">
                <input type="submit" value="Emial" placeholder="email"  className="email"/>
                <input type="submit" value="LinkedIn" placeholder="email" className="linkedIn" />
            </div>
           
        </div>
    )
}