import React,{useState} from "react";
import Generate from "./Generate";
import data from "./images.json";



export default function Roles (props) {

    // Set variables for all role image variables. 
    const [offImage, setOffImage] = useState('');
    const [jgImage, setJgImage] = useState('');
    const [midImage, setMidImage] = useState('');
    const [carryImage, setCarryImage] = useState('');
    const [suppImage, setSuppImage] = useState('');

    const [offlane, setOfflane] = useState('');
    const [jungle, setJungle] = useState('');
    const [midlane, setMidlane] = useState('');
    const [carry, setCarry] = useState('');
    const [support, setSupport] = useState('');

    const[offlaneHero, setOfflaneHero] = useState('');
    const[jungleHero, setJungleHero] = useState('');
    const[midHero, setMidHero] = useState('');
    const[carryHero, setCarryHero] = useState('');
    const[supportHero, setSupportHero] = useState('');

    
    //Setting default variables 
    const teamSize = 5;
    //Creating array for numbers to represent characters 
    let imageIndex = [];
    //Creating Array for ID's
    let id = 0;
    let ids = [];
    
    
    // Puts all heros into an array for random selection
    const randomHeroArray = data["Random-Heros"].Images;
    const randomNames = data["Random-Heros"].Heros;

    //Puts all heros into arrays for correct selection
    const offlaneArray = data["Correct-Heros"].Offlane.Images;
    const offlaneNames = data["Correct-Heros"].Offlane.Heros;
    const offlaneID = data["Correct-Heros"].Offlane.ID;

    const jungleArray = data["Correct-Heros"].Jungle.Images;
    const jungleNames = data["Correct-Heros"].Jungle.Heros;
    const jungleID = data["Correct-Heros"].Jungle.ID;

    const midArray = data["Correct-Heros"].Mid.Images
    const midNames = data["Correct-Heros"].Mid.Heros
    const midID = data["Correct-Heros"].Mid.ID;

    const carryArray = data["Correct-Heros"].Carry.Images
    const carryNames = data["Correct-Heros"].Carry.Heros
    const carryID = data["Correct-Heros"].Carry.ID;

    const supportArray = data["Correct-Heros"].Support.Images
    const supportNames = data["Correct-Heros"].Support.Heros
    const supportID = data["Correct-Heros"].Support.ID;

    
    //Generate an array of numbers for the random selection
    function randomIndex() {
        imageIndex = [];
    
        do {
            // generate random number 
            let temp = Math.floor(Math.random() * randomHeroArray.length);
            // add to array if it doesn't already exist
            if (!imageIndex.includes(temp)) {
                imageIndex.push(temp);
            }
        } while (imageIndex.length < teamSize);

        
    };
    //Displays random heros
    function displayRandom() {
        randomIndex();

        /**SET PICTURES TO THE RANDOM SELECTIONS */
         setOfflane('OFFLANE');
         setOffImage(randomHeroArray[imageIndex[0]]);
         setOfflaneHero(randomNames[imageIndex[0]]);

         setJungle('JUNGLE');
         setJgImage(randomHeroArray[imageIndex[1]]);
         setJungleHero(randomNames[imageIndex[1]]);

         setMidlane('MIDLANE');
         setMidImage(randomHeroArray[imageIndex[2]]);
         setMidHero(randomNames[imageIndex[2]]);

         setCarry('CARRY');
         setCarryImage(randomHeroArray[imageIndex[3]]);
         setCarryHero(randomNames[imageIndex[3]]);

         setSupport('SUPPORT');
         setSuppImage(randomHeroArray[imageIndex[4]]);
         setSupportHero(randomNames[imageIndex[4]]);

        
    }


    //Generate array of numbers for correct selection
    function correctIndex() {
        imageIndex = [];
        // setting a blank array to hold the id's of the characters 
        //to ensure there are no duplicates 
        id = 0;
        ids = [];

        //Generate Off Lane index
        let temp = Math.floor(Math.random() * offlaneArray.length);
        id = offlaneID[temp];
        ids.push(id);
        imageIndex.push(temp);
        
        

        //Generate Jungle index
        temp = 0;
        do {
            // Generate a number
            temp = Math.floor(Math.random() * jungleArray.length);
            id = jungleID[temp];
            if (!ids.includes(id)) {
                ids.push(id);
                imageIndex.push(temp);
            }

        } while (imageIndex.length < 2)

        


        //Generate Mid Lane index
        temp = 0;
        do {
            // Generate a number
            temp = Math.floor(Math.random() * midArray.length);
            id = midID[temp];
            if (!ids.includes(id)) {
                ids.push(id);
                imageIndex.push(temp);
            }

        } while (imageIndex.length < 3)


        //Generate Carry index
        temp = 0;
        do {
            // Generate a number
            temp = Math.floor(Math.random() * carryArray.length);
            id = carryID[temp];
            if (!ids.includes(id)) {
                ids.push(id);
                imageIndex.push(temp);
            }

        } while (imageIndex.length < 4)

        
        //Generate Support index
        temp = 0;
        do {
        // Generate a number
        temp = Math.floor(Math.random() * supportArray.length);
        id = supportID[temp];
        if (!ids.includes(id)) {
            ids.push(id);
            imageIndex.push(temp);
        }

        } while (imageIndex.length < 5)
    } 

    //Displays correct heros 
    function displayCorrect() {
        correctIndex()

        setOfflane('OFFLANE');
        setOffImage(offlaneArray[imageIndex[0]]);
        setOfflaneHero(offlaneNames[imageIndex[0]]);

        setJungle('JUNGLE');
        setJgImage(jungleArray[imageIndex[1]]);
        setJungleHero(jungleNames[imageIndex[1]]);

        setMidlane('MIDLANE');
        setMidImage(midArray[imageIndex[2]]);
        setMidHero(midNames[imageIndex[2]]);

        setCarry('CARRY');
        setCarryImage(carryArray[imageIndex[3]]);
        setCarryHero(carryNames[imageIndex[3]]);

        setSupport('SUPPORT');
        setSuppImage(supportArray[imageIndex[4]]);
        setSupportHero(supportNames[imageIndex[4]]);
    }


    
     
    // Function that runs when Generate button is clicked. 
    const handleGenerateClick = () => {

        let iterations = 0;

        if (props.selectedFilter === "correct") {
            // Do something for correct roles
            const interval = setInterval(() => {
            
                setOffImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setJgImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setMidImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setCarryImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setSuppImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                if(iterations >= 15) {
                    clearInterval(interval);
                    displayCorrect();
                }
                iterations += 1;
            }, 80)
            
          } else if (props.selectedFilter === "random") {
            // Do something for random roles
            const interval = setInterval(() => {
            
                setOffImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setJgImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setMidImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setCarryImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                setSuppImage(randomHeroArray[Math.floor(Math.random() * randomHeroArray.length)]);
                if(iterations >= 15) {
                    clearInterval(interval);
                    displayRandom();
                }
                iterations += 1;
            }, 80)
            
            
        }
    };

    return (
        <>
            <div className="my-4 px-3 ">
                <div className="flex justify-center bg-#d6d3d1 gap-2 ">
                    
                    <div className="text-white text-center "> 
                        <span> {offlane} </span>
                        <img className="w-image-width h-image-height rounded-2xl" src={offImage} alt=""></img>
                        <span className="">{offlaneHero}</span>
                    </div>
                        
                    <div className="text-white text-center "> 
                        <span> {jungle} </span>
                        <img className="w-image-width h-image-height rounded-2xl" src={jgImage} alt=""></img>
                        <span className="">{jungleHero}</span>
                        
                    </div>

                    <div className="text-white text-center"> 
                        <span> {midlane} </span>
                        <img className="w-image-width h-image-height rounded-2xl"  src={midImage} alt=""></img>
                        <span className="">{midHero}</span>
                    </div>

                    <div className="text-white text-center W-7 "> 
                        <span> {carry} </span> 
                        <img className="w-image-width h-image-height rounded-2xl"  src={carryImage} alt=""></img>
                        <span className="">{carryHero}</span>
                    </div>

                    <div className="text-white text-center"> 
                        <span> {support} </span> 
                        <img className="w-image-width h-image-height rounded-2xl"  src={suppImage} alt=""></img>
                        <span className="">{supportHero}</span>
                    </div>

                </div>
            </div>
            <Generate onGenerateClick={handleGenerateClick} />
        </>
    )
}