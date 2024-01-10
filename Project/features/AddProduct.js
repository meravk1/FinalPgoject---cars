import { useDispatch } from "react-redux";
import { addProduct } from "./ProductSlice";

const Addproduct = () => {
  let dispatch = useDispatch();
  let empty = {
    id: "",
    name: "",
    descirption: "",
    imgUrl: "",
    content: "",
    price: "",
    isCooling: "",
  };
  const change = (e) => {
    let { name, value, type } = e.target;
    if (type === "number") value = Number(value);
    else if (type === "checkbox") value = e.target.checked;
    empty[name] = value;
  };
  
const submit=(e)=>{
  e.preventDefault();
  if (empty.src && empty.title) dispatch(addProduct(empty));
}

  return (
    <form
      onSubmit={(e) => submit(e)}
    >
      <input type="text" name="name" placeholder="name" onChange={change} />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={change}
      />
      <input type="text" name="pohne" placeholder="pohne" onChange={change} />
      <input type="submit" />
    </form>
  );
};
export default Addproduct;
