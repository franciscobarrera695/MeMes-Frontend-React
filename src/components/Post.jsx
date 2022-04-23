import usePost from "../hooks/usePost";

const Post = ({ publicacion }) => {
  const { setEdicion,eliminarPublicacion } = usePost();

  const { title, image, created_at,_id} = publicacion;

  const formaterFecha = (created_at) => {
    const nuevaFecha = new Date(created_at);
    return new Intl.DateTimeFormat("es-AR", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-600 my-2">
        Nombre:{" "}
        <span className="font-semibold normal-case text-black">{title}</span>
      </p>
      <p className="font-bold uppercase text-indigo-600 my-2">
        imagen:{" "}
        <img src={image.url} alt="" />
        <span className="font-semibold normal-case text-black">{image.url}</span>
      </p>
      <p className="font-bold uppercase text-indigo-600 my-2">
        Dia:{" "}
        <span className="font-semibold normal-case text-black">
          {formaterFecha(created_at)} 
        </span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type="button"
          className=" bg-indigo-600 py-3 px-10 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-indigo-800 shadow-lg shadow-indigo-500/50 "
          onClick={() => setEdicion(publicacion)}
        >
          Editar
        </button>
        <button
          type="button"
          className=" bg-red-600 py-3 px-10 text-white uppercase font-bold cursor-pointer transition-colors rounded-xl hover:bg-red-800 shadow-lg shadow-red-500/50 "
          onClick={()=>eliminarPublicacion(_id)}        
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Post;
