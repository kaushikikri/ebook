export const Rating = ({ rating }) => {
    const arr = Array(5).fill(false);

    for (let i = 0; i < rating; i++) {
        arr[i] = true;
    }

    return (
        <>
            {arr.map((item,index) => (
                item ?
                    (<i key={index} className="text-xl mr-1 text-yellow-500 bi bi-star-fill"></i>)
                    :
                    (<i key={index} className="text-xl mr-1 bi bi-star dark:text-slate-200"></i>)
            ))}
        </>
    )
}
