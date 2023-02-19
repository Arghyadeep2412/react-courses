import { Component } from "react";
import './card.styles.css';

const Card = ({monster}) => {
    const {name, email, id} = monster;
    return(
        
        <div key={id} className='card-container'>
            <img alt={`monster - ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        
    );
};

// class Card extends Component {
//     render() {
//         //console.log("card component");
//         // const {monster} = this.props;
//         const {name, email, id} = this.props.monster;
//         return(
//             <div>
//                 <div key={id} className='card-container'>
//                     <img alt={`monster - ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}></img>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         );
//     }
// }

export default Card;