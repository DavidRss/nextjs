/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AddPhysicalProduct from '../../features/products/components/physicalProduct/index';

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add physical product"}))
      }, [])


    return(
        <AddPhysicalProduct />
    )
}

export default InternalPage