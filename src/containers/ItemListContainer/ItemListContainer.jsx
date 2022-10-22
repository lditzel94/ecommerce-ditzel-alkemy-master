import Spinner from "../../components/Spinner/Spinner";
import ItemList from "./ItemList";
import { useFirebaseStore } from "../../hooks/useFirebaseStore";

const ItemListContainer = () => {

  const { loading, items } = useFirebaseStore();

  return (
    <>
      <div className="text-center">
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;

