import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
})

export const getStock = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_STOCK_DB_ID,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  })

  const stock = response.results
    .filter((result) => result.properties.isDisplayed.checkbox)
    .map((page) => {
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
        listing: page.properties.ListingUrl,
        status: page.properties.Status.select.name,
      }
    })

  return stock
}

export const getTestimonials = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_TESTIMONIALS_DB_ID,
  })
  const testimonials = response.results
    .filter((result) => result.properties.isDisplayed.checkbox)
    .map((result) => {
      return {
        id: result.id,
        dateAdded: result.created_time,
        brandLogo: result.properties.Brand.select.name,
        text: result.properties.Text.rich_text
          .map((snippet) => snippet.plain_text)
          .join(" "),
        author: result.properties.Customer.title[0].plain_text,
      }
    })
  return testimonials
}

export default { getStock, getTestimonials }
