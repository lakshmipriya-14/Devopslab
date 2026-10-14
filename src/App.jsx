import {useState} from 'react';

function App()
{
   let receipes=[
        {
            name:"Biryani",Ingredients:"Rice,Mutton",imageurl:" "
        },
        {
            name:"FriedRice",Ingredients:"Rice,Mutton",imageurl:" "
        },
        {
            name:"Noodles",Ingredients:"Rice,Mutton",imageurl:" "
        }
    ]
    const [ingredient,setingredients]=useState("");
    return(
        <div>
            <h3>Receipe finder</h3>
        </div>
    )
}
export default App;