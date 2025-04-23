"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 30,
            text: "Boiled eggs are a nutritious choice, packed with protein, vitamins, and minerals.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 250,
            text: "Ramen is a beloved Japanese noodle dish that has gained global popularity for its rich flavors and comforting appeal.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 750,
            text: "Grilled chicken is a delicious and versatile dish loved worldwide for its smoky flavor and tender texture.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 180,
            text: "Cake is a sweet and indulgent baked dessert that comes in endless varieties, making it a universal favorite for celebrations or simple treats.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 130,
            text: "A burger is a popular sandwich consisting of a cooked patty-typically made from ground beef, chicken, or plant-based alternatives-placed inside a sliced bun.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 200,
            text: "Pancakes are flat, round, and fluffy cakes made from a batter of flour, eggs, milk, and a leavening agent like baking powder, cooked on a griddle or frying pan.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map