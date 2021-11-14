const MealItem = ({ meal }) => {
  // last commit
  return (
    <div className="w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50">
      <img src={meal.image} className="w-auto h-auto" alt="Chicken Salad" />
      <div className="text-center py-2">
        <h3 className="text-xl font-normal">
          {meal.name}
          <span className="px-3 font-light text-yellow-500">
            ({meal.dish} dishes)
          </span>
        </h3>
        <p className="text-gray-500 text-base">{meal.chef}</p>
        <button className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2">
          Details
        </button>
      </div>
    </div>
  );
};
export default MealItem;
