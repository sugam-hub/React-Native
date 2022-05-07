import React from "react-native";

const foods = [
  {
    key: 1,
    name: "Water",
    time: "10min",
    kcal: "0kcal",
    image: require("../../assets/images/water.jpg"),
    foodDescription:
      "Drinking a glass of water right after waking up does wonders to our weight loss journey.Water contains no calories and helps to superess our appetite, boost our metabolism and makes exercises easier and efficient.",
  },
  {
    key: 2,
    name: "Apple",
    time: "10min",
    kcal: "95kcal",
    image: require("../../assets/images/apple.jpg"),
    foodDescription:
      "You can help yourself to lose weight when you eat an apple.They are so sweet that they can help conquer sweet cravings, and its easy to see why they end up in a lot of desserts Fresh and crunchy apples are packed with healthy flavonoids and fibres that may help burn belly fat. The filling effects of apples may reduce appetite and lead to weight reduction. Apples have several properties that increase feelings of fullness, which may aid weight loss by reducing overall calorie intake.",
  },
  {
    key: 3,
    name: "Banana",
    time: "10sec",
    kcal: "105kcal",
    image: require("../../assets/images/banana.jpg"),
    foodDescription:
      "While one banana has 105 calories, which may seem high for a fruit, their high vitamin, phytochemical, and fiber content makes them a strong addition to a healthy weight-loss plan. The fiber in bananas is a key part of their benefit for weight loss. The fiber in a banana accounts for 12% of the recommended daily value, which directly contributes to weight loss. In fact, eating a high level of fiber may cut the risk of gaining weight by up to 30%. ",
  },
  {
    key: 4,
    name: "Yoghurt",
    time: "10min",
    kcal: "59 kcal per 100 grm",
    image: require("../../assets/images/yoghurt.jpg"),
    foodDescription:
      "Many of us are already aware of the numerous benefits of yogurt. Its refreshing flavours make yogurt one of the most favourite dairy products out there. Different research studies have found out that yogurt is a wonderful supplement to your weight-loss diet as it has the ability to burn your fat and trim your waistline. One particular study suggested that the obese adults who ate three servings of yogurt everyday as a part of limited calorie diet lost 60% more body fat and 22% more weight than those who didnot consume yogurt. This is primarily owing to the findings that the protein and calcium one gets through low-fat dairy products can go a long way in burning fat and reducing weight. Since yogurt is rich in both calcium and protein, yogurt can provide you with many benefits that are wonderful for your gut health and promote weight loss.",
  },
  {
    key: 5,
    name: "Oats",
    time: "10min",
    kcal: "108kcal per 100 grm",
    image: require("../../assets/images/oats.jpg"),
    foodDescription:
      "Oatmeal can help with weight loss because it contains soluble fiber, which can keep you feeling full. This weight loss superfood is high in protein and low in calories, which make it the perfect food for a flat stomach. Oats take time to digest in the body and hence, tend to burn calories. This is what makes oats a good source of energy through the day and lowers your cholesterol.",
  },
  {
    key: 6,
    name: "Chicken Breast",
    time: "10min",
    kcal: "165kcal 100grm",
    image: require("../../assets/images/chicken.jpg"),
    foodDescription:
      "If you're trying to lose weight, then chicken breast is the best cut for you. It is the leanest part of the chicken, which means it has the fewest calories but the most protein. For example, chicken breast is ideal for bodybuilders on a cut, since it has the fewest calories.",
  },
  {
    key: 7,
    name: "Brown Bread",
    time: "10min",
    kcal: "128kcal per slice",
    image: require("../../assets/images/bread.webp"),
    foodDescription:
      "Eating fibre-rich meals can prevent overeating by filling you up quickly. Brown bread is a fibre-rich food item. That is why many experts recommend it for weight loss. It helps keep blood sugar level in check, regulates bowel movements and helps in reducing cholesterol. It also reduces hypertension, risk of stroke, gastrointestinal disorder and obesity. Moreover, it's also low in calories.",
  },
  {
    key: 8,
    name: "Egg",
    time: "10min",
    kcal: "78 kcal boiled 110 kcal fried",
    image: require("../../assets/images/egg.webp"),
    foodDescription:
      "Eggs are a low-calorie food rich in protein and other nutrients. Eating eggs may support weight loss, especially if a person incorporates them into a calorie-controlled diet. Research suggests that eggs boost metabolic activity and increase feelings of fullness which keeps you from snacking on empty calories between meals. Research shows that people who eat eggs in the morning lose more weight and belly fat than those who opt for high carb foods like bagels or cereal.",
  },

  {
    key: 9,
    name: "Soybean",
    time: "10min",
    kcal: "173 kcal per 100 grm",
    image: require("../../assets/images/soybean.jpeg"),
    foodDescription:
      "Loaded with benefits of both soluble and insoluble fibers, soybeans are a good source of healthy plant based fibers and can help in easing out bowel movements. The healthy amount of fiber present in soybeans can actually help in keeping you satiated for a longer duration of time, which further promotes weight loss",
  },
  {
    key: 10,
    name: "Beans",
    time: "10min",
    kcal: "100kcal",
    image: require("../../assets/images/beans.jpg"),
    foodDescription:
      " Beans are one of the healthiest foods you can consume, but they are specifically great for belly fat loss as they are rich in soluble fibre, which fights inflammation that cause belly fat accumulation. Some studies have linked the consumption of beans to a reduced risk of obesity.",
  },
  {
    key: 11,
    name: "Lentiles",
    time: "10min",
    kcal: "116kcal per 100 grm",
    image: require("../../assets/images/lentil.png"),
    foodDescription:
      "Eating more lentils can help you maintain a healthy weight or lose weight. Replacing energy-dense (or high calorie) foods with legumes such as lentils can help us prevent or manage obesity and lose weight. Research suggests that regularly eating lentils may help with the management and prevention of diabetes.",
  },
  {
    key: 12,
    name: "Chickpea",
    time: "10min",
    kcal: "180kcal per 100 grm",
    image: require("../../assets/images/chickpeas.webp"),
    foodDescription:
      "Chickpeas are rich in protein and fiber, both of which aid weight loss. Fibre keeps you fuller for longer and protein satiates hunger. The fiber content in it also takes good care of your digestive system.",
  },
  {
    key: 13,
    name: "Tofu",
    time: "10min",
    kcal: "145 kcal per 100 grm",
    image: require("../../assets/images/tofu.jpg"),
    foodDescription:
      "Tofu is a cholesterol-free, low-calorie, high-protein food that's also rich in bone-boosting calcium and manganese. Tofu may help you to lose weight by keeping you fuller for longer on fewer calories than meat. It may reduce the risk of heart disease, especially when swapped for saturated fat-heavy animal proteins.",
  },
  {
    key: 14,
    name: "Milk",
    time: "10min",
    kcal: "44 kcal per 100 ml",
    image: require("../../assets/images/milk.jpg"),
    foodDescription:
      "Since milk is rich in protein, it may aid weight loss and muscle building. Protein-rich foods like milk can boost weight loss by improving metabolism and increasing fullness after meals, which may lead to lower daily calorie intake",
  },
  {
    key: 15,
    name: "Brown Rice",
    time: "10min",
    kcal: "216 kcal per cup",
    image: require("../../assets/images/brownrice.jpg"),
    foodDescription:
      "Adding brown rice as a dietary staple may help people who are overweight to shed more pounds and reduce their body mass index, a common marker of healthy or unhealthy weight. Brown rice also contains more dietary fiber than white rice. Higher-fiber foods cause you to feel fuller longer while taking in fewer calories.",
  },
];

export default foods;
