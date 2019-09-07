const router = require('express').Router();
const MenuSchema = require('./../schema/MenuSchema');


router.get("", (req, res)=>{
    // Retrieve the menu
    const {
        mainMenu
    } = req.query;

    MenuSchema.find({inMainMenu: mainMenu},(err,data)=>{
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        else{
            res.json(data);
        } 
    });
});

router.post("/create", (req,res)=>{
    //TODO's: 
    //  Sanitize input
    //  Make sure that if inMainMenu == true that the user has the authorization to do so

    // Request variables
    const {
        name,
        description,
        price,
        inMainMenu,
        changeAbleItems,
        changeItems
    } = req.body;

    // Create new object for DB
    const model = new MenuSchema({
        name,
        description,
        price,
        inMainMenu,
        changeAbleItems,
        changeItems,
    });

    // Save to DB
    model.save((err, MenuItem)=>{
        if(err){
            console.log(err);
            res.send(500);
        }
        else{
            res.json(MenuItem);
        }
    });
});

module.exports = router;