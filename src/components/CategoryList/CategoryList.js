import AddCategory from "../AddCategory/AddCategory";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import DeleteCategory from "../DelateCategory/DeleteCategory";
import ("./CategoryList.css");

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>

      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}