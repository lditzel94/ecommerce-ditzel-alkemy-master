import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ item }) => {
  return (
    <div
      key={item.id}
      className="md:h-52 mb-5 sm:m-5 grid shadow-xl hover:shadow-2xl bg-white rounded-md items-center"
    >
      <Link to={`/Producto/${item.id}`}>
        <button className="md:ml-10 my-2 md:flex">
          <div>
            <img
              src={item.image}
              alt={item.imageAlt}
              className="h-40 mx-auto w-40 max-w-md object-contain"
            />
          </div>
          <div className="md:m-5 md:pl-10 md:text-left w-96">
            <div className="text-xl text-slate-700">{item.name}</div>
            <div className="flex justify-evenly md:justify-start text-xl my-2">
              <div className="text-sky-600 md:mr-5">${item.price}</div>
              <div>Stock: {item.stock}</div>
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 mb-3 rounded w-40 mx-auto">
              Ver Detalle
            </button>
          </div>
        </button>
      </Link>
    </div>
  );
});

export default Item;
