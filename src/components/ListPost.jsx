import usePost from '../hooks/usePost'
import Post from './Post'



const ListPost = () => {
  const {publicaciones} = usePost()
 
  return (
    <>
      {publicaciones.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Tus Publicaciones</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Sigue{" "}<span className='text-indigo-600 font-bold'>
          Publicando</span></p>
          {publicaciones.map(publicacion =>(
            <Post
            key={publicacion._id}
            publicacion={publicacion}
            />
          ))}
        </>
      ) : (
        <>
        <h2 className='font-black text-3xl text-center'>No hay Post</h2>
        <p className='text-xl mt-5 mb-10 text-center'>Comienza publicando algo... <span className='text-indigo-600 font-bold'>
          y se vera debajo</span>
          
          </p>
        </>
      )}
    
    </>
  )
}

export default ListPost