import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
})

export const getStock = async () => {
  const payload = {
    path: `databases/${process.env.NOTION_DATABASE_ID}/query`,
    method: "POST",
  }
  const { results } = await notion.request(payload)

  const stock = results.map((page) => {
    return {
      name: page.properties.Name,
      type: page.properties.Type,
      mileage: page.properties.Mileage,
      manufacturer: page.properties.Manufacturer,
    }
  })

  if (!results) {
    return {
      notFound: true,
    }
  }
  return {
    props: { stock },
  }
}
