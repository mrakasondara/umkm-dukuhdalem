import Skeleton  from "@mui/material/Skeleton"
const ItemSkeleton = () =>{
    return (
        <div className="flex flex-col gap-2">
            <Skeleton variant="rounded" width={'100%'} height={160}/>
            <Skeleton variant="rectangular" width={'100%'} height={20}/>
            <Skeleton variant="rounded" width={'100%'} height={40}/>
            <Skeleton variant="rectangular" width={'100%'} height={70}/>
            <div className="w-full flex gap-1">
                <Skeleton variant="rounded" width={'50%'} height={40}/>
                <Skeleton variant="rounded" width={'50%'} height={40}/>
            </div>

        </div>
    )
}

export default ItemSkeleton