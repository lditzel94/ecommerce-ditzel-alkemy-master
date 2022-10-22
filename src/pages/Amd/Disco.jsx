import PanelHardware from '../../components/PanelHardware/PanelHardware'
import ItemBuilContainer from '../../containers/ItemBuildContainer/ItemBuildContainer'
import { Link, useNavigate } from 'react-router-dom'

const Disco = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mt-5 md:flex justify-center">
        <div className="hidden md:block">
          <PanelHardware />
          <div className="flex space-x-5 justify-center mt-5">
            <button
              onClick={ () => navigate( -1 ) }
              className="bg-sky-900 rounded py-2 px-4 text-white"
            >
              Volver atrás
            </button>
            <Link to="/Gabinete">
              <button className="bg-sky-900 rounded py-2 px-4 text-white">
                Saltear paso
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <ItemBuilContainer prop="disco" filter="Gabinete"></ItemBuilContainer>
        </div>
      </div>
    </>
  )
}

export default Disco
