import { urlFor } from "../../lib/image";
import client from "../../client";


interface DataType {
  title: string
  description: string
  image: string
}

async function getData() {
  const query = `*[_type == "product"]{
title,
description,
image
}`
  const data = await client.fetch(query)
  return data
}

const dataShow: DataType[] = await getData()

const SimpleData = () => {
  return (
    <>
      {dataShow.map((item) => {
        return (
          <div key={item.title}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img src={urlFor(item.image).url()} alt={item.title} width={400} height={400} />
          </div>
        )
      })}
    </>
  )
}

export default SimpleData
