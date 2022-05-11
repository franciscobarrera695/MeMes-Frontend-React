import Form from '../components/Form'
import ListPostGlobal from '../components/ListPostGlobal'
const Inicio = () => {




  return (
    <>
      <div className="flex flex-row justify-between ...">
        <div className='w-1/3'>
          <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" >

            <p className="font-bold uppercase text-indigo-600 my-2">
              Amigos{" "}
              <span className="font-semibold normal-case text-black"></span>
            </p>

            <p className="font-bold uppercase text-indigo-600 my-2">
              Juegos{" "}
              <span className="font-semibold normal-case text-black"></span>
            </p>

          </div>


        </div>
        <div className='w-2/3'>
          <Form />
          <ListPostGlobal />
        </div>
        <div className='w-1/3'>
          <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" >

            <p className="font-bold uppercase text-indigo-600 my-2">
              {" "}
              <span className="font-semibold normal-case text-black"></span>
            </p>

            <p className="font-bold uppercase text-indigo-600 my-2">
              {" "}
              <span className="font-semibold normal-case text-black"></span>
            </p>

          </div>
        </div>

      </div>
    </>
  )
}

export default Inicio