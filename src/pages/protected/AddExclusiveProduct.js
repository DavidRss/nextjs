/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AddExclusiveProduct from '../../features/products/components/exclusiveProduct/index';

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add digital product"}))
      }, [])


    return(
        <AddExclusiveProduct />
    )
}

export default InternalPage