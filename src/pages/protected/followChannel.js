/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import FollowChannel from '../../features/earn/followChannel/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Follow channel or profile"}))
      }, [])


    return(
        <FollowChannel />
    )
}

export default InternalPage