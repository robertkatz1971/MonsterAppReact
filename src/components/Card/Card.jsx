import './Card.styles.css';

const Card = ({item}) => {
    const {id, name, email} = item;
    return (
        <div className='card-container' key={id}>
        <img 
            src={`https://robohash.org/${id}?set=set2&size=80x80`} 
            alt={`monster ${id}`} 
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    );
};
// class Card extends Component {
//     render () {
//         const {id, name, email} = this.props.item;

//         return (
//             <div className='card-container' key={id}>
//                 <img 
//                     src={`https://robohash.org/${id}?set=set2&size=80x80`} 
//                     alt={`monster ${id}`} 
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;