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
        id: page.id || null,
        dateAdded: page.created_time || null,
        name: page.properties.Name || null,
        type: page.properties.Type || null,
        mileage: page.properties.Mileage || null,
        manufacturer: page.properties.Manufacturer || null,
        reg: page.properties["Registered Year"] || null,
        price: page.properties["List Price"] || null,
        image: page.properties.ImageUrl || null,
        description: page.properties.Description || null,
        listing: page.properties.ListingUrl || null,
        status: page.properties.Status?.select.name || null,
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
    .map((result) => ({
      id: result.id || null,
      dateAdded: result.created_time || null,
      brandLogo: result.properties.Brand?.select.name || null,
      text:
        result.properties.Text?.rich_text
          .map((snippet) => snippet.plain_text)
          .join(" ") || null,
      author: result.properties.Customer.title[0]?.plain_text || null,
    }))
  return testimonials
}

export default { getStock, getTestimonials }

/** add a check for empty rows from the api call */
