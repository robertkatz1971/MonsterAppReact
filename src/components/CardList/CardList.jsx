import { Component } from 'react';
import Card from '../Card/Card.jsx'
import './CardList.styles.css';

class CardList extends Component {

    render () {
        const { cards } = this.props;
        
        return (
            <div className='card-list'>
                {cards.map((item) => {
                    return <Card item={item} />
                })}
            </div>
        );
    }
}

export default CardList;





