import MealItem from "./MealItem";
const MealList = (props) => {
  return (
    <div className="flex flex-wrap">
      {props.meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </div>
  );
};
export default MealList;
