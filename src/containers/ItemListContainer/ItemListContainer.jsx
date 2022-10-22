import Spinner from '../../components/Spinner/Spinner'
import ItemList from './ItemList'
import { useFirebaseStore } from '../../hooks/useFirebaseStore'
import { useSearchParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [ searchParams ] = useSearchParams(),
    searchKeyword = searchParams.get( 'searchKeyword' ),
    { loading, items } = useFirebaseStore(),
    filter = Array.from( items ).filter( element => element.name.includes( searchKeyword ) )

  return (
    <>
      <div className="text-center">
        { loading ? <Spinner /> : <ItemList items={ filter.length > 0 ? filter : items } /> }
      </div>
    </>
  )
}

export default ItemListContainer

