import { useState, useEffect } from "react";
import clienteAxios from "../config/Axios.config";



const ListPostGlobal = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const obtenerPostGlobal = async () => {
      try {

        const config = {
          headers: {
            "Content-Type": "application/json",

          }
        }
        const res = await clienteAxios('/post-global', config)
        setPosts(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerPostGlobal()
  }, [])

  console.log(posts)

  return (
    <>

      {posts.map(publicacion => (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" key={publicacion._id}>

          <p className="font-bold uppercase text-indigo-600 my-2">
            Usuario:{" "}
            <span className="font-semibold normal-case text-black">{publicacion.user_name}</span>
          </p>

          <p className="font-bold uppercase text-indigo-600 my-2">
            Nombre:{" "}
            <span className="font-semibold normal-case text-black">{publicacion.title}</span>
          </p>

        </div>
      ))}
    </>
  )
}

export default ListPostGlobal