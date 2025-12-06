export default function ItemCard({item}) {
    return (
        <div>
            <img src={item.image} alt={item.title} />               
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}€</p>
            <p>Location: {item.location}</p>
        </div>
    )
}