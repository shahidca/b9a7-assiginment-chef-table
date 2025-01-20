import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="md:w-2/3 my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    cards.map(card =>
                        <div key={card.id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img className="w-full "
                                    src={card.recipesImg}
                                    alt="recipes img" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-semibold">{card.recipeName}</h2>
                                <p>{card.shortDescription}</p>
                                <div className="divider"></div>
                                <p className="card-title text-xl font-semibold">ingredients: {card.ingredients.length}</p>
                                <ul>
                                  {
                                    card.ingredients.map((item , index) => (<li className="list-disc ml-6" key={index}>{item}</li>
                                  ))}
                                </ul>
                                <div className="divider"></div>
                                <div className="flex items-center gap-6">
                                    <div className="items-center "><p><i className="fa-regular mr-1  fa-clock"></i> {card.preparingTime}</p></div>
                                    <div><i className="fa-solid mr-1 fa-fire-flame-simple"></i> {card.calories}</div>
                                </div>
                                <div className="card-actions mt-6">
                                    <button className="btn bg-[#0BE58A] rounded-full  border-none text-xl font-semibold px-6">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Cards;