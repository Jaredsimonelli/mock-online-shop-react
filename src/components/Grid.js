import { useLocation } from 'react-router-dom'

const Grid = ({ items }) => {
    //const location = useLocation()

    return (
        <div className="container">
            <div className="grid">
                {
                    items.map(item =>
                        < div className="box-wrapper" style={{ color: item.color }} value={item} >
                            <div className="box">
                                <h3>{item.name}</h3>
                                <p> 604 kcal - totally vegan </p>
                            </div>
                        </div>)
                }
                
            </div>
        </div>
        

    )
}

export default Grid
