// import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {
                monsters.map((elm) => {
                    return (<Card key={elm.id} monster={elm}></Card>);
                })
            }
        </div>
    );
};

// class CardList extends Component {
//     render() {
//         //console.log("rendering card list");
//         const {monsters} = this.props;

//         return <div className='card-list'>
//             {
//                 monsters.map((elm) => {
//                     return (<Card monster={elm}></Card>);
//                 })
//             }
//         </div>;
//     }
// }

export default CardList;