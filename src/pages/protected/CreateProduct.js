/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CreateProduct from '../../features/products/components/createProduct/CreateProduct'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add physical product"}))
      }, [])


    return(
        <CreateProduct />
    )
}

export default InternalPage