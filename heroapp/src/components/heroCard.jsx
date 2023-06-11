import './../style/heroCard.css';

function HeroCard(props) {
    return (
        <div className="hero">
            <h2> {props.name}</h2>
            <div>Вселенная: {props.universe}</div>
            <div>Род занятий: {props.occupation}</div>
            <div>Альтер-эго: {props.alterego}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсилы: {props.superpowers}</div>
            <img src={props.url} alt={'изображение героя'} />
            <div className='info'> {props.info}</div>
        </div>

    );
}

export default HeroCard;