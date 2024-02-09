/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AddDigitalProduct from '../../features/products/components/digitalProduct/index';

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add digital product"}))
      }, [])


    return(
        <AddDigitalProduct />
    )
}

export default InternalPage