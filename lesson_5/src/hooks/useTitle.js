import { useEffect } from 'react'
const useTitle = (title) => {
    useEffect(() => {
        const PrevTitle = document.title
        document.title = title
        return () => document.title = PrevTitle
    }, [title])
}
export default useTitle