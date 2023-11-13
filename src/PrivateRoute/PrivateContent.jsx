import { useContext } from "react";


const PrivateContent = () => {
    return (
        <div className="text-black w-[88%] mx-auto">
            <h2 className="text-3xl">This is contect show when User login</h2>
            <details>
                <summary>Epcot Center</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aliquam dolore fuga dignissimos atque incidunt ut architecto corporis facilis quidem sint laudantium itaque sapiente hic minus, qui enim? Neque reiciendis autem quos dignissimos ipsum dolores dolore expedita unde blanditiis alias corporis earum nihil perspiciatis vitae minus amet rem numquam quas fuga optio quae consequatur, sapiente dolorum. Vitae quidem laudantium aut.</p>

        </div>
    );
};

export default PrivateContent;