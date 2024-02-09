/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ChangeProduct from '../../features/products/components/changeProduct/ChangeProduct'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add physical product"}))
      }, [])


    return(
        <ChangeProduct />
    )
}

export default InternalPage