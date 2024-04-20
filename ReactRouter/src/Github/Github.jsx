import React from 'react'
import { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/users/Abusadat18")
        .then((res) => res.json())
        .then((res) => {
            setData(res)
            console.log(data)
        })
    }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github