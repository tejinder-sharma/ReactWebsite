import CategoryItem from "../category-items/category-items.component";

const Directory = ({ categories }) => {
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap -m-4">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
