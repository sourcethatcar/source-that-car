import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
})

export const getStock = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  })
  // console.log(response)
  // response.results.map((result) => console.log(result.properties))

  const stock = response.results.map((page) => {
    return {
      id: page.id,
      dateAdded: page.created_time,
      name: page.properties.Name,
      type: page.properties.Type,
      mileage: page.properties.Mileage,
      manufacturer: page.properties.Manufacturer,
      reg: page.properties["Registered Year"],
      price: page.properties["List Price"],
      image: page.properties.ImageUrl,
      description: page.properties.Description,
    }
  })

  return stock
}

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}
export const getBlock = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response
}
