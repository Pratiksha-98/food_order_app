import classes from './AvailableMeals.module.css';
import MealItem from './MealItems/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'cheese & corn pizza',
        description: 'Sweet & juicy golden corn with mozzarella cheese',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Crispy Veg burger',

        description: 'Crispy veg patty burger',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Cheese Fries',
        description: 'Fries with cheese melted on top',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Choco Lava Cake',
        description: 'Chocolate lovers delight!',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealslist = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealslist}</ul>
            </Card>
        </section>
    );

}
export default AvailableMeals;