const modelClothes = require('../../models/Products/Clothes')
const modelFood = require('../../models/Products/Food')
const modelHygiene = require('../../models/Products/Hygiene')

const modelInventory = require('../../models/Gestion/Inventory')
const modelBatch = require('../../models/Gestion/Batch')

const modelKind = require('../../models/Sub Tables/Kind')
const modelType = require('../../models/Sub Tables/TypePet')
 
const {Encrypt, Decrypt} = require('../../utils/Secure')

const Howmanythere = async  (req, res) => {
    try{
        const allFood = await modelFood.findAll({raw : true});
        const allClothes = await modelClothes.findAll({raw : true});
        const allHigiene = await modelHygiene.findAll({raw : true});

        const send = [
            {type : "Total", number : `${allFood.length + allClothes.length + allHigiene.length}`},
            {type : "Comida" , number : `${allFood.length}`},
            {type : "Higine" , number :`${allHigiene.length}`},
            {type : "Ropa", number : `${allClothes.length}`},
        ]
        res.status(200).json({
            message : "Sucessful1",
            set : Encrypt(send)
        })
    }catch(err){
        console.log(err)
        res.status(200).json({
            message : err
        })
    }
}

const sendBox = async (req, res) => {
    let backgroundFondo = "";
    let backgroundProgr = "";
    let set = {};
    const {
        id
    } = req.params
    try {
        const inventory = await modelInventory.findByPk(id);
        
        if (!inventory) {
            return res.status(404).json({ message: 'Inventory not found' });
        }

        const allBatch = await modelBatch.findByPk(inventory.BATCH);
        if (!allBatch) {
            return res.status(404).json({ message: 'Batch not found' });
        }

        if (inventory.KIND_OF_PRODUCT === "FOOD") {
            const oneFood = await modelFood.findByPk(inventory.PRODUCT);
            if (!oneFood) {
                return res.status(404).json({ message: 'Food product not found' });
            }
            const oneKind = await modelKind.findByPk(oneFood.FKIND);
            const oneType = await modelType.findByPk(oneFood.FFOR);

            backgroundFondo = "#E9F7EF";
            backgroundProgr = '#48C9B0';
            set = {
                backgroundFondo: backgroundFondo,
                backgroundProgr: backgroundProgr,
                Product: oneFood.FNAME,
                Section: oneKind.KIND,
                Units: `${inventory.TOTAL_UNITS}`,
                UnitsL: `${allBatch.UNITS}`,
                Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                Lote: `${inventory.BATCH}`,
                Type: oneType.ANIMAL,
                Value: `${inventory.PRICE}`
            };
        } else if (allInventory.KIND_OF_PRODUCT === "HYGIENE") {
            const oneHygiene = await modelHygiene.findByPk(allInventory.PRODUCT);
            if (!oneHygiene) {
                return res.status(404).json({ message: 'Hygiene product not found' });
            }
            const oneKind = await modelKind.findByPk(oneHygiene.HKIND);
            const oneType = await modelType.findByPk(oneHygiene.HFOR);

            backgroundFondo = "#D4E6F1";
            backgroundProgr = '#5DADE2';
            set = {
                backgroundFondo: backgroundFondo,
                backgroundProgr: backgroundProgr,
                Product: oneHygiene.HNAME,
                Section: oneKind.KIND,
                Units: `${inventory.TOTAL_UNITS}`,
                UnitsL: `${allBatch.UNITS}`,
                Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                Lote: `${inventory.BATCH}`,
                Type: oneType.ANIMAL,
                Value: `${inventory.PRICE}`
            };
        } else if (allInventory.KIND_OF_PRODUCT === "CLOTHES") {
            const oneClothe = await modelClothes.findByPk(allInventory.PRODUCT);
            if (!oneClothe) {
                return res.status(404).json({ message: 'Clothes product not found' });
            }
            const oneKind = await modelKind.findByPk(oneClothe.CKIND);
            const oneType = await modelType.findByPk(oneClothe.CFOR);

            backgroundFondo = "#FEF9E7";
            backgroundProgr = '#48C9B0';
            set = {
                backgroundFondo: backgroundFondo,
                backgroundProgr: backgroundProgr,
                Product: oneClothe.CNAME,
                Section: oneKind.KIND,
                Units: `${inventory.TOTAL_UNITS}`,
                UnitsL: `${allBatch.UNITS}`,
                Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                Lote: `${inventory.BATCH}`,
                Type: oneType.ANIMAL,
                Value: `${inventory.PRICE}`
            };
        }

        res.status(200).json({ set :
            Encrypt(set)
         });

    } catch (err) {
        res.status(500).json({
            message: 'Server Error',
            error: err.message
        });
    }
};

const sendBoxs = async (req, res) => {
    try {
        const allInventories = await modelInventory.findAll();
        if (!allInventories || allInventories.length === 0) {
            return res.status(404).json({ message: 'No inventory found' });
        }

        const send = await Promise.all(allInventories.map(async (inventory) => {
            const allBatch = await modelBatch.findByPk(inventory.BATCH);
            if (!allBatch) {
                throw new Error(`Batch not found for inventory id ${inventory.ID}`);
            }

            let box = {};
            let backgroundFondo = "";
            let backgroundProgr = "";

            if (inventory.KIND_OF_PRODUCT === "FOOD") {
                const oneFood = await modelFood.findByPk(inventory.PRODUCT);
                if (!oneFood) {
                    throw new Error(`Food product not found for inventory id ${inventory.ID}`);
                }
                const oneKind = await modelKind.findByPk(oneFood.FKIND);
                const oneType = await modelType.findByPk(oneFood.FFOR);

                backgroundFondo = "#E9F7EF";
                backgroundProgr = '#48C9B0';
                box = {
                    backgroundFondo: backgroundFondo,
                    backgroundProgr: backgroundProgr,
                    Product: oneFood.FNAME,
                    Section: oneKind.KIND,
                    Units: `${inventory.TOTAL_UNITS}`,
                    UnitsL: `${allBatch.UNITS}`,
                    Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                    Lote: `${inventory.BATCH}`,
                    Type: oneType.ANIMAL,
                    Value: `${inventory.PRICE}`
                };
            } else if (inventory.KIND_OF_PRODUCT === "HYGIENE") {
                const oneHygiene = await modelHygiene.findByPk(inventory.PRODUCT);
                if (!oneHygiene) {
                    throw new Error(`Hygiene product not found for inventory id ${inventory.ID}`);
                }
                const oneKind = await modelKind.findByPk(oneHygiene.HKIND);
                const oneType = await modelType.findByPk(oneHygiene.HFOR);

                backgroundFondo = "#D4E6F1";
                backgroundProgr = '#5DADE2';
                box = {
                    backgroundFondo: backgroundFondo,
                    backgroundProgr: backgroundProgr,
                    Product: oneHygiene.HNAME,
                    Section: oneKind.KIND,
                    Units: `${inventory.TOTAL_UNITS}`,
                    UnitsL: `${allBatch.UNITS}`,
                    Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                    Lote: `${inventory.BATCH}`,
                    Type: oneType.ANIMAL,
                    Value: `${inventory.PRICE}`
                };
            } else if (inventory.KIND_OF_PRODUCT === "CLOTHES") {
                const oneClothe = await modelClothes.findByPk(inventory.PRODUCT);
                if (!oneClothe) {
                    throw new Error(`Clothes product not found for inventory id ${inventory.ID}`);
                }
                const oneKind = await modelKind.findByPk(oneClothe.CKIND);
                const oneType = await modelType.findByPk(oneClothe.CFOR);

                backgroundFondo = "#FEF9E7";
                backgroundProgr = '#48C9B0';
                box = {
                    backgroundFondo: backgroundFondo,
                    backgroundProgr: backgroundProgr,
                    Product: oneClothe.CNAME,
                    Section: oneKind.KIND,
                    Units: `${inventory.TOTAL_UNITS}`,
                    UnitsL: `${allBatch.UNITS}`,
                    Quantitylot: `${(inventory.TOTAL_UNITS / allBatch.UNITS) * 100}`,
                    Lote: `${inventory.BATCH}`,
                    Type: oneType.ANIMAL,
                    Value: `${inventory.PRICE}`
                };
            }

            return box;
        }));

        res.status(200).json({
            set : Encrypt(send)
        });

    } catch (err) {
        res.status(500).json({
            message: 'Server Error',
            error: err.message
        });
    }
};

module.exports = {
    Howmanythere,
    sendBox,
    sendBoxs
}