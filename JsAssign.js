/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_ID, _name, _location, _typeForsedt, _landArea) {
    const nftMetadata = {
        itemId: _ID,
        name: _name,
        location: _location,
        forestType: _typeForsedt,
        area: _landArea
    };
    NFTs.push(nftMetadata);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + NFTs[i].itemId);
        console.log("Name: " + NFTs[i].name);
        console.log("Location: " + NFTs[i].location);
        console.log("Forerst Type: " + NFTs[i].forestType);
        console.log("Land Area: " + NFTs[i].area);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs minted: " + NFTs.length);
}

mintNFT("ssdf49", "Sundarbans", "India", "Mangrove Rainforest", "10,000 km²");
mintNFT("gfeb58", "Western Ghats", "India", "Rainforest", "160,000 km²");
mintNFT("assf37", "Amazon Rainforest", "South America", "Rainforest", "5.5 million km²");
mintNFT("awrg68", "Andaman and Nicobar Islands", "India", "Tropical Rainforest", "6,408 km²");
mintNFT("aerg69", "Congo Rainforest", "Central Africa", "Rainforest", "3.7 million km²");

listNFTs();
getTotalSupply();

